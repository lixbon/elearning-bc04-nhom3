import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import BaseLayout from "./HOC/BaseLayout";
import LoginRegisterLayout from "./HOC/LoginRegisterLayout";
import SecureView from "./HOC/SecureView";
import HomePage from "./Pages/HomePage/HomePage";
import "antd/dist/antd.min.css";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import CourseDetailPage from "./Pages/CourseDetailPage/CourseDetailPage";
import WatchListPage from "./Pages/WatchListPage/WatchListPage";
import MyStudyingPage from "./Pages/MyStudyingPage/MyStudyingPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import { useSelector } from "react-redux";
import Message from "./Components/Message/Message";
import UserSettingPage from "./Pages/UserSettingPage/UserSettingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  let { isdarkMode } = useSelector((state) => {
    return state.darkModeSlice;
  });
  return (
    <div className={isdarkMode ? "dark overflow-hidden" : "overflow-hidden"}>
      <Loading />
      <SocialMedia />
      <Message />
      <BrowserRouter>
        <Wrapper>
          <Routes>
            {/* Start Quan */}
            <Route path="/" element={<BaseLayout Component={HomePage} />} />
            <Route
              path="/category/:categoryid"
              element={<BaseLayout Component={CategoryPage} />}
            />
            <Route
              path="/detail/:courseid"
              element={<BaseLayout Component={CourseDetailPage} />}
            />
            <Route
              path="/watchlist"
              element={<BaseLayout Component={WatchListPage} />}
            />

            <Route
              path="/search/:value"
              element={<BaseLayout Component={SearchPage} />}
            />

            <Route
              path="/studying"
              element={
                <SecureView>
                  <BaseLayout Component={MyStudyingPage} />
                </SecureView>
              }
            />
            <Route
              path="/userinformation"
              element={
                <SecureView>
                  <BaseLayout Component={UserSettingPage} />
                </SecureView>
              }
            />

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
