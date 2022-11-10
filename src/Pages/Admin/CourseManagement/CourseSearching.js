import React, { useState, useEffect } from "react";
import {
  Space,
  Table,
  Tooltip,
  Modal,
  Breadcrumb,
  Layout,
  Menu,
  Input,
} from "antd";
import { BiEdit, BiAlarm } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  courseEditingAction,
  deleteCourseAction,
  getSearchingListAction,
} from "../../../redux/actions/courseAction";
import CourseEditing from "./CourseEditing";

const { Search } = Input;
const { Header, Content, Sider } = Layout;

export default function CourseSearching() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getSearchingListAction(id));
  }, [id]);

  let searchingList = useSelector((state) => state.courseReducer.searchingList);

  //DECLARE HANDLE FUNCTION
  const handleDeleteCourse = (maKhoaHoc) => {
    dispatch(deleteCourseAction(maKhoaHoc));
  };

  //SET UP MODAL
  const [modal2Open, setModal2Open] = useState(false);
  const handleCourseEditing = (maKhoaHoc) => {
    setModal2Open(true);
    let index = searchingList.findIndex((item) => {
      return item.maKhoaHoc === maKhoaHoc;
    });
    dispatch(courseEditingAction(searchingList[index]));
  };

  //SET UP FORM COLUMNS
  //-Set up pagination
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  //-COLUMNS
  const columns = [
    {
      title: "Course code",
      dataIndex: "maKhoaHoc",
      align: "center",
      key: "maKhoaHoc",
      sorter: (a, b) => a.maKhoaHoc - b.maKhoaHoc,
      sortOrder: sortedInfo.columnKey === "maKhoaHoc" ? sortedInfo.order : null,
      className: "sm:w-[110px] w-[62px] sm:text-base text-[9px]",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      render: (t, r) => <img alt="" src={`${r.hinhAnh}`} />,
      key: "hinhAnh",
      align: "center",
      className: "sm:table-cell hidden sm:text-base text-[9px]",
    },
    {
      title: "Course title",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
      sorter: (a, b) => a.tenKhoaHoc.localeCompare(b.tenKhoaHoc),
      sortOrder:
        sortedInfo.columnKey === "tenKhoaHoc" ? sortedInfo.order : null,
      align: "center",
      className: "sm:w-2/12 w-[80px] sm:text-base text-[9px]",
    },

    {
      title: "Description",
      dataIndex: "moTa",
      key: "moTa",
      align: "center",
      ellipsis: {
        showTitle: false,
      },
      className: "w-4/12 sm:text-base text-[9px] ",
      render: (moTa) => (
        <Tooltip placement="topLeft" title={moTa}>
          {moTa}
        </Tooltip>
      ),
    },
    {
      title: "Action",
      dataIndex: "maKhoaHoc",
      render: (maKhoaHoc) => {
        return (
          <div className="text-center flex justify-center ">
            <button className="">
              <BiEdit
                onClick={() => {
                  handleCourseEditing(maKhoaHoc);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[10px] h-[10px]"
              />
            </button>
            {/* <button className="sm:mx-1 mx-2">
              <BiAlarm
                onClick={() => {
                  handleAddCourse(maKhoaHoc);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[10px] h-[10px]"
              />
            </button> */}
            <button>
              <MdDelete
                onClick={() => {
                  handleDeleteCourse(maKhoaHoc);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[10px] h-[10px]"
              />
            </button>
          </div>
        );
      },
      key: "hanhDong",
      align: "center",
      className: "sm:w-2/12 w-[61px] sm:text-base text-[9px]",
    },
  ];

  //-Setup search in put
  const onSearch = (value) => {
    navigate(`/admin/course/courseManagement/search/${value}`);
  };

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
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
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
              <div className="text-2xl bold mb-4">Course Management</div>
              <Space
                style={{
                  marginBottom: 16,
                }}
              ></Space>
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                className="my-2"
              />
              <Table
                rowKey="maKhoaHoc"
                columns={columns}
                dataSource={searchingList}
                onChange={handleChange}
              />
              <Modal
                title="Course Editing"
                centered
                visible={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                footer={null}
              >
                <CourseEditing setModal2Open={setModal2Open} />
              </Modal>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
