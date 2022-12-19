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
        Create a React component that accepts an "input" prop. If the "input"
        prop is falsy, render a live-updating date and time that updates every
        second. If the "input" prop is an array, render the array's elements in
        a list. If the "input" prop is anything else, render the value in a .
        Provide a CodeSandbox link
      </h4>
      <div className="example">
        Component with `false` : <ComponentWithInput input={false} />
      </div>
      <div className="example">
        Component with `""` : <ComponentWithInput input={""} />
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
        Component with `string "{stringData}"` :
        <ComponentWithInput input={stringData} />
      </div>
    </div>
  );
}
