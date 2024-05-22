import { lazy, Suspense } from 'react';
import { Footer, Navbar, Sidebar, ThemeSettings } from "./components";
import { Tooltip } from "@material-ui/core";
import { FiSettings } from "react-icons/fi";
// import RightBar from "./components/RightBar";
import { useState, useEffect } from "react";
import { useStateContext } from './contexts/ContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateCompany from './pages/sales/CreateCompany';

import './App.css'
import CompanyInfo from './pages/sales/salesInfo/CompanyInfo';
import EditCompany from './pages/sales/EditCompany';



const DashboardPage = lazy(() => import('./pages/login/User'));
const LoginForm = lazy(() => import('./pages/login/Login'));
const Home = lazy(() => import('./pages/home/Home'));
const Sales = lazy(() => import('./pages/sales/Sales'));
// import LoginForm from './pages/login/Login';


// const DashboardPage = lazy(() => import('./pages/login/User'));


const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext()

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }

  }, []);


  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };


  

  const auth = useSelector((state) => state.auth);

  const user = auth.isAuthenticated


  // console.log(auth);






  return (
    <>
      {user ? <>
        <div className={currentMode === "Dark" ? "dark" : ""} style={{ background: `${currentMode === "Dark" ? "rgb(32 35 42 / 1)" : "#000"}`, height: "100vh", width: "100%" }}>


          <BrowserRouter>

            {/* <RightBar open={open} onClose={onClose} /> */}

            <>
              <div className="flex relative dark:bg-main-dark-bg">
                <div
                  className="fixed right-4 bottom-4"
                  style={{ zIndex: "1000" }}
                >
                  <Tooltip title="Settings" arrow>
                    <button
                      type="button"
                      onClick={() => setThemeSettings(true)}
                      style={{ background: currentColor, borderRadius: "50%" }}
                      className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                      <FiSettings />
                    </button>
                  </Tooltip>
                </div>

                {/* ----------------------Menu----------------------- */}
                {activeMenu ? (
                  <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white" style={{ transition: "0.2s ease" }}>
                    <Sidebar />
                  </div>
                ) : (
                  <div
                    className="w-0 dark:bg-secondary-dark-bg"
                    style={{ transition: "0.2s ease-in-out" }}
                  >
                    <Sidebar />
                  </div>
                )}


                <div
                  className={
                    activeMenu
                      ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                      : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                  }
                >


                  <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    <Navbar show={setOpen} />
                  </div>

                  {/* ----------------------------------Routes ------------------------------- */}
                  <Suspense>
                    <div>
                      {themeSettings && <ThemeSettings />}

                      <Routes>


                        <Route path="/" element={<Sales />} />

                        <Route path="/company/list" element={<Sales />} />

                        <Route path="/createcompany" element={<CreateCompany />} />
                        <Route path="/editcompany/:id" element={<EditCompany />} />

                        <Route path="/company/view/:id" element={<CompanyInfo />} />


                      </Routes>

                    </div>
                  </Suspense>
                  <Footer />
                </div>
              </div>
            </>
          </BrowserRouter>
        </div>
      </> : <LoginForm />}
    </>
  );
};

export default App;
