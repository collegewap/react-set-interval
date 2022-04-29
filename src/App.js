import { useEffect } from "react";

function App() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("This message will appear after each second");
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="App"></div>;
}

export default App;
