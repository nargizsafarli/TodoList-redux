// export const increment=(value)=>{
//     return{
//         type:"INCREMENT",
//         payload:value,
//     }
// }

// export const decrement=()=>{
//     return{
//         type:"DECREMENT",
//     }
// }

export const addItem=(item)=>{
    return{
         type:"ADD_ITEM",
         payload:item,
    }

}

export const removeItem=(item)=>{
    return{
         type:"REMOVE_ITEM",
         payload:item,
    }

}