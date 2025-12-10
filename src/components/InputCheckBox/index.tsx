import clsx from "clsx";
import { useId } from "react";

type InputCheckBoxProps = {
  type?: "checkbox";
  labelText?: string;
} & React.ComponentProps<"input">;

export function InputText({
  labelText,
  type = "checkbox",
  ...props
}: InputCheckBoxProps) {
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <input
        {...props}
        id={id}
        type={type}
        className={clsx(
          "w-4 h-4 outline-none focus:ring-2 focus:ring-blue-500",
          props.className
        )}
      />

      {labelText && (
        <label htmlFor={id} className="text-sm">
          {labelText}
        </label>
      )}
    </div>
  );
}
