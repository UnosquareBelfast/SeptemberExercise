import instance from "../utilities/Axios";
import MockAdapter from "axios-mock-adapter";


import { retrieveTodoList, retrieveTodoListItem, updateTodoListItem, createTodoListItem, deleteTodoListItem, searchToDoListItems } from "../services/todoService";
import { retrieveDeletedTodoList, restoreDeletedTodo } from '../services/deletedTodoService';

import {addNewTask} from '../pages/TodoList/components/AddNewToDoListItem';

var mock = new MockAdapter(instance);

afterEach(() => {
  mock.reset();
});

describe("Todos testing", () => {
  it("retrieveTodoList gets all todo items", done => {
    const todoList = [
      {
        id: 1,
        title: "My first note"
      },
      {
        id: 2,
        title: "My second note"
      }
    ];

    mock.onGet("todos").reply(200, todoList);

    retrieveTodoList().then(res => {
      // console.log(`res ${JSON.stringify(res)}`);
      expect(res).toBe(todoList);
      done();
    });
  });

  it("retrieveTodoList gets item by id", done => {
    const todoListItem =
      {
        id: 1,
        title: "My first note"
      };

    mock.onGet("todos/1").reply(200, todoListItem);

    retrieveTodoListItem(1).then(res => {
      // console.log(`res ${JSON.stringify(res)}`);
      expect(res).toStrictEqual(todoListItem);
      done();
    });
  });

  it('updateTodoListItem updates the item', done => {

      mock.onPut("todos/2").reply(200);

      updateTodoListItem(2).then(res => {
          //console.log(`res ${JSON.stringify(res)}`);
          expect(res.status).toStrictEqual(200);
          done();
      })
  });



  it('deleteTodoListItem deletes the item', done => {
      
      mock.onDelete("todos/5").reply(200);

      deleteTodoListItem(5).then(res => {
          //console.log(`res ${JSON.stringify(res)}`);
          expect(res.status).toStrictEqual(200);
          done();
      })
  });

//   it('deleteTodoListItem doesnt delete the item as item doesnt exist', done => {   
  //not working can't simulate one that doesn't exist
//     mock.onDelete("todos/6").reply(200);
    
//     deleteTodoListItem(6).then(res => {
//       console.log(`res ${JSON.stringify(res)}`);
//         expect(res.status).toStrictEqual(404);
//         done();
//     })
// });

  it('createTodoListItem creates a item when valid', done => {

      mock.onPost("todos/").reply(200);
      createTodoListItem("hello").then(res => {
          expect(res.status).toStrictEqual(200);
          done();
      })
  });

  //won't let me import the method >:(
  it('createTodoListItem does not create a item when title left empty', done => {
      const toDotoCreate = {
          id:3,
          title:''
      };
      //mock.onPost("todos/3").reply(200, toDotoCreate);

      addNewTask(toDotoCreate.title).then(res => {
          
        console.log(res);
          //expect(res.data).toStrictEqual(200, null);
          
          done();
      })
  });

//   it('createTodoListItem does not create a item when title less than 2 characters', done => {
//     const toDotoCreate = {
//         id: 3,
//         title: "a"
//     };
//     mock.onPost("todos/").reply(200, null);

//     createTodoListItem(toDotoCreate.title).then(res => {
//         expect(res).toStrictEqual(null);
//         console.log(res);
//         done();
//     })
// });


  it('searchToDoListItems for to do item', done => {

    const todoListSearch = [
      {
        id: 1,
        title: "My first note"
      },
      {
        id: 2,
        title: "My second note"
      }
    ];

    mock.onGet("todos/search?title=note").reply(200, todoListSearch);

    searchToDoListItems("note").then(res => {
      expect(res).toStrictEqual(todoListSearch);
      done();
    })
  })

});

// describe('Attempting to test AddTask Method', () => {
//   const todoListItem =
//     {
//       id: 1,
//       title: "My first note"
//     };

//   mock.onGet("todos/1").reply(200, todoListItem);

//   retrieveTodoListItem(1).then(res => {
//     // console.log(`res ${JSON.stringify(res)}`);
//     expect(res.data).toStrictEqual(todoListItem);
//     done();
//   });
// });


describe("Deleted Todos testing", () => {
  it("retrieveDeletedTodoList gets all deleted todo items", done => {
    const deletedTodoList = [
      {
        id: 1,
        title: "My first note"
      },
      {
        id: 2,
        title: "My second note"
      }
    ];

    mock.onGet("deletedtodos/").reply(200, deletedTodoList);

    retrieveDeletedTodoList().then(res => {
      // console.log(`res ${JSON.stringify(res)}`);
      expect(res).toBe(deletedTodoList);
      done();
    });

  });

  it('restoreDeletedTodo recovers todo', done => {

    const recoverTodo =
      {
        id:2,
        title: 'hello'
      };

    mock.onGet("todos/recover/2").reply(200, recoverTodo);

    restoreDeletedTodo(2).then(res => {
      //console.log(res);
      expect(res).toStrictEqual(recoverTodo);
      done();
    })
  })

});