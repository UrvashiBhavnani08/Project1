import React, { useContext } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import profileImg from '../data/DI.jpeg'
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiCreditCard } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authActions';
const UserProfile = () => {
  const { currentColor } = useStateContext();

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  const { setIsClicked, initialState } = useStateContext();
  const navigate = useNavigate()

  const nav = () => {
    // navigate(`/profile`)
    setIsClicked(initialState)
  }

  const handleLogout = () =>{
    dispatch(logout())
    // window.location.reload()
}

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-3 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={profileImg}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {auth.user.username} </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">   {auth.user.signature}  </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {auth.user.email} </p>
        </div>
      </div>
      <div>

        <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
          <button
            type="button"
            style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
            className=" text-xl rounded-lg p-3 hover:bg-light-gray"
          >
            <BsCurrencyDollar />
          </button>

          <div onClick={nav}>
            <p className="font-semibold dark:text-gray-200 ">My Profile</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">Account Settings</p>
          </div>
        </div>


        <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
          <button
            type="button"
            style={{ color: "rgb(255, 244, 229)", backgroundColor: "rgb(254, 201, 15)" }}
            className=" text-xl rounded-lg p-3 hover:bg-light-gray"
          >
            <FiCreditCard />
          </button>

          <div>
            <p className="font-semibold dark:text-gray-200 ">My Tasks</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">To-do and Daily Tasks</p>
          </div>
        </div>

      </div>
      <div className="mt-5" onClick={handleLogout}>
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;
