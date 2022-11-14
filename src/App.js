import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import BaseLayout from "./HOC/BaseLayout";
import LoginRegisterLayout from "./HOC/LoginRegisterLayout";
import SecureView from "./HOC/SecureView";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import "antd/dist/antd.min.css";
import Message from "./Components/Message/Message";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div>
      <Loading />
      <Message />
      <BrowserRouter>
        <Wrapper>
          <Routes>
            {/* Start Quan */}
            <Route path="/" element={<BaseLayout Component={HomePage} />} />

            {/* End Quan */}

            {/* Start Hong Anh */}
            <Route
              path="/login"
              element={<LoginRegisterLayout Component={LoginPage} />}
            />
            <Route
              path="/register"
              element={<LoginRegisterLayout Component={RegisterPage} />}
            />

            {/* End Hong Anh */}

            {/* Start Quang */}

            {/* End Quang */}
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
