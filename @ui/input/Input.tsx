interface InputProps {
  label: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: any;
  type: string;
  error?: boolean;
}

export const Input = ({
  label,
  name,
  id,
  onChange,
  onBlur,
  type,
  error,
}: InputProps) => {
  const errorClass =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 rounded-lg block w-full  py-2 px-3.5";
  const normalClass = "border border-b block w-full rounded-lg  py-2 px-3.5";
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      {type === "text" ? (
        <input
          name={name}
          id={id}
          type="text"
          onChange={onChange}
          className={error ? errorClass : normalClass}
          onBlur={onBlur}
        />
      ) : (
        <textarea
          name={name}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? errorClass : normalClass}
        ></textarea>
      )}
    </div>
  );
};
