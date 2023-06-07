import React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com/auth/login",
});

export const login = async (credentials) => {
  try {
    const response = await instance.post("/", credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
