import React from "react";
import homeImage from "../../assets/home.jpeg"

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
     <div className="md:w-1/2   w-full flex items-center justify-center md:justify-end">
        <img src={homeImage} alt="" className="  shadow-2xl rounded-lg " />
      </div> 
      <div className="md:w-1/2 w-full ">
        <h1 className="md:text-5xl text-2xl font-medium mb-7 ">
          {" "}
          Special Items Launched{" "}
        </h1>
        <p className="mb-10">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          voluptatem modi labore numquam. Molestias voluptatem eos reiciendis
          quo magnam minus?
        </p>
        <button className="btn-primary">
            {" "}
          Shop Now{" "}
        </button>
      </div>
      
    </div>
  );
};

export default Banner;
