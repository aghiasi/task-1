import { Init } from "@/types/userDataType";
export const initialState: Init = {
  loading: false,
  userData: {
    name: "",
    fname: "",
    age: 0,
    username: "",
    picture: "",
    gender: "",
    email: "",
    location: {
      city: "",
      state: "",
      street: {
        name: "",
        number: 0,
      },
      country: "",
    },
  },
  error: "",
};
