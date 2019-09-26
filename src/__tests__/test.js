import instance from "../utilities/Axios";
import MockAdapter from "axios-mock-adapter";

import { retrieveTodoList } from "../services/todoService";

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

    mock.onGet("todos").reply(200, todoList);

    retrieveTodoList().then(res => {
      // console.log(`res ${JSON.stringify([res])}`);
      expect(res).toBe([]);
      done();
    });
  });
});
