// import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { useStateContext } from "../contexts/ContextProvider";
import { RxDashboard } from "react-icons/rx";
// import { BsCalendar, BsCheckCircle, BsFileCheck } from "react-icons/bs";
// import { HiOutlineUsers } from "react-icons/hi";
// import { RiBuilding3Line, RiDeleteBin6Line } from "react-icons/ri";
// // import { AuthContext } from "../context/AuthContext";

// import { TbFileCertificate, TbFileInvoice } from "react-icons/tb";
// import { FaFileContract } from "react-icons/fa";
// import axios from "axios";


const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // const {user} = useContext(AuthContext)

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";





    // const [viewCertificate, setViewCertificate] = useState(false);
    // const [viewLor, setViewLor] = useState(false);
    // const [viewContract, setViewContract] = useState(false);
    // const [viewUsers, setViewUsers] = useState(false);
  
    // const [deleteCertificate, setDeleteCertificate] = useState(false);
  
    // const [sendCertificate, setSendCertificate] = useState(false);
  
    // const email = user.result[0].email;
  
    // useEffect(() => {
    //   const fetchPermission = async () => {
    //     const res = await axios.get(
    //       `https://di-new-crm.onrender.com/api/permission/get/${email}`
    //     );
    //     if (res.data[0]) {
    //       setViewCertificate(res.data[0].view_certificate === "1");
    //       // setViewContract(res.data[0].view_contract === "1");
    //       // setViewLor(res.data[0].view_lor === "1");
    //       // setViewUsers(res.data[0].view_users === "1");
    //       // setDeleteCertificate(res.data[0].delete_certificate === "1");
    //       // setSendCertificate(res.data[0].send_certificate === "1")
    //     } else {
    //       setViewCertificate(false);
    //       // setViewContract(false);
    //       // setViewLor(false);
    //       // setViewUsers(false);
    //       // setSendCertificate(false)
    //     }
    //   };
    //   fetchPermission();
    // }, [email]);

  return (
    <div
      className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"
      style={{ zIndex: "1000" }}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>DigitalIpsum</span>
            </Link>
          </div>
          <div className="mt-10 ">
            {/* ---------------Home Section----------------*/}

            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                Dashboard
              </p>
              <NavLink
                to="/"
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
              <RxDashboard />
                <span className="capitalize ">Home</span>
              </NavLink>

              <NavLink
                to="/permission"
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
              <RxDashboard />
                <span className="capitalize ">Permission</span>
              </NavLink>
            </div>


            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                Sales
              </p>
              <NavLink
                to="/company/list"
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
              <RxDashboard />
                <span className="capitalize ">Companies</span>
              </NavLink>

              {/* <NavLink
                to="/permission"
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
              <RxDashboard />
                <span className="capitalize ">Permission</span>
              </NavLink> */}
            </div>


            


          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;



{/* 

  //           {/* -------------------HR Section------------------- */}
  //           {viewCertificate ? <>
  //             <div>
  //               <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
  //                 HR Section
  //               </p>
  //               <NavLink
  //                 to="/daysoff"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <BsCalendar />
  //                 <span className="capitalize ">Days Off</span>
  //               </NavLink>
   
  
  //               <NavLink
  //                 to="/certificate"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <TbFileCertificate />
  //                 <span className="capitalize ">Certificate</span>
  //               </NavLink>
  
  
  //               <NavLink
  //                 to="/lor"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <BsFileCheck />
  //                 <span className="capitalize ">LOR</span>
  //               </NavLink>
  
  //               <NavLink
  //                 to="/contract"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
                  
  //               <FaFileContract />
  //                 <span className="capitalize ">Contract</span>
  //               </NavLink>
  
  //               <NavLink
  //                 to="/users"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <HiOutlineUsers />
  //                 <span className="capitalize ">All Users</span>
  //               </NavLink>
  //             </div>
  
  // </>
  // : ""}
  
  //             {/* -------------------Clients Section------------------- */}
  
  //             {user.result[0].role === "admin" ? <>
              
  //             <div>
  //               <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
  //                 Clients Section
  //               </p>
  //               <NavLink
  //                 to="/clients"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <BsCalendar />
  //                 <span className="capitalize ">Clients</span>
  //               </NavLink>
  
  
                
  //               <NavLink
  //                 to="/approvedclients"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <BsCheckCircle />
  //                 <span className="capitalize ">Approved Clients</span>
  //               </NavLink>
  
  
  //               <NavLink
  //                 to="/clientsbin"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <RiDeleteBin6Line />
  //                 <span className="capitalize ">Deleted Clients</span>
  //               </NavLink>
  
  
  //               <NavLink
  //                 to="/industries"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <RiBuilding3Line />
  //                 <span className="capitalize ">Industries</span>
  //               </NavLink>
  
  
  //               <NavLink
  //                 to="/clientproposal"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <RiBuilding3Line />
  //                 <span className="capitalize ">Client Proposal</span>
  //               </NavLink>
  
  
  //               <NavLink
  //                 to="/invoice"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
                  
  //               <TbFileInvoice />
  //                 <span className="capitalize ">Invoice</span>
  //               </NavLink>
  
  
  //             </div>
  
  //             </> : ""}
  
  
  //             {/* -------------------All Users Section------------------- */}
  
  
  //             <div>
  //               <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
  //                 Leave Application
  //               </p>
  //               <NavLink
  //                 to="/daysoffform"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <BsCalendar />
  //                 <span className="capitalize ">Days Off Form</span>
  //               </NavLink>
  
  //             </div>
  
  
  //             {user.result[0].role === "admin" ? <>
  //             <div>
  //               <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
  //                 Apps
  //               </p>
  //               <NavLink
  //                 to="/tasks"
  //                 onClick={handleCloseSideBar}
  //                 style={({ isActive }) => ({
  //                   backgroundColor: isActive ? currentColor : "",
  //                 })}
  //                 className={({ isActive }) =>
  //                   isActive ? activeLink : normalLink
  //                 }
  //               >
  //               <BsCalendar />
  //                 <span className="capitalize ">Tasks</span>
  //               </NavLink>
  
  //             </div>              
  //               </> : ""} */}
  



// {links.map((item) => (
//   <div key={item.title}>
//     <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
//       {item.title}
//     </p>
//     {item.links.map((link) => (
//       <NavLink
//         to={`/${link.name}`}
//         key={link.name}
//         onClick={handleCloseSideBar}
//         style={({ isActive }) => ({
//           backgroundColor: isActive ? currentColor : '',
//         })}
//         className={({ isActive }) => (isActive ? activeLink : normalLink)}
//       >
//         {link.icon}
//         <span className="capitalize ">{link.name}</span>
//       </NavLink>
//     ))}
//   </div>
// ))}
