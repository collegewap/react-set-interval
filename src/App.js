import { useEffect } from "react";

function App() {
  useEffect(() => {
    setInterval(() => {
      console.log("This message will appear after each second");
    }, 1000);
  }, []);

  return <div className="App"></div>;
}

export default App;
