"use client";
//کامپوننت فرم برای این که تمام بخش صفحه کلاینت ساید نباشد جدا شده 
import { submitPhone } from "@/libs/fetchRequest";
import { Appdispatch } from "@/store/store";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
export default function LoginForm({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useDispatch<Appdispatch>();
  return (
    <form
      className="login_form"
      onSubmit={(e: FormEvent) => submitPhone(e, dispatch)}
    >
      {children}
    </form>
  );
}
