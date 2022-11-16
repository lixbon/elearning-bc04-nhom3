import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { localServ } from "../../services/AdminServices/localService";

const { Header, Content, Sider } = Layout;

export default function AdminPage() {
  let user = localServ.user.get();

  if (user?.maLoaiNguoiDung === "GV") {
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
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="userList" icon={<UserOutlined />}>
              <NavLink to="/userManagement">User</NavLink>
            </Menu.Item>
            <Menu.SubMenu key="course" title="Course" icon={<FileOutlined />}>
              <Menu.Item key="courseItem">
                <NavLink to="/course/courseManagement">
                  Course Management
                </NavLink>
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
            ></Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            ></div>
          </Content>
        </Layout>
      </Layout>
    );
  } else return <></>;
}
