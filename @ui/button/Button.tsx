const styleBtn = {
  filled:
    "block rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black border hover:border-black  ",
};
interface BtnProps {
  variant: string;
  children: JSX.Element;
}

interface StylesProps {
  filled: string;
}
export const Button = ({ variant, children }: BtnProps) => {
  return (
    <button className={styleBtn[variant as keyof StylesProps]}>
      {children}
    </button>
  );
};
