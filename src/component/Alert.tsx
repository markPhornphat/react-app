import { ReactNode } from "react";

interface Props {
  children: ReactNode; //To pass children props to component ไม่่ต้องประกาศยุ่งยาก เขียนเข้าไปใน HTML element เลย
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
