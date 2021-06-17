import React from "react";
import "./styles.css";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  title: string;
}

const PasswordInput: React.FC<Props> = ({ title, ...rest }) => {
  const [password, setPassword] = React.useState(true);
  const ICON_URL =
    "https://i.pinimg.com/originals/98/c2/17/98c217378823c11f1273951487f3cf74.jpg";
  const toggleHide = () => {
    setPassword((old) => !old);
  };

  return (
    <div className="field">
      <label>{title}</label>
      <div className="input_container">
        <input
          type={password ? "password" : "text"}
          placeholder={rest.placeholder}
          {...rest}
        />
        <button className="button_input" type="button" onClick={toggleHide}>
          <img src={ICON_URL} alt="EYE" />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
