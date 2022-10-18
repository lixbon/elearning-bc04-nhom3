import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import BaseLayout from "./HOC/BaseLayout";
import SecureView from "./HOC/SecureView";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import HomePage from "./Pages/HomePage/HomePage";
import "antd/dist/antd.min.css";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import CourseDetailPage from "./Pages/CourseDetailPage/CourseDetailPage";

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

            {/* End Quang */}
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
