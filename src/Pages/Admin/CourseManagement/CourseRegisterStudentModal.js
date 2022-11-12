import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { registerCourseForStudentAction } from "../../../redux/actions/courseAction";

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

export default function CourseRegisterStudentModal({ setModalRegisterCourse }) {
  //SET UP REACT-HOOK METHOD
  let dispatch = useDispatch();
  let courseEditing = useSelector((state) => state.courseReducer.courseEditing);
  //-Set up Form
  const [form] = Form.useForm();
  form.setFieldsValue({
    maKhoaHoc: courseEditing.maKhoaHoc,
  });

  const onFinish = async (values) => {
    await dispatch(registerCourseForStudentAction(values));
    setModalRegisterCourse(false);
  };

  return (
    <Form
      className="sm:w-5/6 w-3/4"
      {...formItemLayout}
      form={form}
      name="registerCourseForStudent"
      labelAlign="left"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="maKhoaHoc"
        label="Course code:"
        rules={[
          {
            required: true,
            message: "Please input course code!",
            whitespace: true,
          },
        ]}
      >
        <Input disabled placeholder={courseEditing.maKhoaHoc} />
      </Form.Item>
      <Form.Item
        name="taiKhoan"
        label="User name:"
        rules={[
          {
            required: true,
            message: "Please input student's user!",
            whitespace: true,
          },
        ]}
      >
        <Input
          //   disabled
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item>
        <Button size="large" className="" type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}
