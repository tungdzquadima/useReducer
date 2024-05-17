import { useReducer } from "react";
const reducer = (state, action) => {
  console.log(state, action);
  switch (action) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "RESET":
      return 0;
    default:
  }
};
function Usereducer() {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <div>Kết quả: {counter}</div>
        <button
          onClick={() => {
            dispatch("UP");
          }}
        >
          UP
        </button>
        <button
          onClick={() => {
            dispatch("DOWN");
          }}
        >
          DOWN
        </button>
        <button
          onClick={() => {
            dispatch("RESET");
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
}
export default Usereducer;
