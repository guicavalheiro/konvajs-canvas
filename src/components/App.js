import React from "react";

import Canvas from "./Canvas";
import RegionsList from "./RegionsList";

import useStore from "../store";
import { render } from "@testing-library/react";

function App(){
  const { setBrightness } = useStore();

  return (
    <React.Fragment>
      <h2>Image annotate prototype</h2>
      <p className="description">Draw objects conturs on top of the image</p>
      <div className="App">
        <div className="left-panel">
          Brigthess
          <input
            id="slider"
            type="range"
            min="-1"
            max="1"
            step="0.05"
            defaultValue="0"
            onChange={e => {
              setBrightness(parseFloat(e.target.value));
            }}
          />
          <RegionsList />
        </div>
        <div className="right-panel">
          <Canvas />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

render(<App />, document.getElementById('root'));
