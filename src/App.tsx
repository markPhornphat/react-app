import Alert from "./component/Alert";
import ListGroup from "./component/ListGroup"; // . mean Current folder

// <ListGroup /> is the same as <ListGroup></ListGroup>
function App() {
  let items = ["New York", "Thailand", "Tokyo", "London", "Paris"];

  function handleSelectItem(item: string) {
    console.log(item);
  }
  return (
    <div>
      <Alert>Hello World!</Alert>
    </div>
  );
}

export default App; //Every component should be "Pascal case!"
