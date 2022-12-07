import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navId : ""
}

export const varSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setNavId : function(state,actions){
        state.navId = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setNavId} = varSlice.actions

export default varSlice.reducer