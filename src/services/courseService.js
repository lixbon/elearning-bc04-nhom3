import axios from "axios";
import { BASE_URL, GROUP_CODE, https, TOKEN_CYBERSOFT } from "./configURL";
import { localServ } from "./localService";

export const courseServ = {
  courseList: () => {
    let uri = `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_CODE}`;
    return https.get(uri);
  },
  deleteCourse: (maKhoaHoc) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
      method: "DELETE",
      data: maKhoaHoc,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get()?.accessToken,
      },
    });
  },
  updateCourseAdmin: (formData) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`,
      method: "POST",
      data: formData,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  addNewCourseAdmin: (formData) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,
      method: "POST",
      data: formData,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getSearchingList: (id) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${id}&MaNhom=${GROUP_CODE}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getCourseCatagory: () => {
    let uri = `${BASE_URL}/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`;
    return https.get(uri);
  },
  getCourseStudentList: (id) => {
    let uri = `${BASE_URL}/api/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${id}`;
    return https.get(uri);
  },
  getCourseInfo: (id) => {
    let uri = `${BASE_URL}/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`;
    return https.get(uri);
  },
  cancelRegisterCourse: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyKhoaHoc/HuyGhiDanh`,
      data,
      method: "POST",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get()?.accessToken,
      },
    });
  },
  registerCourseForStudent: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
      data,
      method: "POST",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get()?.accessToken,
      },
    });
  },
};
