import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';
import profileImg from "../data/DI.jpeg";
// import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';




const Notification = () => {

  // const {user} = useContext(AuthContext)

  const { currentColor } = useStateContext();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://di-new-crm.onrender.com/api/daysoff/getpending"
      );
      setData(res.data.msg);
      //   setTimeStamp(res.data.msg)
    };
    fetchData();
  }, []);
  

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> </button>
        </div>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>

      {/* {user.result[0].role === "admin" ? */}
    <>
    {data.map((item, index) => {
        return (
          <>
            <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
              <img className="rounded-full h-10 w-10" src={profileImg} alt="profile-logo" />
              <div>
                <p className="font-semibold dark:text-gray-200">{item.name}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">Leave pending for {item.name} </p>
              </div>
            </div>
          </>
        )
      })}
    </>  
    {/* : <></>
    } */}


      <div className="mt-5 ">
        {data.length === 0 ? 
      <>
      <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="No new notifications" borderRadius="10px" width="full" />
        </div>
      </>  : <>
      <div className="mt-5">
          <Link to="/daysoff"><Button color="white" bgColor={currentColor} text="Approve Leaves" borderRadius="10px" width="full" /></Link>
        </div>
      </>
      }
      </div>
    </div>
  );
};

export default Notification;


// {chatData?.map((item, index) => (
//   <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
//     <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
//     <div>
//       <p className="font-semibold dark:text-gray-200">{item.message}</p>
//       <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
//     </div>
//   </div>
// ))}