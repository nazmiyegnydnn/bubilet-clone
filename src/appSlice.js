import { createSlice } from '@reduxjs/toolkit' 

const initialState = { //dizimiz depomuz burada
    cities: [
        {
            id:1,
            name: "Ankara"
        },
        {
            id:2,
            name: "Adıyaman"
        },
        {
            id:3,
            name: "Afyonkarahisar"
        },
        {
            id:4,
            name: "Ağrı"
        }
    ],
}
  

  export const appSlice =  createSlice({ 
    name: 'app',  
    initialState,
    reducers: {
        //     // kull olay //
        //      cities : (state , action)  => {
        //     state.category = [...state.category , {id:3 , name: "c3"}]  
        // }
        
    }
  })

  export const {} = appSlice.actions  

  export default appSlice.reducer  //appslice kendi dosyomızın ismine göre değişitir.
