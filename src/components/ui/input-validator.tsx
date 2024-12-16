import { useHasMounted } from "@/utils/customHook";
import { type DetailedHTMLProps, type InputHTMLAttributes } from "react";
import {
    type FieldErrors,
    type FieldValues,
    type Path,
    type UseFormRegister,
} from "react-hook-form";

interface InputValidatorProps<FormData extends FieldValues>
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
    name: Path<FormData>;
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

const InputValidator = <FormData extends FieldValues>({
    label,
    name,
    errors,
    register,
    ...rest
}: InputValidatorProps<FormData>) => {
    const [fieldName, index, subFieldName] = name.split(".");
    let error: string | undefined;

    if (Array.isArray(errors?.[fieldName]) && index && subFieldName) {
        const nestedErrors = errors?.[fieldName];
        const nestedError = nestedErrors[parseInt(index)];
        error = nestedError ? nestedError[subFieldName]?.message as string : undefined;
    } else {
        error = errors?.[fieldName]?.message as string | undefined;
    }

    return (
        <div className="flex flex-col flex-1">
            <label
                className="block text-md font-medium leading-6 text-neutral-400"
                htmlFor={rest.id}
            >
                {label}
            </label>
            <input
                type="text"
                className={`mt-1 input input-bordered w-full leading-3 focus:ring-indigo-500 focus:border-indigo-500
        ${error ? "border-red-500" : "border-zinc-300"}`}
                {...rest}
                {...register(name, { onChange: rest.onChange })}
            />
            <span className={`mt-1 text-sm select-none ${error ? 'text-red-500' : 'text-transparent'}`}>{error ?? 'NULL'}</span>
        </div>
    );
};

export default InputValidator;