import { User } from "@/types/userDataType";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUserData = createAsyncThunk(
  "userData/fetchUser",
  async () => {
    const data = await(await fetch("http://localhost:3000/api/login",{
      method:"POST"
    })).json();
    const {results} =data
    const user = results[0]
    if(results){
      console.log(results)
    const userData:User ={
      age:user.dob.age,
      email:user.email,
      fname:user.name.last,
      gender:user.gender,
      location:{
        city:user.location.city,
        country:user.location.country,
        state:user.location.state,
        street:user.location.street
      },
      name:user.name.first,
      picture:user.picture.large,
      username:user.login.username
    }
    return userData 
    }

  }
);
