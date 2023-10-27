function Message() {
  //JSX: JavaScript XML
  const name = 'Mark';
  if(name) //If name exists(not empty string!)
  {
    return <h1>Hello {name}</h1>;
  }
  else
  {
    return <h1>Hello world!</h1>;
  }
}

export default Message;