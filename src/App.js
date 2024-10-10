import { createContext, useState } from 'react';
import './App.css';
import { MyBook } from './Component/my-book/my-book';
import { TodoList } from './Component/todo-list/todo-list';
import { CleanUseEffect } from './Component/unit37/unit37';
import { UseRefHook } from './Component/unit39-useRef/unit39';
import Button from './Component/unit44-learn-css/Unit44';

export const BookContext = createContext();

function App() {
  const [state, setState] = useState({name: "book2", author: "Henry"})

  return (

    <BookContext.Provider value={state}>
    <div className="App">
      {/* <MyBook color="Red" name="Henry">Children 11</MyBook> */}
      {/* <TodoList></TodoList> */}

      {/* <CleanUseEffect></CleanUseEffect> */}

      {/* <UseRefHook></UseRefHook> */}
      <Button primary></Button>
      <Button warning></Button>
      <Button danger></Button>
      <Button disable></Button>
    </div>
    </BookContext.Provider>
  );
}

export default App;
