import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { FromValidation } from '../../../constant/globalIntefaces'

// Define the initial state using that type
const initialState: FromValidation[] = [
  {
    WorkDescription: "Sasd",
    WorkTitle: "sadasd",
    id:555
  }
]



export const listWorksSlice = createSlice({
  name: 'listWorksSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addWork: (state, action: PayloadAction<FromValidation>) => {
      console.log("action", action)
      return state
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { addWork } = listWorksSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state

export default listWorksSlice.reducer