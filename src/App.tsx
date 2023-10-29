import Alert from "./component/Alert";
import ListGroup from "./component/ListGroup"; // . mean Current folder
import Button from "./component/Button";
import { useState } from "react";

// <ListGroup /> is the same as <ListGroup></ListGroup>
function App() {
  let items = ["New York", "Thailand", "Tokyo", "London", "Paris"];

  function handleSelectItem(item: string) {
    console.log(item);
  }

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> Alert!!! </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App; //Every component should be "Pascal case!"
