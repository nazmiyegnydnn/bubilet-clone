import React from 'react'
import './Tickets.scss'
import { useNavigate } from "react-router-dom";




const Tickets = ( {basketData } ) => {
  const navigate = useNavigate();

  const homePage = ()=>{
    navigate(`/citiesDetail`);
   }



  return (
    <div className='tickets'>
    <div className='events'>
         {basketData?.length > 0 ? (
                <div className='activeEvents'>
                <h3>Aktif Etkinliklerim</h3>
                <span>{basketData.length} Biletiniz var</span>
                <p>Giriş biletlerinizi aşağıda görebilirsiniz!</p>
               <div className='ticketsCard'>
               {
                  basketData.map((el) =>(
                    <div className='ticket'>
                    <h2>BİLETLERİM</h2>
                   <p>{el.name}</p>
                   <span>{el.price}</span>
                   <p>{el.location}</p>
                   <p>{el.city}</p>
                   </div>
                  ))
                }
               </div>
            </div>
            ) : (
              <div className='tickestOrder'>
              <h3>Siparişlerin Boşş (sipariş verirse gelecek)</h3>
              <p>Henüz hiç etkinlik satın almadın!</p> 
              <p>Hemen bir etkinlik etkinliğe gitmek için harekete geç.</p>
              <button onClick={homePage}>Tüm Etkinlikler</button>
          </div>
            )}
        <div className='pastEvents'>
            <button className='past'>Geçmiş Etkinlikler</button>
            <button>Ödeme Bekleyenler</button>
        </div>
    </div>
    </div>
  )
}

export default Tickets