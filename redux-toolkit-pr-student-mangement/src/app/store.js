import { configureStore } from "@reduxjs/toolkit";
import studentsreducer from "../features/students/studentSlice";

 const store = configureStore({
    reducer: {
        students: studentsreducer,
    }
})

export default store;