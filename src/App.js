import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import HomePage from "./Pages/HomePage/HomePage";
import axios from "axios";
import { https } from "./services/AdminServices/configURL";
import Error403 from "./Pages/Admin/ErrorLandingPage";
//-----HOC--------
import BaseLayout from "./HOC/AdminHOC/BaseLayout";
import SecureView from "./HOC/AdminHOC/SecureView";
import SecureViewAdmin from "./HOC/AdminHOC/SecureViewAdmin";
// import LoginPage from "./Pages/LoginPage/LoginPage";
// import RegisterPage from "./Pages/LoginPage/RegisterPage";
import AdminPage from "./Pages/Admin/AdminPage";
import CoursesList from "./Pages/Admin/CourseManagement/CoursesList";
import CourseAddNew from "./Pages/Admin/CourseManagement/CourseAddNew";
import CourseSearching from "./Pages/Admin/CourseManagement/CourseSearching";
import CourseStudentList from "./Pages/Admin/CourseManagement/CourseStudentList";
import UserListAdmin from "./Pages/Admin/UserManagement/UserListAdmin";
import UserSearching from "./Pages/Admin/UserManagement/UserSearching";
import UserAdd from "./Pages/Admin/UserManagement/UserAdd";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  axios.interceptors.request.use(
    function (config) {
      document.getElementById("loading").style.display = "flex";
      return config;
    },
    function (error) {
      document.getElementById("loading").style.display = "flex";
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      document.getElementById("loading").style.display = "none";
      return response;
    },
    function (error) {
      document.getElementById("loading").style.display = "none";
      return Promise.reject(error);
    }
  );
  https.interceptors.request.use(
    function (config) {
      document.getElementById("loading").style.display = "flex";
      return config;
    },
    function (error) {
      document.getElementById("loading").style.display = "flex";
      return Promise.reject(error);
    }
  );

  https.interceptors.response.use(
    function (response) {
      document.getElementById("loading").style.display = "none";
      return response;
    },
    function (error) {
      document.getElementById("loading").style.display = "none";
      return Promise.reject(error);
    }
  );
  return (
    <div>
      <Loading />
      <BrowserRouter>
        <Wrapper>
          <Routes>
            {/* Start Quan */}
            <Route path="/" element={<BaseLayout Component={HomePage} />} />
            <Route
              path="/checkout"
              element={
                <SecureView>
                  <BaseLayout Component={CheckOutPage} />
                </SecureView>
              }
            />
            {/* End Quan */}
            {/* Start Hong Anh */}
            {/* End Hong Anh */}
            {/* Start Quang */}
            {/* <Route
              path="/login"
              element={<BaseLayout Component={LoginPage} />}
            />
            <Route
              path="/register"
              element={<BaseLayout Component={RegisterPage} />}
            /> */}
            {/* ADMIN - USER */}
            <Route
              path="/admin"
              element={
                <SecureViewAdmin>
                  <BaseLayout Component={AdminPage} />
                </SecureViewAdmin>
              }
            />
            <Route
              path="/admin/userManagement"
              element={
                <SecureViewAdmin>
                  <BaseLayout Component={UserListAdmin} />
                </SecureViewAdmin>
              }
            />
            <Route
              path="/admin/userManagement/search/:id"
              element={
                <SecureViewAdmin>
                  <BaseLayout Component={UserSearching} />
                </SecureViewAdmin>
              }
            />
            <Route
              path="/admin/userManagement/addUser"
              element={
                <SecureViewAdmin>
                  <BaseLayout Component={UserAdd} />
                </SecureViewAdmin>
              }
            />
            {/* ADMIN - COURSE */}
            <Route
              path="/admin/course/courseManagement/"
              element={
                <SecureViewAdmin>
                  <BaseLayout Component={CoursesList} />
                </SecureViewAdmin>
              }
            />
            <Route
              path="/admin/course/addNewCourse"
              element={
                <SecureViewAdmin>
                  <BaseLayout Component={CourseAddNew} />
                </SecureViewAdmin>
              }
            />
            <Route
              path="/admin/course/courseManagement/search/:id"
              element={
                <SecureViewAdmin>
                  <BaseLayout Component={CourseSearching} />
                </SecureViewAdmin>
              }
            />
            <Route
              path="/admin/course/courseManagement/courseStudentList/:id"
              element={
                <SecureViewAdmin>
                  <BaseLayout Component={CourseStudentList} />
                </SecureViewAdmin>
              }
            />
            <Route path="/Error" element={<Error403 />} />
            {/* End Quang */}
          </Routes>
          <Loading />
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
