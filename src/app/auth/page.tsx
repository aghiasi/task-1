"use server";
import LoginForm from "../components/LoginForm";
import img from "../../../public/assets/icons/image.png"
import Image from 'next/image'
export default async function Login() {
  return (
    <section className="login_section ">
      <div className="login_form_layout">
        <div className="login_form_wraper">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="login_form_header">ورود کاربران</h1>
            <LoginForm>
              <div className="grid grid-cols-12 gap-2">
                <label className="login_form_lable col-span-12">
                  شماره تلفن همراه
                </label>
            <p dir="rtl" id="alert"className="text-red-400 rtl col-span-12"></p>
                <span className="login_form_username col-span-4">
                  <Image className="m-auto inline" src={img} width={25} height={25} alt=""/> +98
                </span>
                <input
                  type="number"
                  name="username"
                  id="username"
                  className="login_form_username col-span-8"
                  placeholder="91200000000"
                />
              </div>
              <button type="submit" className="login_form_btn">
                دریافت رمز
              </button>
            </LoginForm>
          </div>
        </div>
      </div>
    </section>
  );
}
