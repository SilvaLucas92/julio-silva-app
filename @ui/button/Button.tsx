interface BtnProps {
  variant: string;
  children: JSX.Element;
  width?: string;
}

export const Button = ({ children, width }: BtnProps) => {
  return (
    <button
      className={`w-${
        width ? width : "auto"
      } block rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black border hover:border-black  `}
    >
      {children}
    </button>
  );
};
