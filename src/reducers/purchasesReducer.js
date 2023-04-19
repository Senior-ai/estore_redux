const initialState = [
    {id: 0, customerId: 1, productId: 1, date: '16/04/2023'}, 
    {id: 1, customerId: 0, productId: 0, date: '17/04/2023'}
]
//TODO - After removing the initialState here, return the state to 'state = []'
export default function purchasesReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PURCHASE":
            return [...state, action.payload];
        case "DELETE_PURCHASE":
            let arr = [...state];
            let index = arr.findIndex(x => x.id === action.payload.id);            
            if(index >= 0)
            {
                arr.splice(index,1)
            }
            return arr;
        case 'DELETE_PRODUCT_PURCHASES': //This case gets called only once a product gets deleted.
            const productId = action.payload;
            let _arr = [...state];
            const updatedPurchases = _arr.filter(purchase => purchase.productId !== productId);
            return updatedPurchases;
        case "UPDATE_PURCHASE":
            let obj = action.payload;
            let arr2 = state.purchases;
            let index2 = arr2.findIndex(x => x.id === obj.id);
            if (index2 >= 0)
            {
                arr2[index2] = obj;
            }
            return {...state, purchases: arr2}
        default:
            return state
    }
}