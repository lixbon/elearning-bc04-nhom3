import React from "react";
import { Button, Form, Input, Select } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Style from "./register.module.css";
import { userServ } from "../../services/userService";
import { setUserInfor } from "../../redux/slice/userSlice";
import { setMessageOn } from "../../redux/slice/messageSlice";
import { Option } from "antd/lib/mentions";

export default function RegisterPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userServ
      .postRegister(values)
      .then((res) => {
        dispatch(setUserInfor(res.data));
        dispatch(setMessageOn("Register Success"));
        navigate("/login");
      })
      .catch((err) => {
        dispatch(setMessageOn(err.response.data));
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-layout mx-auto min-h-[75vh] flex items-center justify-center">
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <Form
          className={`${Style["cardglass"]} w-full`}
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="p-4">
            <Form.Item
              label="Account"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Name"
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="soDt"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Group (GP01-&gt; GP05)"
              name="maNhom"
              rules={[
                {
                  required: true,
                  message: "Please select your Group!",
                },
              ]}
            >
              <Select
                style={{
                  width: 120,
                }}
                defaultValue="--Select--"
              >
                <Option value="GP01">GP01</Option>
                <Option value="GP02">GP02</Option>
                <Option value="GP03">GP03</Option>
                <Option value="GP04">GP04</Option>
                <Option value="GP05">GP05</Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 34,
              }}
            >
              <div
                className="space-y-4 py-4
              "
              >
                <div className="justify-center items-center flex">
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </div>

                <h3 className="text-center">
                  If you have an account, please{" "}
                  <NavLink to="/login">
                    <span>Login</span>
                  </NavLink>
                </h3>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
