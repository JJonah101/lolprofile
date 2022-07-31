import { configureStore } from '@reduxjs/toolkit'
import searchInputReducer from '../slicers/searchInputSlicer'
import playerDataReducer from '../slicers/playerDataSlicer'
import matchHistoryReducer from '../slicers/matchHistorySlicer'

export default configureStore({
  reducer: {
    searchInput: searchInputReducer,
    playerData: playerDataReducer,
    matchHistory: matchHistoryReducer
  }
})