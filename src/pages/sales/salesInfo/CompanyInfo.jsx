// import React, { useState } from "react";
// import { createCompany } from '../../redux/sales/salesAction';
// import { useDispatch } from 'react-redux';

// const CreateCompany = ({company}) => {

// const [formData, setFormData] = useState({
//     client_name: "",
//     company_name: "",
//     company_type: "",
//     industry_type: "",
//     emails: [{ email: "", type: "" }],
//     phones: [{ phone: "", type: "" }],
//     website: "",
//     address: "",
//     country: "",
//     state: "",
//     city: "",
//     responsible_person: "",
// });

// // useEffect(() => {
// //     const fetchData = async () => {
// //       const res = await axios.get(
// //         `http://localhost:5000/ api/sales/get/${path}`
// //       );
// //     };
// //     fetchData();
// //   }, [path]);

// // const [formData, setFormData] = useState({
// //     clientName: company?.clientName || '',
// //     companyName: company?.companyName || '',
// //     companyType: company?.companyType || '',
// //     industryType: company?.industryType || '',
// //     emails: company?.emails || [{ email: '', type: '' }],
// //     phones: company?.phones || [{ phone: '', type: '' }],
// //     website: company?.website || '',
// //     address: company?.address || '',
// //     country: company?.country || '',
// //     state: company?.state || '',
// //     city: company?.city || '',
// //     responsiblePerson: company?.responsiblePerson || '',
// //   });

// const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
// };

// const handleEmailChange = (e, index) => {
//     const { name, value } = e.target;
//     const newEmails = [...formData.emails];
//     newEmails[index][name] = value;
//     setFormData({ ...formData, emails: newEmails });
// };

// const handlePhoneChange = (e, index) => {
//     const { name, value } = e.target;
//     const newPhones = [...formData.phones];
//     newPhones[index][name] = value;
//     setFormData({ ...formData, phones: newPhones });
// };

// const handleAddEmail = () => {
//     setFormData({
//         ...formData,
//         emails: [...formData.emails, { email: "", type: "" }],
//     });
// };

// const handleAddPhone = () => {
//     setFormData({
//         ...formData,
//         phones: [...formData.phones, { phone: "", type: "" }],
//     });
// };

// const dispatch = useDispatch()

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     dispatch(createCompany(formData))
// };


// const handleRemoveEmail = (index) => {
//     const newEmails = [...formData.emails];
//     newEmails.splice(index, 1);
//     setFormData({ ...formData, emails: newEmails });
// };

// const handleRemovePhone = (index) => {
//     const newPhones = [...formData.phones];
//     newPhones.splice(index, 1);
//     setFormData({ ...formData, phones: newPhones });
// };
//     return (
//         <>

//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="client_name">Client Name</label>
//                     <input
//                         type="text"
//                         id="client_name"
//                         name="client_name"
//                         value={formData.client_name}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="company_name">Company Name</label>
//                     <input
//                         type="text"
//                         id="company_name"
//                         name="company_name"
//                         value={formData.company_name}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div>
// <label htmlFor="company_type">Company Type</label>
// <input
//     type="text"
//     id="company_type"
//     name="company_type"
//     value={formData.company_type}
//     onChange={handleInputChange}
// />
//                 </div>
//                 <div>
// <label htmlFor="industry_type">Industry Type</label>
// <input
//     type="text"
//     id="industry_type"
//     name="industry_type"
//     value={formData.industry_type}
//     onChange={handleInputChange}
// />
//                 </div>


// <div>
//     <label>Emails</label>
//     {formData.emails.map((email, index) => (
//         <div key={index}>
//             <input
//                 type="text"
//                 name="email"
//                 value={email.email}
//                 onChange={(e) => handleEmailChange(e, index)}
//             />
//             <select
//                 name="type"
//                 value={email.type}
//                 onChange={(e) => handleEmailChange(e, index)}
//             >
//                 <option value="">Select type</option>
//                 <option value="work">Work</option>
//                 <option value="personal">Personal</option>
//             </select>
//             {formData.emails.length > 1 && (
//                 <button type="button" onClick={() => handleRemoveEmail(index)}>
//                     Remove
//                 </button>
//             )}
//         </div>
//     ))}
//     <button type="button" onClick={handleAddEmail}>
//         Add Email
//     </button>
// </div>

// <div>
//     <label>Phones</label>
//     {formData.phones.map((phone, index) => (
//         <div key={index}>
//             <input
//                 type="text"
//                 name="phone"
//                 value={phone.phone}
//                 onChange={(e) => handlePhoneChange(e, index)}
//             />
//             <select
//                 name="type"
//                 value={phone.type}
//                 onChange={(e) => handlePhoneChange(e, index)}
//             >
//                 <option value="">Select type</option>
//                 <option value="work">Work</option>
//                 <option value="home">Home</option>
//                 <option value="mobile">Mobile</option>
//             </select>
//             {formData.phones.length > 1 && (
//                 <button type="button" onClick={() => handleRemovePhone(index)}>
//                     Remove
//                 </button>
//             )}
//         </div>
//     ))}
//     <button type="button" onClick={handleAddPhone}>
//         Add Phone
//     </button>
// </div>


