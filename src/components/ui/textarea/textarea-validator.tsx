import { type DetailedHTMLProps, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { type FieldErrors, type FieldValues, type Path, type UseFormRegister } from "react-hook-form";

interface TextAreaValidatorProps<FormData extends FieldValues> extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string;
  name: Path<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const TextAreaValidator = <FormData extends FieldValues>({ label, name, errors, register, ...rest }: TextAreaValidatorProps<FormData>) => {
  const error = errors?.[name]?.message as string | undefined;

  return (
    <div className="flex flex-col flex-1">
      <label className="block text-primary-label text-md font-bold mb-2" htmlFor={rest.id}>
        {label}
      </label>
      <textarea
        className={`border p-3 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full text-md
        ${error ? "border-red-500" : "border-zinc-300"}`}
        {...rest}
        {...register(name, { onChange: rest.onChange })}
      />
      <span className={`mt-1 text-sm select-none ${error ? "text-red-500" : "text-transparent"}`}>{error ?? "NULL"}</span>
    </div>
  );
};

export default TextAreaValidator;
