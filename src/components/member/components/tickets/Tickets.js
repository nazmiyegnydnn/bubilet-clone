import React from 'react'
import './Tickets.scss'
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const navigate = useNavigate();
  const homePage = ()=>{
    navigate(`/citiesDetail`);
   }
  
  return (
    <div className='tickets'>
    <div className='events'>
        <div className='activeEvents'>
            <span>0</span>
            <h3>Aktif Etkinliklerim</h3>
            <p>Giriş biletlerinizi aşağıda görebilirsiniz!</p>
        </div>
        <div className='pastEvents'>
            <button className='past'>Geçmiş Etkinlikler</button>
            <button>Ödeme Bekleyenler</button>
        </div>
    </div>
    <div className='tickestOrder'>
        <h3>Siparişlerin Boşş (sipariş verirse gelecek)</h3>
        <p>Henüz hiç etkinlik satın almadın!</p> 
        <p>Hemen bir etkinlik etkinliğe gitmek için harekete geç.</p>
        <button onClick={homePage}>Tüm Etkinlikler</button>
    </div>
    </div>
  )
}

export default Tickets