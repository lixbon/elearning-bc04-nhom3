import { https } from "./configURL";

export const courseServ = {
  getCategoryList: () => {
    let uri = "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc";
    return https.get(uri);
  },
  getCourseList: () => {
    let uri = "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01";
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
    let uri = "/api/QuanLyKhoaHoc/DangKyKhoaHoc";
    return https.post(uri, data);
  },
};
