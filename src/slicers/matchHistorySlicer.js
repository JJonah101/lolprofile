import { createSlice } from '@reduxjs/toolkit'

export const matchHistorySlicer = createSlice({
    name: 'matchHistory',
    initialState: {
      value: {}
    },
    reducers: {
     setMatchHistory: (state, action) => {
        state.value = action.payload
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {setMatchHistory } = matchHistorySlicer.actions
  
  export default matchHistorySlicer.reducer