import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const studentSlice = createSlice({
    name: "students",
    initialState: {
        list: [],
        isEdit: null
    },
    reducers: {
        addstudent: (state, action) => {
            state.list.push({ id: nanoid(), ...action.payload })
        },
        deletestudent: (state, action) => {
            state.list = state.list.filter((std) => {
                return std.id !== action.payload;
            })
        },
        // editestudent: (state, action) => {
        //     const {id, ...data} = action.payload

        //     const idx = state.list.findIndex((std)=>{
        //         return std.id === id
        //     })

        //     state.list[idx] = {id, ...data}
        // },
        editStudent: (state, action) => {
            const idx = state.list.findIndex((std) => {
                return std.id == action.payload.isEdit
            })
            const { id, ...data } = action.payload.input
            console.log(data);
            state.list[idx] = { id: action.payload.isEdit, ...data };
        },
        setIsEdit: (state, action) => {
            state.isEdit = action.payload
        }
    }
})

// {id:123, data:{id:123}}

export const { addstudent, deletestudent, editestudent, editStudent, setIsEdit } = studentSlice.actions;
export default studentSlice.reducer;