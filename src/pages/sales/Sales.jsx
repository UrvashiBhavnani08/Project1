

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getCompanies, deleteCompany } from '../../redux/sales/salesAction';
import { ContainerMain } from '../../components/styledComponents/StyledComponents';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import CreateCompany from './CreateCompany';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import CompanyCards from './salesInfo/CompanyCard';
// import { Card, notification } from 'antd';
import CompanyInfo from './salesInfo/CompanyInfo';
import { Chip } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Card, notification } from 'antd';
import avatar from '../../data/avatar.png'

// import Swal from 'sweetalert2'

const { Meta } = Card;

const Sales = () => {

  const companies = useSelector((state) => state.sales.companies);
  const loading = useSelector((state) => state.sales.loading);

  console.log(loading);


  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const navigate = useNavigate()


  const [open, setOpen] = useState(false);

  const [openP, setOpenP] = useState(false);

  const [companyId, setCompanyId] = useState("");

  const [formKey, setFormKey] = useState(0);

  const [toggleState, setToggleState] = useState("companyTbl");

  const [edit, setEdit] = useState(false)

  const [editId, setEditID] = useState("")

  console.log(companies);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  const showDrawerP = (id) => {
    setOpenP(true);
    setCompanyId(id)
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'client_name', headerName: 'Client Name', flex: 1,
      renderCell: (params) => {
        return (
          <div
            onClick={() => showDrawerP(params.row.id)}
            style={{ cursor: "pointer" }}
          >
            <Avatar src={avatar} /> <span style={{ margin: "0px 5px", position: "relative", top: "1px" }}>{params.row.client_name}</span>
            {/* <Chip avatar={<Avatar></Avatar>} label={params.row.client_name} style={{ cursor: "pointer" }} /> */}
          </div>
        );
      },
    },

    {
      field: 'company_name', headerName: 'Company Name', flex: 1,
    },
    { field: 'website', headerName: 'Website', width: 150 },
    {
      field: 'responsible_person', headerName: 'Responsible Person', flex: 1,

      renderCell: (params) => {
        return (
          <div
            onClick={() => showDrawerP(params.row.id)}
            style={{ cursor: "pointer" }}
          >
            {/* <Chip avatar={<Avatar></Avatar>} label={params.row.responsible_person} style={{ cursor: "pointer" }} /> */}
          </div>
        );
      },
    },
  ];


  const handleDelete = (id, name) => {
    console.log(id);
    dispatch(deleteCompany(id))
        notification.success({
          message: 'Company Deleted',
          description: `${name} has been deleted successfully.`,
        });
        setFormKey(formKey + 1)


    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
        
    //   }
    // })
  }

  const handleEdit = (id) => {
    // setOpen(true)
    // setEdit(true)
    // setEditID(id)
    navigate(`/editcompany/${id}`)
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div
            className="cellAction"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {/* <Link to={`/editcompany/${params.row.id}`}> */}
            <div
              className="viewButton"
              style={{
                padding: "2px 5px",
                borderRadius: "5px",
                color: "#000345",
                border: "1px dotted #000345",
                cursor: "pointer",
              }}
              onClick={() => handleEdit(params.row.id)}
            >
              <AiFillEdit />
            </div>
            {/* </Link> */}
            <div
              onClick={() => handleDelete(params.row.id, params.row.company_name)}
              className="deleteButton"
              style={{
                padding: "2px 5px",
                borderRadius: "5px",
                color: "crimson",
                border: "1px dotted rgba(220, 20, 60, 0.6)",
                cursor: "pointer",
              }}
            >
              <RiDeleteBin6Line />
            </div>
          </div>
        );
      },
    },
  ];


  if (error) {
    return <div>{error}</div>;
  }



  const showDrawer = () => {
    navigate("/createcompany")
  };



  const getRowId = (company) => company.id;




  const handleToggleState = (state) => {
    setToggleState(state);
  };

  if (!companies) {
    return <div>Loading...</div>;
}




  return (
    <>
      <ContainerMain>

        <div className="row">
          <div className="col-12">
            <div className="mb-2">
              <h1>Companies</h1>
              <div className="text-zero">
                <button className="btn" onClick={showDrawer}>ADD COMPANY</button>
              </div>
              <nav className="breadcrumb">
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="li-2" style={{ color: "#6c757d" }}>
                    Clients
                  </li>
                </ol>
              </nav>
            </div>

            <ul className="separator-tabs">
              <li
                className={`separator-tabs-item ${toggleState === "companyTbl"
                  ? "separator-tabs-item-active"
                  : ""
                  }`}
                onClick={() => handleToggleState("companyTbl")}
              >
                <p>TABLE</p>
              </li>

              <li
                className={`separator-tabs-item ${toggleState === "companyGrid"
                  ? "separator-tabs-item-active"
                  : ""
                  }`}
                onClick={() => handleToggleState("companyGrid")}
              >
                <p>GRID</p>
              </li>
            </ul>

            <TabContent key={formKey}>

              {!loading && (
                <>

                  {toggleState === "companyTbl" ? (
                    <>
                      <div style={{ height: 500, width: "100%", background: "#fff", borderRadius: "6px" }}>

                        <DataGrid
                          components={{ Toolbar: GridToolbar }}
                          rows={companies}
                          columns={columns.concat(actionColumn)}
                          loading={loading}
                          error={error}
                          getRowId={getRowId}
                          pageSize={10}
                          rowsPerPageOptions={[5, 10, 20]}
                        // checkboxSelection
                        />
                      </div>

                    </>
                  ) : (
                    ""
                  )}


                  {toggleState === "companyGrid" ? (
                    <>
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {companies.map((company) => (

                          <Card
                            key={company.id}
                            style={{
                              width: 360,
                              margin: 8,
                              // background: "#242424",
                              // border : "1px solid #242424",
                              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                            }}
                            // cover={
                            //   <img
                            //     alt="example"
                            //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            //   />
                            // }
                            actions={[
                              <EyeOutlined key="setting" onClick={() => showDrawerP(company.id)} />,
                              <EditOutlined key="edit" />,
                              <DeleteOutlined key="ellipsis" onClick={() => handleDelete(company.id, company.company_name)} />
                            ]}
                          >
                            <Meta
                              avatar={<Avatar src={avatar} />}
                              title={company.client_name}
                              // description="This is the description"
                              style={{ marginTop: 8, marginBottom: 10 }}
                            />
                            <h1 style={{ fontSize: "16px", margin: "10px 0px" }}>Company Name : {company.company_name}</h1> <br />
                            <h1 style={{ fontSize: "16px", margin: "0px 0px" }}>Industry Type : {company.industry_type}</h1>
                          </Card>

                        ))}
                      </div>

                    </>
                  ) : (
                    ""
                  )}
                </>
              )}


            </TabContent>


          </div>
        </div>
      </ContainerMain>

      {open && <CreateCompany  open={open} setOpen={setOpen} formKey={formKey} setFormKey={setFormKey}/>}
      {openP && <CompanyInfo openP={openP} setOpenP={setOpenP} companyId={companyId} />}

      {/* <CompanyInfo openP={openP} setOpenP={setOpenP} companyId={companyId} /> */}
{/* <CreateCompany open={open} setOpen={setOpen} formKey={formKey} setFormKey={setFormKey} />
       */}



    </>
  );






};

export default Sales;

const TabContent = styled.div`
  .tab-row {
    background-color: #fff;
    border-radius: 4px;
  }
`;


