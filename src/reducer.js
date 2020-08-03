const intialState = localStorage.getItem('feedlist')  ?  JSON.parse(localStorage.getItem('feedlist')): [];

const reducer = (state = intialState, action) => {
    switch (action.type) {
      case 'ADD':
        const AddList =  [
         
          {
            id: action.id,
            description: action.description,
            date: action.date,
            name: action.name,
            image: action.image,
            topics: action.topics
          },
          ...state
        ];
        localStorage.setItem('feedlist', JSON.stringify(AddList));
        return AddList;
      case 'DELETE':
         const list =  state.filter(data =>
          data.id !== action.id 
        )
        localStorage.setItem('feedlist', JSON.stringify(list));
        return list;
      default:
        return state;
    }
  }
  
  export default reducer;