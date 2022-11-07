import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import BaseLayout from "./HOC/BaseLayout";
import SecureView from "./HOC/SecureView";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import axios from "axios";
import { https } from "./services/configURL";
import Error403 from "./Pages/Admin/ErrorLandingPage";
import SecureViewAdmin from "./HOC/SecureViewAdmin";
import AdminPage from "./Pages/Admin/AdminPage";
import RegisterPage from "./Pages/LoginPage/RegisterPage";
import UserListAdmin from "./Pages/Admin/userManagement/UserListAdmin";
import UserSearching from "./Pages/Admin/userManagement/UserSearching";

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
            <Route
              path="/login"
              element={<BaseLayout Component={LoginPage} />}
            />
            <Route
              path="/register"
              element={<BaseLayout Component={RegisterPage} />}
            />
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
