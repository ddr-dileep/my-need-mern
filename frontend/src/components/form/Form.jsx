/* eslint-disable react/prop-types */
import Button from "../button/Button";
import InputField from "../input/Input";

const Form = ({
  fields,
  formButtonIcon = false,
  formButtonDisable = false,
  formButtonText = "Submit",
  handleSubmit,
  formValues,
  handleInputChange,
  formButton = true,
  formButtonClass,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {fields?.map((item) => {
        return (
          <InputField
            key={item?.id + "-" + item?.name}
            name={item?.name}
            id={item?.id}
            type={item?.type}
            placeholder={item?.placeholder}
            value={formValues[item?.name] || ""}
            label={item?.label}
            onChange={handleInputChange}
            required={item?.required}
            disabled={item?.disabled}
          />
        );
      })}
      {formButton && (
        <Button
          className={formButtonClass}
          icon={formButtonIcon}
          disabled={formButtonDisable}
        >
          {formButtonText}
        </Button>
      )}
    </form>
  );
};

export default Form;
