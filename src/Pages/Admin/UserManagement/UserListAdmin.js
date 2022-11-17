import { Table, Tag, Modal, Input } from "antd";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import UserEditing from "./EditUser";
import {
  userDeleteAction,
  userEditAdminAction,
  userListAdminAction,
} from "../../../redux/actions/userActions";
import UserEdit from "./UserEdit";

const { Search } = Input;
const { Header, Content, Sider } = Layout;

export default function UserListAdmin() {
  //SET UP STATE, REACT-HOOK METHOD AND CALL API TO GET DATA
  const navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(userListAdminAction());
  }, []);

  let userList = useSelector((state) => state.userReducer.userList);

  //SET UP MODAL USER EDITING
  const [modal2Open, setModal2Open] = useState(false);
  const handleUserEditing = (taiKhoan) => {
    setModal2Open(true);
    let index = userList.findIndex((item) => {
      return item.taiKhoan === taiKhoan;
    });
    dispatch(userEditAdminAction(userList[index]));
  };

  //SET UP FORM COLUMNS, SEARCH INPUT, PAGINATION
  //-Declare search input
  const onSearch = (value) => {
    navigate(`/userManagement/search/${value}`);
  };
  //-Set up pagination
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  //-Declare handle function in COLUMNS
  const handleUserDelete = (taiKhoan) => {
    dispatch(userDeleteAction(taiKhoan));
  };
  //-COLUMNS
  const columns = [
    {
      title: "Username",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortOrder: sortedInfo.columnKey === "taiKhoan" ? sortedInfo.order : null,
      className: "xl:text-base text-[11px]",
    },
    {
      title: "Full name",
      dataIndex: "hoTen",
      key: "hoTen",
      className: "xl:text-base text-[11px]",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      className: "xl:text-base text-[11px] ",
    },

    {
      title: "Phone Number",
      dataIndex: "soDt",
      key: "soDt",
      className: "xl:text-base text-[11px] ",
    },
    {
      title: "User Type",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      className: "xl:text-base text-[11px] ",
      render: (maLoaiNguoiDung) => {
        var color;
        if (maLoaiNguoiDung.toUpperCase() === "GV") {
          color = "volcano";
        } else {
          color = "green";
        }
        return (
          <Tag color={color} key={maLoaiNguoiDung}>
            {maLoaiNguoiDung.toUpperCase()}
          </Tag>
        );
      },
    },

    {
      title: "Action",
      dataIndex: "taiKhoan",
      render: (taiKhoan) => {
        return (
          <div className="text-center flex justify-center ">
            <button className="sm:mr-3 mr-2">
              <BiEdit
                onClick={() => handleUserEditing(taiKhoan)}
                className="sm:w-[25px] sm:h-[25px] w-[19px] h-[19px]"
              />
            </button>
            <button>
              <MdDelete
                onClick={() => {
                  handleUserDelete(taiKhoan);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[19px] h-[19px]"
              />
            </button>
          </div>
        );
      },
      key: "hanhDong",
      align: "center",
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
          // defaultOpenKeys="course"
          defaultSelectedKeys="userList"
          mode="inline"
        >
          <Menu.Item key="userList" icon={<UserOutlined />}>
            <NavLink to="/userManagement">User</NavLink>
          </Menu.Item>
          <Menu.SubMenu key="course" title="Course" icon={<FileOutlined />}>
            <Menu.Item key="courseItem">
              <NavLink to="/course/courseManagement">Course Management</NavLink>
            </Menu.Item>
            <Menu.Item key="addCourse">
              <NavLink to="/course/addNewCourse">Add New</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background text-center font-bold sm:text-[30px] text-[15px] p-0">
          Administrator
        </Header>
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
          ></Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <div>
              <div className="text-2xl bold">User Management</div>
              <NavLink to="/userManagement/addUser">
                <button className="border text-white font-bold bg-blue-500 rounded p-2 my-1">
                  + Add New User
                </button>
              </NavLink>
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                className="my-2"
              />
              <Table
                className="overflow-auto"
                rowKey="taiKhoan"
                columns={columns}
                dataSource={userList}
                onChange={handleChange}
              />
              <Modal
                title="User Editing"
                centered
                visible={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                footer={null}
              >
                <UserEdit setModal2Open={setModal2Open} />
              </Modal>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
