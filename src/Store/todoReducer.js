const initialState={
    items:JSON.parse(localStorage.getItem("todos"))||[]
}
const todoReducer=(state=initialState,action)=>{
   switch(action.type){
    case "ADD_ITEM":
       const newAddState={...state,
            items:[...state.items,{id:Date.now(),text:action.payload}]};
             localStorage.setItem("todos",JSON.stringify(newAddState.items))
             return newAddState;

    case "REMOVE_ITEM":
        const newRemoveState={...state,
            items:state.items.filter((item)=>item.id !==action.payload)
        }
        localStorage.setItem("todos",JSON.stringify(newRemoveState.items))
        return newRemoveState;
        default:
         return state;
   }
   
}
export default todoReducer;