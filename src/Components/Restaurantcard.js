import { useContext } from "react";
import { CDN_URL } from "../utils/constents";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const{resData}=props;
    const{loggedInUser}=useContext(UserContext)
    const {
      cloudinaryImageId,
      name,
      avgRating, 
      cuisines,
      costForTwo
    } =resData?.info
    return (
        <div
        data-testid="resCard"
        className="m-4 p-4 w-[220px] rounded-lg bg-gray-200 hover:bg-gray-300" >
            <img className="rounded-lg" alt="res-logo" 
            
          src={CDN_URL+
          cloudinaryImageId }
          />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}minutes</h4>
            <h4>User:{loggedInUser}</h4>
        </div>
    )
}

export default RestaurantCard;