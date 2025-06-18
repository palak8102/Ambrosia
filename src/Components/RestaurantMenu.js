import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () =>{

    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId); 

    const[showIndex,setShowIndex]=useState(null);


if(resInfo ===null)return<Shimmer/>;

    const{ name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};


  // Get the menu cards
  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Find the card that has itemCards
  const menuCard = regularCards.find((c) => c.card?.card?.itemCards);

  const itemCards = menuCard?.card?.card?.itemCards || [];

  const categories=
     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>
        c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );
    //  console.log(categories)

// ----------------------------------------------------------------------------------------------------
// const{ name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

// const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

// const itemCards = Array.isArray(itemCards) ? itemCards : [] || {};

// console.log(itemCards)


    return (
        <div className="text-center ">
            <h1 className="font-bold my-6 text-2xl">
                {name}
            </h1>
            <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            
            {categories.map((category , index)=>(
              <RestaurantCategory
              key={category?.card?.card.title} 
              data={category?.card?.card} 
              showItems={index === showIndex }
              setShowIndex={setShowIndex}
              index={index}/>
            ))}
        </div>
    );
};

export default RestaurantMenu;