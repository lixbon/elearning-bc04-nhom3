import axios from "axios";
import { BASE_URL, https, TOKEN_CYBERSOFT } from "./configURL";
import { localServ } from "./localService";

export const courseServ = {
  getCategoryList: () => {
    let uri = "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc";
    return https.get(uri);
  },
  getCourseList: () => {
    let uri = "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01";
    return https.get(uri);
  },
  getCourseListSearch: (value) => {
    let uri = `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${value}&MaNhom=GP01`;
    return https.get(uri);
  },
  getCourseByCategory: (categoryid) => {
    let uri = `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoryid}&MaNhom=GP01`;
    return https.get(uri);
  },
  getCourseDetail: (courseid) => {
    let uri = `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseid}`;
    return https.get(uri);
  },
  postCourseRegister: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get().accessToken,
      },
    });
  },
  postCourseRemove: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyKhoaHoc/HuyGhiDanh`,
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get().accessToken,
      },
    });
  },
};
