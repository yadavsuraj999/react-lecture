import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

 const studentSlice = createSlice({
    name: "students",
    initialState: {
        list: []
    },
    reducers: {
        addstudent: (state, action) => {
            state.list.push({id: nanoid(), ...action.payload})
            console.log({id: nanoid()});
        },
        deletestudent: (state, action) => {
            state.list = state.list.filter((std)=>{
                return std.id !== action.payload;
            })
        },
        editestudent: (state, action) => {
            const {id, ...data} = action.payload
            
            const idx = state.list.findIndex((std)=>{
                return std.id === id
            })

            state.list[idx] = {id, ...data}
        },
    }
})

export const {addstudent,deletestudent,editestudent} = studentSlice.actions;
export default studentSlice.reducer;