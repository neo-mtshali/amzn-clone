export const initialState = {
    basket: [],
    user: null,
  };
  
  export const getBasketTotal = (basket) => {
    console.log("Basket:", basket); 
    return basket?.reduce((amount, item) => {
      console.log("Item:", item, "Current Amount:", amount); 
      const price = Number(item.price);
      console.log("Price (converted):", price); 
      if (isNaN(price)) {
        console.error(`Invalid price for item: ${item.id}, price: ${item.price}`);
        return amount;
      }
      return price + amount;
    }, 0);
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        console.log("Adding to basket:", action.item); 
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
  
      case "EMPTY_BASKET":
        return {
          ...state,
          basket: [],
        };
  
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          );
        }
  
        return {
          ...state,
          basket: newBasket,
        };
  
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;