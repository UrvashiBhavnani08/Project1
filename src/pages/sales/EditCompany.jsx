// useEffect(() => {
//     // dispatch(getCompany(path.id))
//     // const fetchData = async () => {
//     //   const res = await axios.get(
//     //     `http://localhost:5000/ api/sales/get/${path}`
//     //   );
//     // };
//     // fetchData();
//   }, [path.id]);

// const [formData, setFormData] = useState({
//     clientName: company?.clientName || '',
//     companyName: company?.companyName || '',
//     companyType: company?.companyType || '',
//     industryType: company?.industryType || '',
//     emails: company?.emails || [{ email: '', type: '' }],
//     phones: company?.phones || [{ phone: '', type: '' }],
//     website: company?.website || '',
//     address: company?.address || '',
//     country: company?.country || '',
//     state: company?.state || '',
//     city: company?.city || '',
//     responsiblePerson: company?.responsiblePerson || '',
//   });



import { ContainerMain, Field, Label, SelectField, TabContentForm } from '../../components/styledComponents/StyledComponents';
import { getCompany } from '../../redux/sales/salesAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';


const EditCompany = () => {


    const navigate = useNavigate()
    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    const path = useParams()

    const company = useSelector((state) => state.sales.company);

    console.log(company);

    const [formData, setFormData] = useState({
        client_name: "",
        company_name: "",
        company_type: "",
        company_size: "",
        no_of_employee: "",
        industry_type: "",
        emails: [{ email: "", type: "" }],
        phones: [{ phone: "", type: "" }],
        website: "",
        address: "",
        country: "",
        state: "",
        city: "",
        responsible_person: user.user.email,
    });

    useEffect(() => {
        dispatch(getCompany(path.id))
        

        return () => {};
    }, [])

    console.log(path);

    

    // const [formData, setFormData] = useState({
    //     clientName: company?.clientName || '',
    //     companyName: company?.companyName || '',
    //     companyType: company?.companyType || '',
    //     industryType: company?.industryType || '',
    //     emails: company?.emails || [{ email: '', type: '' }],
    //     phones: company?.phones || [{ phone: '', type: '' }],
    //     website: company?.website || '',
    //     address: company?.address || '',
    //     country: company?.country || '',
    //     state: company?.state || '',
    //     city: company?.city || '',
    //     responsiblePerson: company?.responsiblePerson || '',
    //   });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEmailChange = (e, index) => {
        const { name, value } = e.target;
        const newEmails = [...formData.emails];
        newEmails[index][name] = value;
        setFormData({ ...formData, emails: newEmails });
    };

    const handlePhoneChange = (e, index) => {
        const { name, value } = e.target;
        const newPhones = [...formData.phones];
        newPhones[index][name] = value;
        setFormData({ ...formData, phones: newPhones });
    };

    const handleAddEmail = () => {
        setFormData({
            ...formData,
            emails: [...formData.emails, { email: "", type: "" }],
        });
    };

    const handleAddPhone = () => {
        setFormData({
            ...formData,
            phones: [...formData.phones, { phone: "", type: "" }],
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // dispatch(createCompany(formData))
        navigate("/company/list")
        notification.success({
            message: 'Company Added',
            description: `${formData.company_name} has been added successfully.`,
        });
    };


    const handleRemoveEmail = (index) => {
        const newEmails = [...formData.emails];
        newEmails.splice(index, 1);
        setFormData({ ...formData, emails: newEmails });
    };

    const handleRemovePhone = (index) => {
        const newPhones = [...formData.phones];
        newPhones.splice(index, 1);
        setFormData({ ...formData, phones: newPhones });
    };


    if (!company) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <ContainerMain>

                <div className="row">
                    <div className="col-12">
                        <div className="mb-2">
                            <h1>Edit Company</h1>
                            <div className="text-zero">
                                <Link to="/company/list"><button className="btn">BACK</button></Link>
                            </div>
                            <nav className="breadcrumb">
                                <ol>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="li-2" style={{ color: "#6c757d" }}>
                                        Sales
                                    </li>

                                    <li className="li-2" style={{ color: "#6c757d" }}>
                                        Add Company
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <ul className="separator-tabs">
                        </ul>

                        <TabContentForm>

                            {company && (
                                <>
                                    <form onSubmit={handleSubmit}>

                                        <div className="tab-row">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-body-content">
                                                        <div className="mt-5">
                                                            <Label htmlFor="client_name">Client Name</Label>
                                                            <Field
                                                                type="text"
                                                                id="client_name"
                                                                name="client_name"
                                                                value={company.client_name}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="mt-5">
                                                            <Label htmlFor="company_name">Company Name</Label>
                                                            <Field
                                                                type="text"
                                                                id="company_name"
                                                                name="company_name"
                                                                value={company.company_name}
                                                                onChange={handleInputChange}

                                                            />
                                                        </div>

                                                    </div>

                                                    <div className="card-body-content">
                                                        <div className="mt-5">
                                                            <Label htmlFor="company_type">Company Type</Label>
                                                            <SelectField id="company_type"
                                                                name="company_type"
                                                                value={company.company_type}
                                                                onChange={handleInputChange}>
                                                                <option value="" disabled>Not Selected</option>
                                                                <option value="Client">Client</option>
                                                                <option value="Supplier">Supplier</option>
                                                                <option value="Competitor">Competitor</option>
                                                                <option value="Partner">Partner</option>
                                                                <option value="Other">Other</option>
                                                            </SelectField>
                                                        </div>


                                                        <div className="mt-5">
                                                            <Label htmlFor="company_size">Company Size</Label>
                                                            <SelectField id="company_size"
                                                                name="company_size"
                                                                value={company.company_size}
                                                                onChange={handleInputChange}>
                                                                <option value="small">Small</option>
                                                                <option value="medium">Medium</option>
                                                                <option value="large">Large</option>
                                                            </SelectField>
                                                        </div>

                                                    </div>



                                                    <div className="card-body-content">

                                                        <div className="mt-5">
                                                            <Label htmlFor="no_of_employee">No. of employees</Label>
                                                            <Field
                                                                type="text"
                                                                id="no_of_employee"
                                                                name="no_of_employee"
                                                                value={company.no_of_employee}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="mt-5">
                                                            <Label htmlFor="industry_type">Industry Type</Label>
                                                            <Field
                                                                type="text"
                                                                id="industry_type"
                                                                name="industry_type"
                                                                value={company.industry_type}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>




                                                    <div className='mt-5'>
                                                        <Label>Emails</Label>
                                                        {company.email.map((email, index) => (
                                                            <div key={index}>
                                                                <Field
                                                                    type="text"
                                                                    name="email"
                                                                    value={email.email}
                                                                    onChange={(e) => handleEmailChange(e, index)}
                                                                    style={{ width: "65%", marginRight: "10px" }}
                                                                />
                                                                <SelectField
                                                                    name="type"
                                                                    value={email.type}
                                                                    onChange={(e) => handleEmailChange(e, index)}
                                                                    style={{ width: "33.5%" }}
                                                                >
                                                                    <option value="">Select type</option>
                                                                    <option value="work">Work</option>
                                                                    <option value="personal">Personal</option>
                                                                </SelectField>
                                                                {formData.emails.length > 1 && (
                                                                    <button type="button" onClick={() => handleRemoveEmail(index)} style={{ margin: "5px 0px", color: "gray" }}>
                                                                        Remove
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                        <button type="button" onClick={handleAddEmail} style={{ margin: "15px 0px", color: "gray" }}>
                                                            Add Email
                                                        </button>
                                                    </div>

                                                    <div className='mt-5'>
                                                        <Label>Phones</Label>
                                                        {company.phone.map((phone, index) => (
                                                            <div key={index}>
                                                                <Field
                                                                    type="text"
                                                                    name="phone"
                                                                    value={phone.phone}
                                                                    onChange={(e) => handlePhoneChange(e, index)}
                                                                    style={{ width: "65%", marginRight: "10px" }}
                                                                />
                                                                <SelectField
                                                                    name="type"
                                                                    value={phone.type}
                                                                    onChange={(e) => handlePhoneChange(e, index)}
                                                                    style={{ width: "33.5%" }}
                                                                >
                                                                    <option value="">Select type</option>
                                                                    <option value="work">Work</option>
                                                                    <option value="home">Home</option>
                                                                    <option value="mobile">Mobile</option>
                                                                </SelectField>
                                                                {formData.phones.length > 1 && (
                                                                    <button type="button" onClick={() => handleRemovePhone(index)} style={{ margin: "5px 0px", color: "gray" }}>
                                                                        Remove
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                        <button type="button" onClick={handleAddPhone} style={{ margin: "15px 0px", color: "gray" }}>
                                                            Add Phone
                                                        </button>
                                                    </div>



                                                    <div
                                                        style={{
                                                            display: "grid",
                                                            gridTemplateColumns: "1fr 1fr 1fr",
                                                            gridGap: "10px",
                                                        }}
                                                    >
                                                        <div className="mt-5">
                                                            <Label>Country</Label>
                                                            <Field
                                                                type="text"
                                                                id="country"
                                                                name="country"
                                                                value={formData.country}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="mt-5">
                                                            <Label>State</Label>
                                                            <Field
                                                                type="text"
                                                                id="state"
                                                                name="state"
                                                                value={formData.country}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>

                                                        <div className="mt-5">
                                                            <Label>City</Label>
                                                            <Field
                                                                type="text"
                                                                id="city"
                                                                name="city"
                                                                value={formData.city}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="mt-5">
                                                        <Label>Website</Label>
                                                        <Field
                                                            type="text"
                                                            id="website"
                                                            name="website"
                                                            value={formData.website}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>

                                                    <div className="mt-5">
                                                        <Label>Added By</Label>
                                                        <Field
                                                            type="text"
                                                            id="responsible_person"
                                                            name="responsible_person"
                                                            value={formData.responsible_person}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>


                                                    <div className="form-btn" style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                                                        <button style={{ padding: "8px 20px", border: "1px solid red", margin: "0px 10px", borderRadius: "6px" }}>Cancel</button>
                                                        <button style={{ padding: "8px 20px", border: "1px solid red", margin: "0px 10px", borderRadius: "6px" }}>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            )}

                        </TabContentForm>


                    </div>
                </div>
            </ContainerMain>


        </>
    );


};

export default EditCompany;



