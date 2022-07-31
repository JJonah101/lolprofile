import { createSlice } from '@reduxjs/toolkit'

export const searchInputSlicer = createSlice({
    name: 'searchInput',
    initialState: {
      value: ""
    },
    reducers: {
      setInput: (state, action) => {
        state.value = action.payload
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {setInput } = searchInputSlicer.actions
  
  export default searchInputSlicer.reducer