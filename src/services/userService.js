import axios from "axios";
import { BASE_URL, https, TOKEN_CYBERSOFT } from "./configURL";
import { localServ } from "./localService";

export const userServ = {
  getUserInfo: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get().accessToken,
      },
    });
  },
  editUserInfo: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: data,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get().accessToken,
      },
    });
  },
  postLogin: (dataLogin) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", dataLogin);
  },
  postRegister: (dataRegister) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", dataRegister);
  },
};
