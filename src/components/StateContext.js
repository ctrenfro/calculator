import React, { createContext, useState, useContext } from "react";
import { evaluate } from "mathjs";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", ".", "%"];

  const acButton = () => {
    setCalc("");
    setResult("");
  };

  const clearEntry = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc((calc) => calc + value);

    if (!ops.includes(value)) {
      setResult(evaluate(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(evaluate(calc).toString());
  };

  return (
    <Context.Provider
      value={{
        calc,
        setCalc,
        result,
        setResult,
        acButton,
        calculate,
        updateCalc,
        clearEntry,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
