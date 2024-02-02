import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay, Controller, Navigation } from 'swiper/modules';

export default function ItemList(props) {
  const itemData = props.props;

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="flex my-10" key={itemData.id}>
      <div style={{ width: '20%', margin: '0 10' }}>
        <div className="mb-20">
          <div className="text-2xl mb-2 font-medium">{itemData.title}</div>
          <div className="text-xs text-gray-400">{itemData.subtitle}</div>
        </div>

        <Swiper
            modules={[Controller, Navigation]}
            navigation={true}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            className="mySwiper controller-only"
          >
            {itemData.items.map((item) => (
              <SwiperSlide>
                <div key={item.publication.id}></div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

      <div style={{ display: 'inline-block', width: '80%' }}>
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={2}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            className="mySwiper"
          >
            {itemData.items.map((item) => (
              <SwiperSlide>
                <div key={item.publication.id}>
                  <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-55">
                    <img
                      src={item.publication.media[0].uri}
                      alt={`Slide ${item.publication.id}`}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={item.key}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {item.publication.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-xl text-red-500">
                        <span>
                          {item.publication.priceInfo.discountRate}
                          <span>%</span>
                        </span>
                        <span className="ml-1 text-xl font-medium text-gray-600">
                          {parseInt(item.publication.priceInfo.discountPrice).toLocaleString()}
                        </span>
                      </p>
                    </div>
                    {Array.isArray(item.publication.tagsOnDesc) &&
                    item.publication.tagsOnDesc.length > 0 ? (
                      <span class="inline-flex items-center rounded-md bg-gray-50 px-1 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {item.publication.tagsOnDesc[0]}
                      </span>
                    ) : (
                      <p></p>
                    )}
                    <p>
                      <span style={{ color: 'gray', fontSize: '12px' }}>&#9733; 5</span>
                    </p>
                    {item.publication.preface !== null && item.publication.preface.length > 0 ? (
                      <span class="inline-flex items-center rounded-md bg-white px-1 py-1 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        <span>
                          <img src={item.publication.prefaceIconUrl} alt='' className="w-4 h-4 mr-2"/>
                          </span>
                          <span className='text-xs'>{item.publication.tagsOnDesc[0]}</span>
                      </span>
                    ) : (
                      <p></p>
                    )}
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </>
      </div>
    </div>
  );
}
