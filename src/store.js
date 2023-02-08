import { createSlice, configureStore } from '@reduxjs/toolkit'

let menuOpen = createSlice({ // menuopen state 생성
    name : 'menuOpen',
    initialState : 0,
    reducers : {
        setMenuOpen(state){
            if(state == 0){
                state = 1
                return state
            } else if(state == 1) {
                state = 0
                return state
            }
        }
    }
})



export let { setMenuOpen } = menuOpen.actions; // state변경함수를 export

export default configureStore({ // state를 export
  reducer: {
    menuOpen : menuOpen.reducer
   }
})
