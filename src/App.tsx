import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./assets/components/ListItem";

interface Todo {
  id: string;
  task: string;
}

function App() {
  const [listTodo, setListToDo] = useState<Todo[]>([]);
  const [workTodo, setWorkTodo] = useState<string>("");

  const handleAdd = () => {
    if (!workTodo) {
      return alert("Điền thông tin");
    }
    setListToDo((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          task: workTodo,
        },
      ];
    });
    setWorkTodo("");
  };

  const handleDelete = (id: string) => {
    const result = listTodo.filter((item) => {
      return item.id !== id;
    });
    setListToDo(result);
  };

  const handleEdit = (id: string, task: string) => {
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <div className="container">
        <div className="header">
          <input
            type="text"
            name="value"
            value={workTodo}
            onChange={(e) => setWorkTodo(e.target.value)}
          />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className="content">
          <ul className="list-todo">
            {listTodo.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  id={item.id}
                  task={item.task}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
