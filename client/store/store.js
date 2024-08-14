import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
let init={
  _id:"",
 
  email:"",
  password:"",
 
}
 let userSlice=createSlice({
  name:"user",
  initialState:init,
  reducers:{
    setUser:(state,action)=>{
        // console.log(action.payload);
        state._id=action.payload._id
        
        state.email=action.payload.email
        state.password=action.payload.password
        // console.log(state);
      
        
    },
    resetUser:(state,action)=>{
      state._id=""
     
      state.email=""
      state.password=""
      // console.log(state);
    
    }
  }

})
const meraStore=configureStore({
  reducer:{
    user:userSlice.reducer
  }
})
export default meraStore
export const {setUser,resetUser}=userSlice.actions