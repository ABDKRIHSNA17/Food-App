import rev_1 from "../../assets/review-1.jpg"
import rev_2 from "../../assets/rev-2.jpg"
import rev_3 from "../../assets/rev-3.jpg"
import rev_4 from "../../assets/rev-4.jpg"
import rev_5 from "../../assets/rev-5.jpg"

const reviewData = [
    {
        "id": 1,
        "title": "Michelin-Star Chef Opens New Vegan Restaurant",
        "description": "A renowned Michelin-star chef has launched an innovative vegan restaurant, serving gourmet plant-based dishes that promise to redefine vegan dining.",
        "image": rev_1
    },
    {
        "id": 2,
        "title": "New Fusion Cuisine Craze: Asian and Mediterranean Flavors",
        "description": "A popular new restaurant is making waves with a unique fusion of Asian and Mediterranean flavors, drawing foodies from across the city.",
        "image": rev_2
    },
    {
        "id": 3,
        "title": "Local Diner Adds Farm-to-Table Options",
        "description": "A beloved local diner has introduced a farm-to-table menu, offering fresh, locally-sourced ingredients to support sustainable agriculture.",
        "image": rev_3
    },
    {
        "id": 4,
        "title": "Pizza Chain Launches New Limited-Edition Truffle Pizza",
        "description": "A popular pizza chain has introduced a new limited-edition truffle pizza, made with premium ingredients and offering a rich, gourmet taste.",
        "image": rev_4
    },
    {
        "id": 5,
        "title": "Sushi Restaurant Debuts 'No-Rice' Sushi Rolls",
        "description": "A trending sushi restaurant has launched a new line of 'no-rice' sushi rolls, catering to customers seeking low-carb and keto-friendly options.",
        "image": rev_5
    }
]

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom"



const Review = () => {
    return (
      <div className='py-16'>
          <h2 className='text-3xl font-semibold mb-6'>Customer Feedback </h2>
  
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          
          {
            reviewData.map((item, index) => (
                  <SwiperSlide key={index}>
                      <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                          <div className='py-4'>
                              <Link to="/">
                                   <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                              </Link>
                              <div className='w-12 h-[4px] bg-primary mb-5'></div>
                              <p className='text-sm text-gray-600'>{item.description}</p>
                          </div>
  
                          <div className='flex-shrink-0'>
                              <img src={item.image} alt=""  className='w-full object-cover'/>
                          </div>
                      </div>
                  </SwiperSlide>
              ) )
          }
        </Swiper>
      </div>
    )
  }
  
  export default Review