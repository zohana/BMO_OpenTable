import React from "react";

const InputTextField = (props) => {
  const { value, onChangeValue, inputClass, placeholder } = props;
  return (
    <React.Fragment>
      <input
        type="text"
        value={value}
        onChange={onChangeValue}
        className={inputClass}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export default InputTextField;
