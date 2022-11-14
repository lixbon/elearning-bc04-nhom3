import React from "react";
import { Button, Form, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Style from "./register.module.css";

export default function RegisterPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    let onSuccess = () => {
      message.success("Đăng kí tài khoản Thành Công");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    };
    let onFail = (reason) => {
      message.error(reason);
    };
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-layout mx-auto min-h-[75vh] flex items-center justify-center">
      <div className="w-1/2 h-full flex items-center justify-center">
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
              label="Tài Khoản"
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
              label="Mật Khẩu"
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
              label="Tên"
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
              label="Số Điện Thoại"
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
                    Đăng Ký
                  </Button>
                </div>

                <h3 className="text-center text-white">
                  Nếu bạnh đã có tài khoản, vui lòng{" "}
                  <NavLink to="/login">
                    <span>Đăng Nhập</span>
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
