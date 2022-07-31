import { createSlice } from '@reduxjs/toolkit'

export const playerDataSlicer = createSlice({
    name: 'playerData',
    initialState: {
      value: {}
    },
    reducers: {
     setPlayerData: (state, action) => {
        state.value = action.payload
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const {setPlayerData } = playerDataSlicer.actions
  
  export default playerDataSlicer.reducer