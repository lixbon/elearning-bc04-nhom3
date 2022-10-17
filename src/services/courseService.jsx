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
};
