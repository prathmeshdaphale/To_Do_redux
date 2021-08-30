import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./counterSlice";

export default function Todo() {
  const [step, setStep] = useState("");
  const [stepd, setStepd] = useState("");
  const [stepdt, setStepdt] = useState("");
  const disp = useDispatch();
  const state = useSelector((state) => state.counterSlice);

  // const state = useSelector((state) => state.counterSlice);
  return (
    <>
      <div className="top">
        <input
          className="text"
          type="text"
          placeholder="Task Name"
          onChange={(e) => setStep(e.target.value)}
        />
        <input
          className="disc"
          type="text"
          placeholder="Task Discription"
          onChange={(e) => setStepd(e.target.value)}
        />
        <input
          className="date"
          type="date"
          onChange={(e) => setStepdt(e.target.value)}
        />
        <button
          className="button"
          onClick={() => {
            disp(add({ n: step, disc: stepd, dt: stepdt }));
          }}
        >
          Task Add
        </button>
        {console.log(state)}
      </div>
    </>
  );
}
