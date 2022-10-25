const ELEARNINGUSER = "ELEARNINGUSER";

export const localServ = {
  user: {
    set: (dataLogin) => {
      let jsonData = JSON.stringify(dataLogin);
      localStorage.setItem(ELEARNINGUSER, jsonData);
    },
    get: () => {
      let jsonData = localStorage.getItem(ELEARNINGUSER);
      if (jsonData) {
        return JSON.parse(jsonData);
      } else {
        return null;
      }
    },
    remove: () => {
      localStorage.removeItem(ELEARNINGUSER);
    },
  },
};
const fakeUser = {
  taiKhoan: "lixbon",
  email: "string",
  soDT: "string",
  maNhom: "GP01",
  matKhau: "1234",
  maLoaiNguoiDung: "HV",
  hoTen: "lixbon",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibGl4Ym9uIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiSFYiLCJuYmYiOjE2NjY1MzAzOTAsImV4cCI6MTY2NjUzMzk5MH0.7BYNGXxUx99ts69klgKC2H3gK-DHmfcsIN7-2eVeNWw",
};

localStorage.setItem(ELEARNINGUSER, JSON.stringify(fakeUser));
