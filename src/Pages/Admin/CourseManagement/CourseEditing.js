import React, { useState, useEffect } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";
import { updateCourseAdminAction } from "../../../redux/actions/courseAction";
import { GROUP_CODE } from "../../../services/configURL";
import { useParams } from "react-router-dom";

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

export default function CourseEditing({ setModalEditing }) {
  //SET UP REACT-HOOK METHOD
  let dispatch = useDispatch();
  let courseEditing = useSelector((state) => state.courseReducer.courseEditing);
  let { id } = useParams();
  //SET UP FORMIK TO FORM
  //-Set up Form
  const [form] = Form.useForm();
  //-Set fieldvalue for Image
  const [imgSrc, setImgSrc] = useState("");

  const handleChangeFileUpload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    formik.setFieldValue("hinhAnh", file);
  };
  useEffect(() => {
    setImgSrc(courseEditing.hinhAnh);
  }, [courseEditing]);

  //-Set fieldvalue for Datepicker
  const handleChangeDatepicker = (value) => {
    let ngayTao = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };
  //-Set fieldvalue for Inputnumber
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  //-Set up Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maKhoaHoc: courseEditing?.maKhoaHoc,
      biDanh: courseEditing?.biDanh,
      tenKhoaHoc: courseEditing?.tenKhoaHoc,
      moTa: courseEditing?.moTa,
      luotXem: courseEditing?.luotXem,
      danhGia: courseEditing?.danhGia,
      hinhAnh: null,
      maNhom: GROUP_CODE,
      ngayTao: courseEditing?.ngayTao,
      maDanhMucKhoahoc: courseEditing?.danhMucKhoaHoc.maDanhMucKhoahoc,
      taiKhoanNguoiTao: courseEditing?.nguoiTao.taiKhoan,
    },
    onSubmit: async (values) => {
      let idSearching = id;
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      await dispatch(updateCourseAdminAction(formData, idSearching));
      setModalEditing(false);
    },
  });

  return (
    <Form
      className="sm:w-5/6 w-3/4"
      {...formItemLayout}
      form={form}
      name="updateCourse"
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
          disabled
          name="maKhoaHoc"
          onChange={formik.handleChange}
          //   prefix={<VideoCameraAddOutlined className="site-form-item-icon" />}
          //   placeholder={formik.values.maKhoaHoc}
          value={formik.values.maKhoaHoc}
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
          disabled
          name="biDanh"
          onChange={formik.handleChange}
          //   prefix={<LinkOutlined className="site-form-item-icon" />}
          placeholder="Alternative name"
          value={formik.values.biDanh}
        />
      </Form.Item>
      <Form.Item
        label="Course title:"
        rules={[
          {
            required: true,
            message: "Please input your film name!",
            whitespace: true,
          },
        ]}
      >
        <Input
          name="tenKhoaHoc"
          onChange={formik.handleChange}
          //   prefix={<VideoCameraAddOutlined className="site-form-item-icon" />}
          placeholder="Course title"
          value={formik.values.tenKhoaHoc}
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
          prefix={<InfoCircleOutlined className="site-form-item-icon" />}
          placeholder="Description"
          value={formik.values.moTa}
        />
      </Form.Item>
      <Form.Item
        label="Viewed:"
        rules={[
          {
            required: true,
            // message: "Please input your film name!",
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
          value={formik.values.danhGia}
        />
      </Form.Item>
      <Form.Item name="hinhAnh" label="Image:">
        <Input type="file" onChange={handleChangeFileUpload} />
        {/* {imgSrc !== "" ? (
           <img className="mt-4 w-[150px] h-[250px]" src={imgSrc} alt="..." />
         ) : ( */}
        <img className="mt-4 w-[150px] h-[150px]" src={imgSrc} alt="..." />
        {/* )} */}
      </Form.Item>
      <Form.Item
        label="Group code:"
        rules={[
          {
            required: true,
            // message: "Please input your film name!",
            whitespace: true,
          },
        ]}
      >
        <Input
          disabled
          name="maNhom"
          onChange={formik.handleChange}
          //   prefix={<VideoCameraAddOutlined className="site-form-item-icon" />}
          placeholder={`${GROUP_CODE}`}
        />
      </Form.Item>
      <Form.Item label="Creation date:">
        <DatePicker
          name="ngayTao"
          format={"DD/MM/YYYY"}
          onChange={handleChangeDatepicker}
          defaultValue={moment(formik.values.ngayTao)}
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
        label="Catagory code:"
        rules={[
          {
            required: true,
            whitespace: true,
          },
        ]}
      >
        <Input
          disabled
          name="maDanhMucKhoaHoc"
          onChange={formik.handleChange}
          placeholder={formik.values.maDanhMucKhoahoc}
        />
      </Form.Item>
      <Form.Item>
        <Button size="large" className="" type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}
