import { fetchUserData } from "@/store/userData/fetchUserData";
import { logout } from "@/store/userData/reducer";
import { redirect } from "next/navigation";
import { FormEvent } from "react";
export const loginFetch = (input: string) => {
  const phoneNumber: string = `0${input}`;
  if (phoneNumber === "0") {
    throw new Error("شماره تلفن خود را وارد فرمایید");
  }
  if (phoneNumber.length != 11) {
    throw new Error("شماره وارد شده صحیح نمی باشد");
  }
};
export const submitPhone = async (e: FormEvent, dispatch: Function) => {
  e.preventDefault();
  const username: HTMLInputElement | null = document.querySelector("#username");
  const alert: HTMLElement | null = document.querySelector("#alert");
  if (username && alert) {
    alert.innerText = "";
    username.classList.remove("!border-red-400");
    try {
      loginFetch(username.value);
      dispatch(fetchUserData());
    } catch (e: any) {
      username.classList.add("!border-red-400");
      alert.classList.remove("hidden");
      alert.innerText = `${e.message}`;
    }
  }
};
export const logoutHandler = async (e:any, dispatch: Function) => {
  e.preventDefault();
  try {
    fetch("/api/logout", {
      method: "POST",
    }).then((result) => {
      dispatch(logout());
    });
  } finally {
    redirect("/auth");
  }
};
