import React, { useEffect, useState } from "react";
import FoodCard from "../Food-Pages/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination , Navigation } from "swiper/modules";



const ItemShow = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  
  return (
    <div className=" mt-5 mb-8 py-16">
      <h2 className=" font-semibold text-3xl">Recommended Items</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation={ true } 
        pagination={{ clickable: true }}
        loop = {true}
        pagination-clickable="true" 
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination , Navigation]}
        className="mySwiper mt-4"
      >
        {  items.slice(10,15).map((item, i) => (
          <SwiperSlide key={i}>
            <FoodCard key={i} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default ItemShow;
