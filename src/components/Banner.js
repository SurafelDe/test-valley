
import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Banner() {

    const [banners, setBanners] = useState([])

    useEffect(() => {

            fetch("https://api.testvalley.kr/main-banner/all")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setBanners(data)
            })

        }, [])

  return(
    <div>
        <Swiper
          slidesPerView={1.8}
          infinite={true}
          centeredSlides={true}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          initialSlide= {3}
          autoplay= {{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation= {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation,Pagination, Autoplay]}
          className="mySwiper"
        >

      {banners.map((banner) => (
        <SwiperSlide>
          <div key={banner.mainBannerId}>
            <img src={banner.pcImageUrl} alt={`Slide ${banner.mainBannerId}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        </SwiperSlide>
          
        ))}
      
    </Swiper>
    </div>
    
    )
}


export default Banner