import { createSlice } from '@reduxjs/toolkit' 

const initialState = { //dizimiz depomuz burada
    cities: [
        {
            id:34,
            name: "İstanbul"
        },
        {
            id:35,
            name: "İzmir"
        },
        {
            id:6,
            name: "Ankara"
        },
        {
            id:1,
            name: "Adana"
        },       {
            id:3,
            name: "Afyonkarahisar"
        },
        {
            id:4,
            name: "Ağrı"
        },       {
            id:5,
            name: "Amasya"
        },
        {
            id:7,
            name: "Antalya"
        },
        {
            id:9,
            name: "Aydın"
        },
        {
            id:10,
            name: "Balıkesir"
        },
        {
            id:14,
            name: "Bolu"
        },       {
            id:16,
            name: "Bursa"
        },
        {
            id:17,
            name: "Çanakkale"
        },
        {
            id:19,
            name: "Çorum"
        },
        {
            id:20,
            name: "Denizli"
        },
        {
            id:21,
            name: "Diyarbakır"
        },       {
            id:22,
            name: "Edirne"
        },
        {
            id:25,
            name: "Erzurum"
        },
        {
            id:26,
            name: "Eskişehir"
        },
        {
            id:27,
            name: "Gaziantep"
        }
    ],
}
  

  export const appSlice =  createSlice({ 
    name: 'app',  
    initialState,
    reducers: {
            
        filterCities : (state , action)  => {
        const filterData = state.cities?.filter((el) =>el.name?.toLocaleLowerCase()?.includes(action.payload.toLocaleLowerCase()));
        state.cities = filterData
        }
        
    }
  })

  export const {filterCities} = appSlice.actions  

  export default appSlice.reducer  //appslice kendi dosyomızın ismine göre değişitir.
