import { createSlice } from '@reduxjs/toolkit' 
import Semicenk from '././images/Semicenk.jpeg';
import Gulsen from '././images/Gulsen.jpg';
import YildizTilbe from '././images/YildizTilbe.png';
import MelikeSahin from '././images/MelikeSahin.png';
import Gazapizm from '././images/Gazapizm.jpg';
import KenanDogulu from '././images/KenenDogulu.jpg';
import CemAdrian from '././images/CemAdrian.jpg';
import ErolEvgin from '././images/ErolEvgin.jpg';
import Athena from '././images/Athena.jpg';
import Edis from '././images/Edis.jpg';




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
        },
        {
            id:22,
            name: "Edirne"
        },
        {
            id:23,
            name: "Elazığ"
        },
        {
            id:24,
            name: "Erzincan"
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
        },
        {
            id:28,
            name: "Giresun"
        },
        {
            id:31,
            name: "Hatay"
        },
        {
            id:32,
            name: "Isparta"
        },
        {
            id:33,
            name: "Mersin"
        },
        {
            id:36,
            name: "Kars"
        },
        {
            id:38,
            name: "Kayseri"
        },
        {
            id:39,
            name: "Kırklareli"
        },
        {
            id:41,
            name: "Kocaeli"
        },
        {
            id:42,
            name: "Konya"
        },
        {
            id:43,
            name: "Kütahya"
        },    
        {
            id:44,
            name: "Malatya"
        },
        {
            id:45,
            name: "Manisa"
        },
        {
            id:46,
            name: "Kahramanmaraş"
        }
     
    ],
    events:[
        {
            img:Semicenk,
            title:"Semicenk Konseri",
            location:"Armada",
            date:"23 Eylül",
            price:"430 TL"
        },
        {
            img:Gulsen,
            title:"Gülşen Konseri",
            location:"Congresiıum",
            date:"15 Eylül",
            price:"299 TL"
        },
        {
            img:YildizTilbe,
            title:"Yıldız Tilbe Konseri",
            location:"Congresiıum",
            date:"6 Ekim",
            price:"299 TL"
        },
        {
            img:MelikeSahin,
            title:"Melike Şahin Konseri",
            location:"Armada",
            date:"17 Eylül",
            price:"400 TL"
        },
        {
            img:Gazapizm,
            title:"Gazapizm Konseri",
            location:"Oran Açıkhava",
            date:"30 Eylül",
            price:"350 TL"
        },
        {
            img:KenanDogulu,
            title:"Kenan Doğulu Konseri",
            location:"Atılım Üniversitesi",
            date:"1 Eylül",
            price:"728 TL"
        },
        {
            img:CemAdrian,
            title:"Cem Adrian Konseri",
            location:"MEB Şura Salonu",
            date:"17 Eylül",
            price:"388 TL"
        },
        {
            img:ErolEvgin,
            title:"Erol Evgin Konseri",
            location:"Atılım Üniversitesi",
            date:"8 Eylül",
            price:"339 TL"
        },   
         {
            img:Athena,
            title:"Athena Konseri",
            location:"Armada",
            date:"3 Eylül",
            price:"250 TL"
        },
        {
            img:Edis,
            title:"Edis Konseri",
            location:"Congresiıum",
            date:"21 Ekim",
            price:"299 TL"
        },
        {
            img:Edis,
            title:"Edis Konseri",
            location:"Congresiıum",
            date:"21 Ekim",
            price:"299 TL"
        },
        {
            img:Edis,
            title:"Edis Konseri",
            location:"Congresiıum",
            date:"21 Ekim",
            price:"299 TL"
        }
    ]
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
