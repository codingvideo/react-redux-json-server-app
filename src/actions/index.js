import ajax from '../services/ajax.js';

export const toAddTodo = (data)=>({ type:'ADD_TODO', data:data })

export const toRemoveTodo = (data)=>({ type:'REMOVE_TODO', data:data })

export const toLoadTodos = (data) => ({type:'LOAD_DEFAULT', data:data});

export const toGetTodos = function(){
  return function(dispatch){
    ajax.getTodos().then(function(data){
      dispatch( toLoadTodos(data) );
    }).catch(function(err){
      dispatch( toLoadTodos([{id:0,val:'error: server-not-responding'}]) );
    });
  };
};

export const toPostTodo = function(data){
  return function(dispatch){
    ajax.postTodo(data).then(function(data){
      dispatch( toAddTodo(data) );
    });
  };
};
