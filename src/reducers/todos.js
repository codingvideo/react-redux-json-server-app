
export const selectTodos = function(todos, filter){
  if(todos.length===0){
    return [];
  }
  else if(filter==='first'){
    return [ todos[0] ];
  }
  else if(filter==='last'){
    return [ todos[todos.length-1] ];
  }
  else{
    return todos;
  }
};

export default function(state=[], action){
  switch(action.type){
    case 'ADD_TODO':
      return state.concat([ action.data ]);
    case 'REMOVE_TODO':
      let newTodos = [];
      for(var i=0; i<state.length; i++){
        var item = state[i];
        if(item.id!==action.data.id){
          newTodos.push(item);
        }
      }
      return newTodos;
    case 'LOAD_DEFAULT':
      return action.data;
    default:
      return state;
  }
}
