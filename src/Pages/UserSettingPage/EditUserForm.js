import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessageOn } from "../../redux/slice/messageSlice";
import { userServ } from "../../services/userService";

export default function EditUserForm() {
  const { Option } = Select;
  let { user } = useSelector((state) => {
    return state.userSlice;
  });
  let dispatch = useDispatch();
  const { taiKhoan, email, soDT, maNhom, maLoaiNguoiDung, hoTen, matKhau } =
    user;
  const onFinish = (values) => {
    userServ
      .editUserInfo(values)
      .then((res) => {
        dispatch(setMessageOn("Update Success"));
      })
      .catch((err) => {
        dispatch(setMessageOn(err.response.data));
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          taiKhoan: taiKhoan,
          matKhau: matKhau,
          email: email,
          soDt: soDT,
          maNhom: maNhom,
          maLoaiNguoiDung: maLoaiNguoiDung,
          hoTen: hoTen,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className=" p-4">
          <h4 className="dark:text-white">Account</h4>
          <Form.Item
            label=""
            name="taiKhoan"
            rules={[
              {
                required: false,
                message: "Please input your username!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <h4 className="dark:text-white">
            <span className="text-red-500">*</span> Name
          </h4>
          <Form.Item
            label=""
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h4 className="dark:text-white">
            <span className="text-red-500">*</span> Password
          </h4>
          <Form.Item
            label=""
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
          <h4 className="dark:text-white">
            <span className="text-red-500">*</span> Email
          </h4>
          <Form.Item
            label=""
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h4 className="dark:text-white">
            <span className="text-red-500">*</span> Phone Number
          </h4>
          <Form.Item
            label=""
            name="soDt"
            rules={[
              {
                required: true,
                message: "Please input your PhoneNumber!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h4 className="dark:text-white">
            <span className="text-red-500">*</span> Group
          </h4>
          <Form.Item
            label=""
            name="maNhom"
            rules={[
              {
                required: true,
                message: "Please input your Group!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <h4 className="dark:text-white">
            <span className="text-red-500">*</span> Account Type
          </h4>

          <Form.Item
            label=""
            name="maLoaiNguoiDung"
            rules={[
              {
                required: true,
                message: "Please input your type of account!",
              },
            ]}
          >
            <Select
              style={{
                width: 120,
              }}
            >
              <Option value="HV">Student</Option>
              <Option value="GV">Teacher</Option>
            </Select>
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
              <div className="justify-center items-center flex">
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </div>
            </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
