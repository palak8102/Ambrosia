import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constents";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch =useDispatch();

  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
        data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 
             border-gray-300 border-b-2 text-left flex justify-between items-center">
             
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
           <div className="w-3/12 p-2">
          <div className="absolute">
          <button className="p-1 mx-18 bg-gray-50  rounded-lg hover:border border-gray-400 shadow-lg cursor-pointer hover:cursor-pointer "
          onClick={() => handleAddItem(item)}>
           Add +
            </button>
          </div>
          <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-xl" />
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
