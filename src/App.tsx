import { DndContext } from "@dnd-kit/core";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
import "./App.css";

function App() {
  return (
    <>
      <DndContext>
        <Draggable />
        <Droppable />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </DndContext>
    </>
  );
}

export default App;
