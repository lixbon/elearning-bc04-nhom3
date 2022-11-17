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
import { BiEdit, BiUser, BiPlusCircle } from "react-icons/bi";
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
import CourseRegisterStudentModal from "./CourseRegisterStudentModal";

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

  const handleCourseStudentList = (maKhoaHoc) => {
    let index = searchingList.findIndex((item) => {
      return item.maKhoaHoc === maKhoaHoc;
    });
    dispatch(courseEditingAction(searchingList[index]));
    navigate(`/course/courseManagement/courseStudentList/${maKhoaHoc}`);
  };

  //SET UP MODAL
  const [modalEditing, setModalEditing] = useState(false);
  const [modalRegisterCourse, setModalRegisterCourse] = useState(false);

  const handleCourseEditing = (maKhoaHoc) => {
    setModalEditing(true);
    let index = searchingList.findIndex((item) => {
      return item.maKhoaHoc === maKhoaHoc;
    });
    dispatch(courseEditingAction(searchingList[index]));
  };

  const handleRegisterCourseForStudent = (maKhoaHoc) => {
    setModalRegisterCourse(true);
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
      className: "sm:w-[110px] w-[62px] sm:text-base text-[11px]",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      render: (t, r) => <img alt="" src={`${r.hinhAnh}`} />,
      key: "hinhAnh",
      align: "center",
      className: "sm:table-cell hidden sm:text-base text-[11px]",
    },
    {
      title: "Course title",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
      sorter: (a, b) => a.tenKhoaHoc.localeCompare(b.tenKhoaHoc),
      sortOrder:
        sortedInfo.columnKey === "tenKhoaHoc" ? sortedInfo.order : null,
      align: "center",
      className: "sm:w-2/12 w-[80px] sm:text-base text-[11px]",
    },

    {
      title: "Description",
      dataIndex: "moTa",
      key: "moTa",
      align: "center",
      ellipsis: {
        showTitle: false,
      },
      className: "w-4/12 sm:text-base text-[11px] ",
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
          <div className="text-center md:flex md:justify-center md:gap-1 grid grid-cols-2 gap-3 mx-auto">
            <button className="">
              <BiEdit
                onClick={() => {
                  handleCourseEditing(maKhoaHoc);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[18px] h-[18px]"
              />
            </button>
            <button>
              <BiPlusCircle
                onClick={() => {
                  handleRegisterCourseForStudent(maKhoaHoc);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[18px] h-[18px]"
              />
            </button>
            <button>
              <BiUser
                onClick={() => {
                  handleCourseStudentList(maKhoaHoc);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[18px] h-[18px]"
              />
            </button>
            <button>
              <MdDelete
                onClick={() => {
                  handleDeleteCourse(maKhoaHoc);
                }}
                className="sm:w-[25px] sm:h-[25px] w-[18px] h-[18px]"
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
    navigate(`/course/courseManagement/search/${value}`);
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
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <NavLink to="/course/courseManagement">Course Management</NavLink>
          </Breadcrumb>
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
                visible={modalEditing}
                onOk={() => setModalEditing(false)}
                onCancel={() => setModalEditing(false)}
                footer={null}
              >
                <CourseEditing setModalEditing={setModalEditing} />
              </Modal>
            </div>
            <Modal
              title="Course Register For Student"
              centered
              visible={modalRegisterCourse}
              onOk={() => setModalRegisterCourse(false)}
              onCancel={() => setModalRegisterCourse(false)}
              footer={null}
            >
              <CourseRegisterStudentModal
                setModalRegisterCourse={setModalRegisterCourse}
              />
            </Modal>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
