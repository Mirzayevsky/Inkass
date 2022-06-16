
export const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_USER': {
            const user = state.user;
            const arrayUser = user.filter(item => item.id !== action.payload)
            return {...state, user: arrayUser};
        }
        case 'ADD_USER': {
            const user = state.user
            user.push(action.payload);
            return {...state, user }
        }

        case 'EDIT_USER': {
            const {user} = state;
            const newData = action.payload;
            const array = user.map((item)=> {
                if(item.id === newData.id) {
                    item = {
                        ...item,
                        name: newData.name,
                        id: newData.id,
                        phoneNumber: newData.phoneNumber,
                        address: newData.address
                    }
                }
                return item
            })
            return {...state, user: array}
        }
        // case 'ON_SEARCH':{
        //     const word = action.payload;
        //     let filterData = state.user.map((item) => {
        //           if(item.name === word) return item
        //     })}

        case 'DELETE_CASH':{
            const {cash} = state;
            const arrayCash = cash.filter((item)=>item.id !== action.payload)
            return {...state,cash:arrayCash}
        }

        case 'ADD_CASH':{
            const cash = state.cash
            cash.push(action.payload)
            return {...state, cash}
        }

        case 'EDIT_CASH':{
            const cash = state.user;
            const newData = cash.map((item) => {
                  if(item.id === action.payload) {
                     item = {
                        id:action.payload.id,
                        name:action.payload.name,
                        cashNumber:action.payload.cashNumber
                     }
                  }
                  return item
            })
            return {...state, cash:newData}
        }    

        default:
            return state;
    }
}
