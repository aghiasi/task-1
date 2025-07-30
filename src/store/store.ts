import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
// از ریداکس و استور برای مدیریت استیت ها استفاده میکنم چون ممکن است در بخش های زیادی به این اطلاعات نیاز باشد
// و لوکال من برای این امر مناسب نیست فقط اگر اطلاعاتی نیاز دارد همیشه در سیستم باشد ان را استور میکنیم
export const store = configureStore({
    reducer
})
export type Appdispatch = typeof store.dispatch
