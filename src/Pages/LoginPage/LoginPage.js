import React from "react";
import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userServ } from "../../services/userService";
import { setUserInfor } from "../../redux/slice/userSlice";
import { localServ } from "../../services/localService";
import Style from "./Login.module.css";
import { setMessageOn } from "../../redux/slice/messageSlice";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onFinish = (values) => {
    userServ
      .postLogin(values)
      .then((res) => {
        dispatch(setUserInfor(res.data));
        dispatch(setMessageOn("Login Success"));
        localServ.user.set(res.data);
        navigate("/");
      })
      .catch((err) => {
        dispatch(setMessageOn(err.response.data));
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="">
      <div className="max-w-layout mx-auto min-h-[75vh] flex items-center justify-center ">
        <div className="w-1/2 h-full flex items-center justify-center">
          <Form
            className={`${Style["loginglass"]} w-full`}
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
            <div className=" p-4">
              <Form.Item
                label="Username"
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
                wrapperCol={{
                  span: 24,
                }}
              >
                <div
                  className="space-y-4 py-4
            "
                >
                  <div className="justify-center items-center flex flex-col">
                    <Button type="primary" htmlType="submit">
                      Login
                    </Button>
                    <h3 className="my-3">
                      If you don't have an account, please{" "}
                      <NavLink to="/register">
                        <span>Register</span>
                      </NavLink>
                    </h3>
                  </div>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
