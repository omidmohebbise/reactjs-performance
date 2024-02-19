import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import { useReducer, useState } from "react";
import UsingUseMemo from "./use-memo/use-memo";

function App() {
  const USE_MEMO_EXAMPLE: number = 0;
  const [activeTab, setActiveTab] = useState<number>(USE_MEMO_EXAMPLE)
  
  return (
    <div className="container p-2">
      <ul className="nav nav-tabs">
        <li className=" nav-link nav-item"
          onClick={() => setActiveTab(USE_MEMO_EXAMPLE)}>
          <div className="active">useMemo </div>
        </li>
        <li className=" nav-link nav-item"
          onClick={() => setActiveTab(USE_MEMO_EXAMPLE)}>
          <div className="">
            Other
          </div>
        </li>
      </ul>
      <div>
        {
          (() => {
            switch (activeTab) {
              case USE_MEMO_EXAMPLE:
                return <UsingUseMemo></UsingUseMemo>
            }

          })()
        }
      </div>
    </div>
  );
}

export default App;
