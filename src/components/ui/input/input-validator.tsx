import { type DetailedHTMLProps, type InputHTMLAttributes } from "react";
import { type FieldErrors, type FieldValues, type Path, type UseFormRegister } from "react-hook-form";

interface InputValidatorProps<FormData extends FieldValues> extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  name: Path<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const InputValidator = <FormData extends FieldValues>({ label, name, errors, register, required, ...rest }: InputValidatorProps<FormData>) => {
  const [fieldName, index, subFieldName] = name.split(".");
  let error: string | undefined;

  if (Array.isArray(errors?.[fieldName]) && index && subFieldName) {
    const nestedErrors = errors?.[fieldName];
    const nestedError = nestedErrors[parseInt(index)];
    error = nestedError ? (nestedError[subFieldName]?.message as string) : undefined;
  } else {
    error = errors?.[fieldName]?.message as string | undefined;
  }

  return (
    <div className="flex flex-col flex-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={rest.id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        className={`border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full
        ${error ? "border-red-500" : "border-zinc-300"}`}
        {...rest}
        {...register(name, { onChange: rest.onChange })}
      />
      <span className={`mt-1 text-sm select-none text-red-500`}>{error}</span>
    </div>
  );
};

export default InputValidator;
