import React from "react";
import Alert from "./Alert";

interface Props {
  children: String;
  color?: String;
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <div>
      <button type="button" onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </div>
  );
}

export default Button;
