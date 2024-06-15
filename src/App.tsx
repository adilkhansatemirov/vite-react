import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
import "./App.css";

function App() {
  return (
    <>
      <DndContext>
        <Draggable>Draggable</Draggable>
        <Droppable>Some random text</Droppable>
        <p className="text-3xl font-bold underline">
          Click on the Vite and React logos to learn more
        </p>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/about" element={<div>about</div>} />
          </Routes>
        </BrowserRouter>
      </DndContext>
    </>
  );
}

export default App;
