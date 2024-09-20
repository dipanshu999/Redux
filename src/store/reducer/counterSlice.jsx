import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
    naam:'Alex'
}

export const counterSlice = createSlice({
    name:'app',
    initialState,

    reducers:{
        increment:(state)=>{
            state.value+=1;
            state.naam.concat('a')
            console.log(state.naam)
        },
        decrement:(state)=>{
            state.value-=1;
        },
        addByValue:(state,action)=>{
            state.value+=action.payload
        }
    }
})

export const { increment, decrement, addByValue } = counterSlice.actions

export default counterSlice.reducer