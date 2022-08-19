import React from "react";
import { useStateContext } from "./StateContext";

const Calculator = () => {
  const { calc, calculate, acButton, updateCalc, result, clearEntry } =
    useStateContext();

  return (
    <div className="calculator">
      <p className="title">Calculator App</p>
      <div className="screen">
        <div>{result ? <span>{result}</span> : ""}</div>
        {calc || "0"}
      </div>
      <div className="buttons">
        <div className="buttonRow">
          <button
            type="button"
            className="button operators"
            onClick={() => updateCalc("(")}
          >
            (
          </button>
          <button
            type="button"
            className="button operators"
            onClick={() => updateCalc(")")}
          >
            )
          </button>
          <button
            type="button"
            className="button operators"
            onClick={() => updateCalc("%")}
          >
            %
          </button>
          {calc ? (
            <button
              type="button"
              className="button operators"
              onClick={clearEntry}
            >
              CE
            </button>
          ) : (
            <button
              type="button"
              className="button operators"
              onClick={acButton}
            >
              AC
            </button>
          )}
        </div>
        <div className="buttonRow">
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("1")}
          >
            1
          </button>
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("2")}
          >
            2
          </button>
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("3")}
          >
            3
          </button>
          <button
            type="button"
            className="button operators"
            onClick={() => updateCalc("/")}
          >
            /
          </button>
        </div>
        <div className="buttonRow">
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("4")}
          >
            4
          </button>
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("5")}
          >
            5
          </button>
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("6")}
          >
            6
          </button>
          <button
            type="button"
            className="button operators"
            onClick={() => updateCalc("*")}
          >
            *
          </button>
        </div>
        <div className="buttonRow">
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("7")}
          >
            7
          </button>
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("8")}
          >
            8
          </button>
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("9")}
          >
            9
          </button>
          <button
            type="button"
            className="button operators"
            onClick={() => updateCalc("-")}
          >
            -
          </button>
        </div>
        <div className="buttonRow">
          <button
            type="button"
            className="button"
            onClick={() => updateCalc("0")}
          >
            0
          </button>
          <button
            type="button"
            className="button "
            onClick={() => updateCalc(".")}
          >
            .
          </button>
          <button type="button" className="button " onClick={() => calculate()}>
            =
          </button>
          <button
            type="button"
            className="button operators"
            onClick={() => updateCalc("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
