import { ReactNode } from "react";

interface Props {
  children: ReactNode; //To pass children props to component ไม่่ต้องประกาศยุ่งยาก เขียนเข้าไปใน HTML element เลย
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
