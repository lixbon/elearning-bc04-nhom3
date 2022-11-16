import { Button, Form, Input, InputNumber, Select } from "antd";
import {
  FileOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Space, DatePicker } from "antd";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "antd/lib/input/TextArea";
import {
  addNewCourseAction,
  getCourseCatagoryAction,
} from "../../../redux/actions/courseAction";
import { GROUP_CODE } from "../../../services/AdminServices/configURL";

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
  },
};

export default function CourseAddNew() {
  //SET UP STATE, REACT-HOOK METHOD
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseCatagoryAction());
  }, []);

  let courseCata = useSelector((state) => state.courseReducer.courseCata);

  //SETUP FORMIK TO FORM
  //-Set Form
  const [form] = Form.useForm();
  //-Set FieldValue for Image
  const [imgSrc, setImgSrc] = useState("");

  //-Set up Formik and submit
  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 1,
      hinhAnh: null,
      maNhom: GROUP_CODE,
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "admin",
    },
    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            // let index = values.hinhAnh.name.lastIndexOf(".");
            // let fileExtensionPart = values.hinhAnh.name.slice(
            //   index,
            //   values.hinhAnh.name.length
            // );
            // let fileNamePart = values.hinhAnh.slice(0, index);
            // let newFileName = `${fileNamePart}${values.hinhAnh.lastModified}${fileExtensionPart}`;
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      dispatch(addNewCourseAction(formData));
    },
  });

  const handleChangeFileUpload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    formik.setFieldValue("hinhAnh", file);
  };

  //-Set FieldValue for Datepicker
  const handleChangeDatepicker = (value) => {
    let ngayTao = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };
  //-Set FieldValue for Inputnumber
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  //-Set FieldValue for Select
  const handleChangeSelect = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const renderCourseCata = () => {
    return courseCata.map((item, index) => {
      return (
        <Option key={index} value={item.maDanhMuc} placeholder={item.maDanhMuc}>
          {item.maDanhMuc}
        </Option>
      );
    });
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
          defaultSelectedKeys="addCourse"
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
        {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        /> */}
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
              <div className="text-2xl bold mb-4">Add New Course</div>
              <Space
                style={{
                  marginBottom: 16,
                }}
              ></Space>

              <Form
                className="sm:w-1/3 w-2/3"
                {...formItemLayout}
                form={form}
                name="addNewCourse"
                onSubmitCapture={formik.handleSubmit}
                labelAlign="left"
              >
                <Form.Item
                  label="Course code:"
                  rules={[
                    {
                      required: true,
                      message: "Please input course code!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    //   disabled
                    name="maKhoaHoc"
                    onChange={formik.handleChange}
                    //   prefix={<VideoCameraAddOutlined className="site-form-item-icon" />}
                    placeholder="Course code"
                  />
                </Form.Item>
                <Form.Item
                  label="Alternative name:"
                  rules={[
                    {
                      required: true,
                      message: "Please input your trailer!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    name="biDanh"
                    onChange={formik.handleChange}
                    //   prefix={<LinkOutlined className="site-form-item-icon" />}
                    placeholder="Alternative name"
                  />
                </Form.Item>
                <Form.Item
                  label="Course title:"
                  rules={[
                    {
                      required: true,
                      message: "Please input your course name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    name="tenKhoaHoc"
                    onChange={formik.handleChange}
                    //   prefix={<VideoCameraAddOutlined className="site-form-item-icon" />}
                    placeholder="Course title"
                  />
                </Form.Item>
                <Form.Item
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "Please input your description!",
                      whitespace: true,
                    },
                  ]}
                >
                  <TextArea
                    name="moTa"
                    autoSize="true"
                    onChange={formik.handleChange}
                    prefix={
                      <InfoCircleOutlined className="site-form-item-icon" />
                    }
                    placeholder="Description"
                  />
                </Form.Item>
                <Form.Item
                  label="Viewed:"
                  rules={[
                    {
                      required: true,
                      // message: "Please input your course name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    disabled
                    name="luotXem"
                    onChange={formik.handleChange}
                    //   prefix={<VideoCameraAddOutlined className="site-form-item-icon" />}
                    placeholder={formik.values.luotXem}
                  />
                </Form.Item>
                <Form.Item label="Rate:">
                  <InputNumber
                    onChange={handleChangeInputNumber("danhGia")}
                    min={1}
                    max={10}
                  />
                </Form.Item>
                <Form.Item name="hinhAnh" label="Image:">
                  <Input
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    onChange={handleChangeFileUpload}
                  />
                  {imgSrc !== "" ? (
                    <img
                      className="mt-4 object-contain"
                      src={imgSrc}
                      alt="..."
                    />
                  ) : (
                    <img className="mt-4" src={imgSrc} alt="..." />
                  )}
                </Form.Item>
                <Form.Item
                  label="Group code:"
                  rules={[
                    {
                      required: true,
                      // message: "Please input your course name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    disabled
                    name="maNhom"
                    onChange={formik.handleChange}
                    //   prefix={<VideoCameraAddOutlined className="site-form-item-icon" />}
                    placeholder={GROUP_CODE}
                  />
                </Form.Item>
                <Form.Item name="ngayTao" label="Creation date:">
                  <DatePicker
                    format={"DD/MM/YYYY"}
                    onChange={handleChangeDatepicker}
                  />
                </Form.Item>
                <Form.Item
                  label="Creator:"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    disabled
                    name="taiKhoanNguoiTao"
                    onChange={formik.handleChange}
                    placeholder={formik.values.taiKhoanNguoiTao}
                  />
                </Form.Item>
                <Form.Item
                  label="Course code:"
                  rules={[
                    {
                      required: false,
                      message: "Please select course code!",
                    },
                  ]}
                  className="text-left"
                >
                  <Select
                    onChange={handleChangeSelect("maDanhMucKhoaHoc")}
                    placeholder="Select course code"
                  >
                    {renderCourseCata()}
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button
                    size="large"
                    className=""
                    type="primary"
                    htmlType="submit"
                  >
                    Add
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
