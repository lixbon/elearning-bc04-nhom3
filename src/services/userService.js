import { https } from "./configURL";
export const userServ = {
  postLogin: (dataLogin) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", dataLogin);
  },
  postRegister: (dataRegister) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", dataRegister);
  },
};
