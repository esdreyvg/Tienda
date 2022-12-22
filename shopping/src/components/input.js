import React, { useReducer, useEffect } from "react";
import inputReducer from "../redux/reducers/input";

export default function inputForms(props) {
  const [inputState, dispatch] = useReducer(inputReducer, { value: "" });

  const { id, onInput } = props;
  const { value } = inputState;

  useEffect(() => {
    onInput(id, value);
  }, [id, onInput, value]);

  const handleChange = (event) => {
    dispatch({ type: "CHANGE", payload: event.target.value });
  };
  const element =
    props.element === "input" ? (
      <input
        id={id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={props.rows || 3}
        onChange={handleChange}
        value={inputState.value}
      />
    );

  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      {element}
    </div>
  );
}
