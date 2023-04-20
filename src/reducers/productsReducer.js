const initialState = [
    {id: 'posadL12', name: 'Rolex Watch', price: 7500, quantity: 2},
    {id: 'powqedlas89', name: 'Fidget Cube', price: 2, quantity: 100}
]

export default function productsReducer(state = initialState, action) {
switch (action.type) {
    case "ADD_PRODUCT":
        return {...state, products: [...state.products, action.payload]};
    case "DELETE_PRODUCT":
        let arr = [...state];
        let index = arr.findIndex(x => x.id === action.payload.id);            
        if(index >= 0)
        {
            arr.splice(index,1)
        }
        return arr;
    case "UPDATE_PRODUCT":
        let obj = action.payload;
        let arr2 = [...state];
        let index2 = arr2.findIndex(x => x.id === obj.id);
        if (index2 >= 0)
        {
            arr2[index2] = obj;
        }
        return arr2;
    default:
        return state
}
}