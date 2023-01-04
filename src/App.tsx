import React from "react";
import "./styles.css";
import ComponentWithInput from "./ComponentWithIput";

const arrayData = ["First One", "Second One", "Third One", "Four One"];
const numberData = 1234567;
const stringData = "Test the component";

export default function App() {
  return (
    <div className="App">
      <h1>Component with `input` props</h1>
      <h4>
        Create a React component that accepts an &quot;input&quot; prop. If the
        &quot;input&quot; prop is falsy, render a live-updating date and time
        that updates every second. If the &quot;input&quot; prop is an array,
        render the array&lsquo;s elements in a list. If the &quot;input&quot;
        prop is anything else, render the value in a . Provide a CodeSandbox
        link
      </h4>
      <div className="example">
        Component with `false` : <ComponentWithInput input={false} />
      </div>
      <div className="example">
        Component with `&quot;&quot;` : <ComponentWithInput input={""} />
      </div>
      <div className="example">
        Component with `null` : <ComponentWithInput input={null} />
      </div>
      <div className="example">
        Component with `undefined` : <ComponentWithInput input={undefined} />
      </div>
      <div className="example">
        Component with `arrayData` : <ComponentWithInput input={arrayData} />
      </div>
      <div className="example">
        Component with `number ${numberData}` :{" "}
        <ComponentWithInput input={numberData} />
      </div>
      <div className="example">
        Component with `string &quot;{stringData}&quot;` :
        <ComponentWithInput input={stringData} />
      </div>
    </div>
  );
}
