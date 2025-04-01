import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const OauthbaseURL = process.env.REACT_APP_SERVER_URL 