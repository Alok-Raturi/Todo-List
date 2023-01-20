import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header, InputComp, List, Buttons, Footer } from "./Components";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Items")) === null
      ? []
      : JSON.parse(localStorage.getItem("Items"))
  );

  useEffect(() => {
    console.log("Hello");
    localStorage.setItem("Items", JSON.stringify(items));
  }, [items]);

  const onAddingItem = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      const item = {
        id: uuidv4(),
        Task: e.target[0].value,
        checked: false,
      };
      e.target[0].value = "";
      setItems([...items, item]);
    }
  };

  const onDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onChecked = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) item.checked = !item.checked;
        return item;
      })
    );
  };

  const onEdit = (id, Task) => {
    setItems(
      items.map((item) => {
        if (item.id === id) item.Task = Task;
        return item;
      })
    );
  };

  const checkAll = () => {
    setItems(
      items.map((item) => {
        item.checked = true;
        return item;
      })
    );
  };

  const uncheckAll = () => {
    setItems(
      items.map((item) => {
        item.checked = false;
        return item;
      })
    );
  };

  return (
    <div className="app">
      <Header />
      <main className="content">
        <InputComp onAddingItem={onAddingItem} />
        <List
          items={items}
          onDelete={onDelete}
          onChecked={onChecked}
          onEdit={onEdit}
        />
        <Buttons items={items} CheckAll={checkAll} uncheckAll={uncheckAll} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
