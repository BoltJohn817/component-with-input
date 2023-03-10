import React, { useState, useRef, useEffect } from "react";
import { formatDate } from "./utils";

interface IComponentProps {
  input: unknown;
}

const ComponentWithInput = ({ input }: IComponentProps): JSX.Element | null => {
  const timerId = useRef<ReturnType<typeof setInterval>>();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (!input) {
      timerId.current = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
    }
    return () => {
      if (!input) {
        clearInterval(timerId.current);
      }
    };
  }, [input]);

  const renderArray = (array: Array<Record<string, unknown>>) => (
    <ul>
      {array.map((item, index) => (
        <li key={`item-${index}`}> {JSON.stringify(item)} </li>
      ))}
    </ul>
  );

  const renderFunction = () =>
    !input
      ? formatDate(currentDate)
      : Array.isArray(input)
      ? renderArray(input)
      : JSON.stringify(input);

  return (
    <div className="target-component" data-testid="component-with-input">
      {renderFunction()}
    </div>
  );
};

export default ComponentWithInput;
