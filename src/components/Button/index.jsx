import PropTypes from "prop-types";
import React from "react";

const Button = ({
  className,
  color,
  disabled,
  onClick,
  text,
  type,
  variant,
  ...rest
}) => {
  let colorClass = "";
  switch (color) {
    case "secondary":
      colorClass = "secondary";
      break;
    case "success":
      colorClass = "success";
      break;
    case "danger":
      colorClass = "danger";
      break;
    case "warning":
      colorClass = "warning";
      break;
    case "info":
      colorClass = "info";
      break;
    case "light":
      colorClass = "light";
      break;
    case "dark":
      colorClass = "dark";
      break;
    default:
      colorClass = "primary";
      break;
  }

  let variantClass = "";
  switch (variant) {
    case "outlined":
      variantClass = "btn-outline";
      break;
    default:
      variantClass = "btn";
      break;
  }

  const buttonClassName = `btn ${variantClass}-${colorClass} ${className}`;

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "danger",
    "dark",
    "info",
    "light",
    "primary",
    "secondary",
    "success",
    "warning"
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["contained", "outlined"])
};

Button.defaultProps = {
  className: "",
  color: "primary",
  disabled: false,
  onClick: () => {},
  type: "button",
  variant: "contained"
};

export default Button;
