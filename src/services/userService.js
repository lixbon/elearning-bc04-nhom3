import axios from "axios";
import { BASE_URL, https, TOKEN_CYBERSOFT } from "./configURL";
import { localServ } from "./localService";

export const userServ = {
  userLogin: (valuesLogin) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: valuesLogin,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  userRegister: (valuesRegister) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/Dangky`,
      method: "POST",
      data: valuesRegister,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  userListAdmin: () => {
    let uri = `${BASE_URL}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    return https.get(uri);
  },
  userDeleteAdmin: (taiKhoan) => {
    let uri = `${BASE_URL}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return https.delete(uri);
  },
  userUpdateAdmin: (values) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: values,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get()?.accessToken,
      },
    });
  },
  userSearchingAdmin: (id) => {
    let uri = `${BASE_URL}/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${id}`;
    return https.get(uri);
  },
  userInfoAdmin: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get()?.accessToken,
      },
    });
  },
  userAdd: (user) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/ThemNguoiDung`,
      data: user,
      method: "POST",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localServ.user.get()?.accessToken,
      },
    });
  },
};
