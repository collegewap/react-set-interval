import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((oldValue) => oldValue + 1);
    }, 1000);
    return () => {
      console.log("clearing interval");
      clearInterval(intervalId);
    };
  }, []);

  return <div className="App">{counter}</div>;
}

export default App;
