import { https } from "./configURL";
export const userServ = {
  postLogin: (dataLogin) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", dataLogin);
  },
};
