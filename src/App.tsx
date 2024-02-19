import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import { useState } from "react";
import UsingUseMemo from "./use-memo/use-memo";
import ChunkingAndCodeSpliting from "./chunking-and-code-splitting/ChunkingAndCodeSpliting";

function App() {
  const USE_MEMO_EXAMPLE: number = 0;
  const USE_LAZY_COMPONENT: number = 1;

  const [activeTab, setActiveTab] = useState<number>(USE_LAZY_COMPONENT)

  return (
    <div className="container p-2">
      <ul className="nav nav-tabs">
        <li className=" nav-link nav-item"
          onClick={() => setActiveTab(USE_LAZY_COMPONENT)}>
          <div className="">
            Lazy Componet
          </div>
        </li>

        <li className=" nav-link nav-item"
          onClick={() => setActiveTab(USE_MEMO_EXAMPLE)}>
          <div className="active">useMemo </div>
        </li>

      </ul>
      <div>
        {
          (() => {
            switch (activeTab) {
              case USE_MEMO_EXAMPLE:
                return <UsingUseMemo></UsingUseMemo>
              case USE_LAZY_COMPONENT:
                return <ChunkingAndCodeSpliting />
            }

          })()
        }
      </div>
    </div>
  );
}

export default App;
