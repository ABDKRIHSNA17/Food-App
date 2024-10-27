import React, { useEffect, useState } from "react";
import FoodCard from "../Food-Pages/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination , Navigation } from "swiper/modules";

const categories = [
  "Choose  Item",
  "North Indian Veg",
  "South Indian Veg",
  "North Indian Non-Veg",
  "South Indian Non-Veg",
];

const ItemShow = () => {
  const [items, setItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState("Choose  Item");
  console.log(selectCategory);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filterItems =
    selectCategory === "Choose  Item"
      ? items
      : items.filter((it) => it.category === selectCategory.toLowerCase());
  console.log(filterItems);
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Top Trending</h2>
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
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
        className="mySwiper"
      >
        { filterItems.length > 0 && filterItems.map((item, i) => (
          <SwiperSlide key={i}>
            <FoodCard key={i} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default ItemShow;
