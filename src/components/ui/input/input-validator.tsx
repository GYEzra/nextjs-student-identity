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
    <div className="flex flex-col flex-1 text-left">
      <label className="block text-primary-label text-md font-bold mb-2" htmlFor={rest.id}>
        {label}
        {required && <span className="text-red-500 mx-1">*</span>}
      </label>
      <input
        type="text"
        className={`h-12 border p-3 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full text-md
        ${error ? "border-red-500" : "border-zinc-300"}`}
        {...rest}
        {...register(name, { onChange: rest.onChange })}
      />
      <span className="mt-1 h-4 text-sm select-none text-red-500">{error ?? null}</span>
    </div>
  );
};

export default InputValidator;
