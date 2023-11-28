/* eslint-disable react/prop-types */

const Button = (props) => {
  const {
    type,
    className,
    varient = "primary",
    buttonSize = "lg",
    children,
    icon,
    disabled = false,
    onClick,
  } = props;

  return (
    <button
      type={type}
      className={`btn btn-${varient} btn-${buttonSize} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="d-flex gap-2 justify-content-center align-item-center">
        <div
          className={`spinner-border ${!icon && "d-none"}`}
          role="status"
        ></div>
        {children}
      </div>
    </button>
  );
};

export default Button;
