import instance from "../utilities/Axios";
import MockAdapter from "axios-mock-adapter";

import { retrieveTodoList, retrieveTodoListItem, searchToDoListItems } from "../services/todoService";

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
            //console.log(`res ${JSON.stringify(res)}`);
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
            //console.log(`res ${JSON.stringify(ref)}`);
            expect(res).toStrictEqual(todoListItem);
            done();
        });
    });

    it("searchToDoListItems gets items by searchTerm", done => {
        const searchForToDoListItem = 
        {
            searchTerm: 1
        };

        mock.onGet("todos/1").reply(200, searchForToDoListItem);

        retrieveTodoListItem(1).then(res => {
            //console.log(`res ${JSON.stringify(ref)}`);
            expect(res).toStrictEqual(searchForToDoListItem);
            done();
        });
    });
});