//                 <div>
//                     <label htmlFor="website">Website</label>
//                     <input
//                         type="text"
//                         id="website"
//                         name="website"
//                         value={formData.website}
//                         onChange={handleInputChange}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="address">Address</label>
//                     <input
//                         type="text"
//                         id="address"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                     />
//                 </div>


//                 <div>
//                     <label htmlFor="country">Country</label>
//                     <input
//                         type="text"
//                         id="country"
//                         name="country"
//                         value={formData.country}
//                         onChange={handleInputChange}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="state">State</label>
//                     <input
//                         type="text"
//                         id="state"
//                         name="state"
//                         value={formData.country}
//                         onChange={handleInputChange}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="city">City</label>
//                     <input
//                         type="text"
//                         id="city"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleInputChange}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="">Responsible Person</label>
//                     <input
//                         type="text"
//                         id="responsible_person"
//                         name="responsible_person"
//                         value={formData.responsible_person}
//                         onChange={handleInputChange}
//                     />
//                 </div>

//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>


//             </form>

//         </>
//     )
// }

// export default CreateCompany






// ---------------------


import { Drawer } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
// import { Field, Label, SelectField, TabContentForm } from '../../components/styledComponents/StyledComponents';
// import { createCompany } from '../../redux/sales/salesAction';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ContainerMain } from '../../../components/styledComponents/StyledComponents';
// import { useState } from 'react';
import { getCompany } from '../../../redux/sales/salesAction';


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


const CompanyInfo = ({ openP, setOpenP, companyId }) => {

    const company = useSelector((state) => state.sales.company);

    console.log(company);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompany(companyId))
    }, [companyId])


    console.log(companyId);

    const onClose = () => {
        setOpenP(false);
    };

    if (!company) {
        return <div>Loading...</div>;
    }



    return (
        <>
            <Drawer
                title={company.company_name}
                width={1200}
                onClose={onClose}
                open={openP}
                bodyStyle={{
                    paddingBottom: 80,
                }}
            >

                <>
                    <CompanyInfoS>
                        <div className="info">
                            <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-2"> About Company </h2>
                                <h2 className="text-2xl font-bold mb-2"> {company.company_name} </h2>
                                <p className="text-gray-700 mb-2">{company.company_type}</p>
                                <p className="text-gray-700 mb-2">{company.industry_type}</p>
                                <p className="text-gray-700 mb-2">{company.company_size}</p>
                                <p className="text-gray-700 mb-2">{company.no_of_employee}</p>
                                <div className="mb-2">
                                    <h3 className="font-bold text-gray-900 mb-1">Contact Information</h3>
                                    {/* <p className="text-gray-700 mb-1">{company.email.map((e)=>{
                                return(
                                    <>
                                    <span>{e.email}</span>
                                    <span>{e.type}</span>
                                    </>
                                )
                            })}</p> */}

                                    {company.email && <p className="text-gray-700 mb-1">{company.email.map((e) => {
                                        return (
                                            <>
                                                <span>{e.email}</span>
                                                <span>{e.type}</span>
                                            </>
                                        )
                                    })}</p>}
                                    {/* <p className="text-gray-700 mb-1">{company.phone}</p> */}
                                    <a href={company.website} className="text-blue-500 hover:underline">{company.website}</a>
                                </div>
                                <div className="mb-2">
                                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                                    <p className="text-gray-700 mb-1">{company.address}</p>
                                    <p className="text-gray-700 mb-1">{company.city}, {company.state}, {company.country}</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Responsible Person</h3>
                                    <p className="text-gray-700 mb-1">{company.responsible_person}</p>
                                </div>
                            </div>
                        </div>

                        <div className="activity">

                            <div className="bg-white shadow rounded-lg p-6">

                            <h2 className="text-2xl font-bold mb-2"> Activity </h2>


                                <Timeline position="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{ m: 'auto 0' }}
                                            align="right"
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            9:30 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector />
                                            <TimelineDot>
                                                <FastfoodIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" component="span">
                                                Eat
                                            </Typography>
                                            <Typography>Because you need strength</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{ m: 'auto 0' }}
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector />
                                            <TimelineDot color="primary">
                                                <LaptopMacIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" component="span">
                                                Code
                                            </Typography>
                                            <Typography>Because it&apos;s awesome!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector />
                                            <TimelineDot color="primary" variant="outlined">
                                                <HotelIcon />
                                            </TimelineDot>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" component="span">
                                                Sleep
                                            </Typography>
                                            <Typography>Because you need rest</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineDot color="secondary">
                                                <RepeatIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" component="span">
                                                Repeat
                                            </Typography>
                                            <Typography>Because this is the life you love!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineDot color="secondary">
                                                <RepeatIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" component="span">
                                                Repeat
                                            </Typography>
                                            <Typography>Because this is the life you love!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineDot color="secondary">
                                                <RepeatIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" component="span">
                                                Repeat
                                            </Typography>
                                            <Typography>Because this is the life you love!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>

                            </div>

                        </div>
                    </CompanyInfoS>
                </>




            </Drawer>
        </>
    );
};
export default CompanyInfo;


const CompanyInfoS = styled.div`
    display: flex;
    height: 1200px;
    position: relative;
    .info{
        position: sticky;
        top: 0px;
        height: max-content;
        flex: 0.7;
        margin-right: 20px;
    }

    .activity{
        flex: 1;
    }
`

