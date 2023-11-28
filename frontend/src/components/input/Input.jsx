/* eslint-disable react/prop-types */

const InputField = ({
  type = "text",
  id = "input-field",
  className,
  placeholder,
  name,
  value,
  onChange,
  label,
  required = false,
  disabled = false,
}) => {
  return (
    <>
      <div className={`form-floating mb-3 ${className}`}>
        <input
          type={type}
          name={name}
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
};

export default InputField;
