import { Button, Form, Input, message, Select } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { userServ } from "../../services/userService";

export default function EditUserForm() {
  const { Option } = Select;
  let { user } = useSelector((state) => {
    return state.userSlice;
  });
  const { taiKhoan, email, soDT, maNhom, maLoaiNguoiDung, hoTen, matKhau } =
    user;
  const onFinish = (values) => {
    userServ
      .editUserInfo(values)
      .then((res) => {
        message.success("Cập nhật Người Dùng Thành Công");
        console.log(res);
      })
      .catch((err) => {
        message.error(err.response.data.content);
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
          <Form.Item
            label="Account"
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
          <Form.Item
            label="Name"
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
            label="Email"
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
          <Form.Item
            label="Phone Number"
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
          <Form.Item
            label="Group"
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

          <Form.Item
            label="Account Type"
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
