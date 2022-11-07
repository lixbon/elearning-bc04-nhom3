import React, { useEffect } from "react";
import { localServ } from "../services/localService";

export default function SecureViewAdmin({ children }) {
  useEffect(() => {
    let userLocal = localServ.user.get();
    if (userLocal?.maLoaiNguoiDung !== "GV") {
      window.location.href = "/Error";
    }
  }, []);

  return <div>{children}</div>;
}
