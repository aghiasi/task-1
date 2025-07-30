"use client";
import { Appdispatch } from "@/store/store";
import { hardRefresh } from "@/store/userData/reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "@/types/userDataType";
export default function UserInfo() {
  const dispatch = useDispatch<Appdispatch>();
  // این بخش برای هارد رفرش کردن صفحه است 
  useEffect(() => {
    dispatch(hardRefresh());
    if (document) {
      document.querySelector("#wellcome")?.classList.remove("hidden");
    }
    const timer = setTimeout(() => {
      if (document) {
        document.querySelector("#wellcome")?.classList.add("hidden");
        clearTimeout(timer);
      }
    }, 1000);
  }, []);
  const data: User = useSelector((state: any) => state.userData.userData);
  return (
    <>
      <div
        id="wellcome"
        className="hidden fixed z-[10000] md:left-25 flex items-center top-0 p-4 md:text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
        role="alert"
      >
        <svg
          className="shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="text-3xl">wellcome {data.username}</span>
        </div>
      </div>
      <div className="  mt-5 mx-5 items-end w-[90%] bg-white  shadow-2xs rounded-[15px] h-[60vh] md:ml-25">
        {data.picture && (
          <div className="grid grid-cols-12 items-center  mt-2 p-2">
            <div className="bg-blue-400  h-[0.2px] col-span-5"></div>
            <div className="col-span-2 flex justify-center">
              <img
                src={data.picture}
                alt=""
                className="rounded-full col-span-2"
              />
            </div>
            <div className="bg-blue-400  h-[0.2px] col-span-5"></div>
          </div>
        )}
        <div className="grid grid-cols-12">
          <p className="ml-2   md:col-span-5 col-span-12 ">
            username: {data.username}
          </p>
          <p className="ml-2   md:col-span-5 col-span-12 ">name: {data.name}</p>
          <p className="ml-2   md:col-span-5 col-span-12 ">
            family name: {data.fname}
          </p>
          <p className="ml-2   md:col-span-5 col-span-12 ">
            email: {data.email}
          </p>
          <p className="ml-2   md:col-span-5 col-span-12 ">
            gender: {data.gender}
          </p>
          <p className="ml-2   md:col-span-5 col-span-12 ">age: {data.age}</p>
          <p className="ml-2   md:col-span-5 col-span-12 ">
            country: {data.location.country}
          </p>
          <p className="ml-2   md:col-span-5 col-span-12 ">
            city: {data.location.city}
          </p>
          <p className="ml-2   md:col-span-5 col-span-12 ">
            state: {data.location.state}
          </p>
          <p className="ml-2   md:col-span-5 col-span-12 ">
            street: {data.location.street.name} {data.location.street.number}
          </p>
        </div>
      </div>
    </>
  );
}
