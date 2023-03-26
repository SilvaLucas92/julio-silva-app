import clsx from "clsx";
import { useRef } from "react";

interface InputProps {
  label: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: any;
  type: string;
  error?: boolean;
  disabled?: boolean;
  valid?: boolean;
  rounded?: string;
}

interface StylesProps {
  base?: string;
  state?: {
    normal?: string;
    error?: string;
    valid?: string;
    disabled?: string;
  };
}

const styles = {
  base: "rounded-lg border-transparent flex-1 appearance-none border w-full py-2 px-3.5 bg-white text-gray-700  shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent",
  state: {
    normal: "placeholder-gray-400 border-gray-300 focus:ring-purple-600",
    error: "border-red-600 focus:ring-red-600",
    valid: "border-green-600 focus:ring-green-600",
    disabled: "cursor-not-allowed bg-gray-100 shadow-inner text-gray-400",
  },
};

export const Input = ({
  label,
  name,
  id,
  onChange,
  onBlur,
  type,
  error,
  disabled = false,
  valid = false,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-1">
      <label className="text-black" htmlFor={name}>
        {label}
      </label>
      {type === "text" ? (
        <input
          name={name}
          id={id}
          type="text"
          onChange={onChange}
          className={clsx([
            styles.base,
            error ? styles.state.error : styles.state.normal,
            valid ? styles.state.valid : styles.state.normal,
            disabled && styles.state.disabled,
          ])}
          onBlur={onBlur}
          ref={inputRef} // Asignar la referencia al input
          {...rest}
        />
      ) : (
        <textarea
          name={name}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          className={clsx([
            styles.base,
            error ? styles.state.error : styles.state.normal,
            valid ? styles.state.valid : styles.state.normal,
            disabled && styles.state.disabled,
          ])}
          {...rest}
          // ref={inputRef} // Asignar la referencia al input
        ></textarea>
      )}
    </div>
  );
};

export const ErrorMsg = ({ error }: { error: string }) => {
  return (
    <div>
      <p className="text text-red-500">{error}</p>
    </div>
  );
};

// export const Label = ({ required, name, label }) => {
//   return (
//     <div>
//       <label className="text-black" htmlFor={name}>
//         {label}
//       </label>
//       {required && <span>*</span>}
//     </div>
//   );
// };
