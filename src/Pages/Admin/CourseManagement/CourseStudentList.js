import { Table } from "antd";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelRegisterCourseAction,
  getCourseInfoAction,
  getCourseStudentListAction,
} from "../../../redux/actions/courseAction";

const { Header, Content, Sider } = Layout;

export default function CourseStudentList() {
  //SET UP STATE, REACT-HOOK METHOD AND CALL API TO GET DATA
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getCourseInfoAction(id));
    dispatch(getCourseStudentListAction(id));
  }, [id]);

  let courseStudentList = useSelector(
    (state) => state.courseReducer.courseStudentList
  );
  let courseInfo = useSelector((state) => state.courseReducer.courseInfo);

  //SET UP FORM COLUMNS, SEARCH INPUT, PAGINATION
  //-Set up pagination
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  //-Declare handle function in COLUMNS
  const handleCancelRegisterCourse = (taiKhoan) => {
    let dataCancelCourse = {
      maKhoaHoc: courseInfo.maKhoaHoc,
      taiKhoan: taiKhoan,
    };
    dispatch(cancelRegisterCourseAction(dataCancelCourse));
  };
  //-COLUMNS
  const columns = [
    {
      title: "Username",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortOrder: sortedInfo.columnKey === "taiKhoan" ? sortedInfo.order : null,
      className: "xl:text-base text-[9px]",
    },
    {
      title: "Full name",
      dataIndex: "hoTen",
      key: "hoTen",
      className: "xl:text-base text-[9px]",
    },

    {
      title: "Action",
      dataIndex: "taiKhoan",
      render: (taiKhoan) => {
        return (
          <div className="text-center flex justify-center ">
            <button>
              <MdDelete
                onClick={() => {
                  handleCancelRegisterCourse(taiKhoan);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[10px] h-[10px]"
              />
            </button>
          </div>
        );
      },
      key: "hanhDong",
      align: "center",
      className: "w-2/12 xl:text-base text-[9px]",
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <Menu
          theme="dark"
          defaultOpenKeys="course"
          defaultSelectedKeys="courseItem"
          mode="inline"
        >
          <Menu.Item key="userList" icon={<UserOutlined />}>
            <NavLink to="/admin/userManagement">User</NavLink>
          </Menu.Item>
          <Menu.SubMenu key="course" title="Course" icon={<FileOutlined />}>
            <Menu.Item key="courseItem">
              <NavLink to="/admin/course/courseManagement">
                Course Management
              </NavLink>
            </Menu.Item>
            <Menu.Item key="addCourse">
              <NavLink to="/admin/course/addNewCourse">Add New</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        /> */}
        <Content
          className=""
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <NavLink to="/admin/course/courseManagement">
              Course Management
            </NavLink>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <div>
              <div className="text-2xl bold mb-10">Course Infomation</div>
              <div className="w-full flex">
                <div className="w-1/3">
                  <span className="bold sm:text-xl text-sm">
                    {courseInfo.tenKhoaHoc}
                  </span>
                  <span className="">
                    <img
                      src={courseInfo.hinhAnh}
                      alt="..."
                      className="object-contain pr-4 my-3"
                    />
                  </span>
                </div>
                <Table
                  className="overflow-auto w-2/3"
                  rowKey="taiKhoan"
                  columns={columns}
                  dataSource={courseStudentList}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
