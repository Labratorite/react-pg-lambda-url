import TryLambdaUrlButton from "./components/TryLambdaUrlButton";
import logger from "./logger";
import "./styles.css";

export default function App() {
  logger.info("App", "RE-RENDER");
  return (
    <div className="App">
      <TryLambdaUrlButton />
    </div>
  );
}
