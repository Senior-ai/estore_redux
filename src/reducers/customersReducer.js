const initialState = [
    {id: 'Asav23ds', fname: 'Yossi', lname: 'Levi', city: 'Haifa'}, 
    {id: 'LJGFDS265', fname: 'Arthur', lname: 'Onomi', city: 'Tel Aviv'}
]

export default function customersReducer(state = initialState, action) {
switch (action.type) {
    case "ADD_CUSTOMER":
        return {...state, customers: [...state.customers, action.payload]};
    case "DELETE_CUSTOMER":
        let customerArr = [...state.customers];
        let customerIndex = customerArr.findIndex(x => x.id === action.payload.id);            
        if(customerIndex >= 0)
        {
            customerArr.splice(customerIndex,1)
        }
        return {...state, customers : customerArr};
    case "UPDATE_CUSTOMER":
        let customerObj = action.payload;
        let customerArr2 = state.products;
        let customerIndex2 = customerArr2.findIndex(x => x.id === customerObj.id);
        if (customerIndex2 >= 0)
        {
            customerArr2[customerIndex2] = customerObj;
        }
        return {...state, products: customerArr2}
    default:
        return state
}
}