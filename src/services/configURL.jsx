import axios from "axios";
const fakeaccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibGl4Ym9uIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiSFYiLCJuYmYiOjE2NjY1MTU2OTksImV4cCI6MTY2NjUxOTI5OX0.nktFl73qxkp9SFmRu1wgLzLT9g1d5Qj3FaztE349FBc";

export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjIwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Njg1MTIwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc2OTk4ODAwfQ.QYLXMgjth5hQh9opZbNS7JEDPZGWA3o_95kR_VyLix8";

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: "Bearer " + fakeaccessToken, //+ localServ.user.get()?.accessToken,
  },
});
