import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory =({data,showItems,setShowIndex,index})=>{
    const handleClick = () => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle logic
  };
    return(
        <div>
            {/* {header} */}
           <div className="w-6/12 m-auto mx-auto my-6 bg-gray-100 shadow-lg p-4 ">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
            </span>
            <span>⬇️</span>
            </div>
             {showItems && <ItemList items={data.itemCards} />}
           </div>
           
        </div>
    );
};

export default RestaurantCategory;