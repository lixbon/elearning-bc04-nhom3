import { Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";

import { NavLink } from "react-router-dom";
import React from "react";
import { userAddingAction } from "../../../redux/actions/userActions";

const { Option } = Select;
const { Header, Content, Sider } = Layout;

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

export default function UserAdd() {
  //SET UP REACT-HOOK METHOD
  let dispatch = useDispatch();

  //SET UP FORM AND SUBMIT FORM
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(userAddingAction(values));
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
        <Menu theme="dark" defaultSelectedKeys="userList" mode="inline">
          <Menu.Item key="userList" icon={<UserOutlined />}>
            <NavLink to="/userManagement">User</NavLink>
          </Menu.Item>
          <Menu.SubMenu key="course" title="Courses" icon={<FileOutlined />}>
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
            {" "}
            <Breadcrumb.Item>
              <NavLink to="/userManagement">User Management</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Form
              className="lg:w-2/5 sm:w-3/5 w-5/6 text-right !ml-[5%] !mt-[5%]"
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="taiKhoan"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="soDt"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                  placeholder="Phone Number"
                />
              </Form.Item>
              <Form.Item
                name="maNhom"
                rules={[
                  {
                    required: true,
                    message: "Please select group code!",
                  },
                ]}
                className="text-left"
              >
                <Select placeholder="select group code">
                  {/* <Option value="GP00">GP00</Option> */}
                  <Option value="GP01">GP01</Option>
                  {/* <Option value="GP02">GP02</Option> */}
                  {/* <Option value="GP03">GP03</Option> */}
                  {/* <Option value="GP04">GP04</Option>
                  <Option value="GP05">GP05</Option>
                  <Option value="GP06">GP06</Option>
                  <Option value="GP07">GP07</Option> */}
                </Select>
              </Form.Item>
              <Form.Item
                name="maLoaiNguoiDung"
                rules={[
                  {
                    required: true,
                    message: "Please select group code!",
                  },
                ]}
                className="text-left"
              >
                <Select placeholder="select user type">
                  <Option value="GV">Giáo Vụ</Option>
                  <Option value="HV">Học Viên</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="hoTen"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  prefix={<IdcardOutlined className="site-form-item-icon" />}
                  placeholder="Full Name"
                />
              </Form.Item>
              <Form.Item className="text-left">
                <Button type="primary" htmlType="submit">
                  Add
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}