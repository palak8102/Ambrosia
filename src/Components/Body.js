import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [listofrestaurants,setlistofrestaurants]=useState([]);
    const [ filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("")
    // console.log(listofrestaurants)

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async() => {
        const data = await fetch
        // ("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        ("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    
    setlistofrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
   
      
    const OnlineStatus=useOnlineStatus();  
    if(OnlineStatus === false)
         return (
    <h1>Looks like you are offline!!  Please check your internet connection;</h1>);


    if(listofrestaurants ==0){
        return <Shimmer/>
    }

    return listofrestaurants ==0 ?(
         <Shimmer/>) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                    data-testid="searchInput"
                    className="border border-solid border-black"
                    value={searchText}
                    onChange={(e)=>{setsearchText(e.target.value)}}
                    />

                    <button
                    className="px-3 py-1  bg-yellow-200 m-2 rounded-lg"
                    onClick={()=>{
                        console.log("abc")

                        const filteredRestaurant=listofrestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                       setfilteredRestaurant(filteredRestaurant)
                    }
                
                
                }
                 >Search</button>
                </div>
                <div className="search m-4 p-6 items-center">
                <button className="px-3 py-1 bg-yellow-200 rounded-lg "

                onClick={()=>{
                    const filteredlist=listofrestaurants.filter(
                        (res)=>res.info.avgRating > 4
                    );
                    setfilteredRestaurant(filteredlist);
                }}
                >
                    Top Rated Restaurants </button>
            </div>
            </div>
            <div className="flex flex-wrap">
           {
            filteredRestaurant.map((restaurant)=>
            (
            <Link
            key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant}/>
            </Link>
            ))
           }
                
               
               

            </div>
        </div>
    )
}
export default Body;