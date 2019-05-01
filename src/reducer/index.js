

const index =(state=[],action)=>{
    switch(action.type){
        case 'FETCH_WEATHER':
            console.log(action);
        
            return [action.payload.data]
        default:
            return state;
    }
}
export default index;