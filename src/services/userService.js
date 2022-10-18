import { https } from "./configURL";
export const userServ = {
  getUserInfo: () => {
    let uri = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";
    return https.post(uri);
  },
};
