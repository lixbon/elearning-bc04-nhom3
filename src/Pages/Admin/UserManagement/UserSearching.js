import {
  Space,
  Table,
  Tag,
  Input,
  Breadcrumb,
  Layout,
  Menu,
  Modal,
} from "antd";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  userDeleteAction,
  userEditAdminAction,
  userSearchingAction,
} from "../../../redux/actions/userActions";
import UserEdit from "./UserEdit";

const { Search } = Input;
const { Header, Content, Sider } = Layout;

export default function UserSearching() {
  //SET UP STATE, REACT-HOOK METHOD AND CALL API TO GET DATA
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(userSearchingAction(id));
  }, [id]);

  let userSearching = useSelector((state) => state.userReducer.userSearching);
  //-Setup search in put
  const onSearch = (value) => {
    navigate(`/userManagement/search/${value}`);
  };
  //-Set up pagination
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  //SET UP FORM COLUMNS
  //-Declare handle function in COLUMNS
  const handleUserDelete = (taiKhoan) => {
    dispatch(userDeleteAction(taiKhoan));
  };
  //-Set up userEditing in COLUMNS
  const [modal2Open, setModal2Open] = useState(false);
  const handleUserEditing = (taiKhoan) => {
    setModal2Open(true);
    let index = userSearching.findIndex((item) => {
      return item.taiKhoan === taiKhoan;
    });
    dispatch(userEditAdminAction(userSearching[index]));
  };
  //-COLUMNS
  const columns = [
    {
      title: "Username",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      className: "xl:text-base text-[11px]",
    },
    {
      title: "Fullname",
      dataIndex: "hoTen",
      key: "hoTen",
      className: "xl:text-base text-[11px]",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      className: "xl:text-base text-[11px]",
    },
    {
      title: "Phone Number",
      dataIndex: "soDt",
      key: "soDt",
      className: "xl:text-base text-[11px]",
    },
    {
      title: "User Type",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      className: "xl:text-base text-[11px]",
      render: (maLoaiNguoiDung) => {
        let color;
        if (maLoaiNguoiDung.toUpperCase() === "HV") {
          color = "green";
        }
        if (maLoaiNguoiDung.toUpperCase() === "GV") {
          color = "volcano";
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
      key: "action",
      render: (taiKhoan) => (
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
      ),
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
        <Menu theme="dark" defaultSelectedKeys="userList" mode="inline">
          <Menu.Item key="userList" icon={<UserOutlined />}>
            <NavLink to="/userManagement">User</NavLink>
          </Menu.Item>
          <Menu.SubMenu key="course" title="Courses" icon={<FileOutlined />}>
            <Menu.Item key="courseItem">
              <NavLink to="/course/courseManagement">Course Management</NavLink>
            </Menu.Item>
            {/* <Menu.Item key="addFilm">
              <NavLink to="/course/">Add New</NavLink>
            </Menu.Item> */}
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background text-center font-bold sm:text-[30px] text-[15px] p-0 !pr-[5px]">
          Administrator
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <NavLink to="/userManagement">User Management</NavLink>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <div>
              <div className="text-2xl bold">Searching User</div>
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
                dataSource={userSearching}
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
