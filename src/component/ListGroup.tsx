import { MouseEvent, useState } from "react"; //useState ==> To tell the react that this variable is change over time

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //Send the function in and return void
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //React application => "PascalCasing"
  // items.map(item => <li> {item} </li> ) สั่งให้ item แต่ละไอ item เปลี่ยนเป็น format <li> {element in array} </li>
  //                      Note! React ต้องการให้เรา keep track list each item --> ใส่ key เข้าไป ในแต่ละ element (line: 14)
  const message = items.length === 0 ? <p>No item found!</p> : null;

  function getMessage() {
    return items.length === 0 ? <p>No item found!</p> : null;
  }
  /* 
  const getMessage = () => {      เป็นการ call function แบบเดียวกับข้างบนเด๊ะ --> แต่ เรียกว่า Arrow function not function declaration
    return items.length === 0 ? <p>No item found!</p> : null;
  }
  */

  const handleClick = (event: MouseEvent) => console.log(event); //Event handler

  /* State Hook!
    const arr = useState(-1);  //It will return two array
    arr[0] //variable (selectedIndex)
    arr[1] //Updater function
  */
  const [selectedIndex, setSelectedIndex] = useState(-1); //selectedIndex is variable,  setSelectedIndex is updater

  // To enable JavaScript in JSX --> {**** JavaScript Code *****} ใส่ Brace ครอบ JS code
  //ถ้าจะใส่ <h1></h1> --> ต้องใส่ <div> หรือ ( <fragment> or <> </> ) ครอบลงไปด้วย
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found!</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
