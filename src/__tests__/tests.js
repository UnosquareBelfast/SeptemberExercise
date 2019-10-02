import instance from "../utilities/Axios";
import MockAdapter from "axios-mock-adapter";

import { retrieveTodoList, retrieveTodoListItem,searchForTodoListItem ,updateTodoListItem,createTodoListItem,deleteTodoListItem} from "../services/todoService";
import { recieveDeletedTodoList , recoverTodoListItem} from "../services/deletedTodoService";

var mock = new MockAdapter(instance);

afterEach(() => {
  mock.reset();
});

describe("Todos", () => {
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

    mock.onGet("todos/").reply(200, todoList);

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

  it("searchForTodoTitle gets items by title", done => {
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
    mock.onGet("todos/search?title=My second note").reply(200, todoList);
    searchForTodoListItem("My second note").then(res => {
      expect(res).toStrictEqual(todoList);
      done();
    })
  });

  it("updateTodoListItem by id and title", done => {

    mock.onPut('todos/1', {title: "My first note"}).reply(204);
    updateTodoListItem(1, "My first note").then(res => {
      expect(res.status).toStrictEqual(204);
      done();
    })
  });

  // it("createTodoListItem with title", done => {

  //   const todoItem = { title: "Hello world! Its a me" };

  //   mock.onPost('todos/',todoItem).reply(204);
  //   createTodoListItem(todoItem).then(res => {
  //     expect(res.status).toStrictEqual(204);
  //     done();
  //   })
  // });

  it("deleteTodoListItem by id", done => {

    const todoListItem =
      {
        id: 1,
        title: "My first note"
      };

    mock.onDelete('todos/1',todoListItem).reply(204);
    deleteTodoListItem(1).then(res => {
      expect(res.status).toStrictEqual(204);
      done();
    })
  });

});

describe("DeletedTodos", () => {

  it("recieveDeletedTodoList gets all todo items", done => {
    const deleteTodoList = [
      {
        id: 1,
        title: "My first Delete note"
      },
      {
        id: 2,
        title: "My second Delete note"
      }
    ];

    mock.onGet("deletedtodos/").reply(200, deleteTodoList);

    recieveDeletedTodoList().then(res => {
      expect(res).toBe(deleteTodoList);
      done();
    });
  });
  
  it("recoverTodoListItem gets item by id", done => {
    const todoListItem =
      {
        id: 1,
        title: "My first note"
      };

    mock.onGet("todos/recover/1").reply(200, todoListItem);

      recoverTodoListItem(1).then(res => {
      expect(res).toStrictEqual(todoListItem);
      done();
    });
  });

});