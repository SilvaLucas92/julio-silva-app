export const NavIcon = ({ opened, setOpen }: any) => {
  const genericHamburgerLine = `h-1 w-5 bg-black transition ease transform duration-300`;
  return (
    <button
      className="flex flex-col h-10 w-10 justify-center items-center group md:hidden"
      onClick={() => setOpen(!opened)}
    >
      <div
        className={`${genericHamburgerLine} ${
          opened
            ? "rotate-45 translate-y-3  group-hover:opacity-100  my-1 rounded-xl "
            : " group-hover:opacity-100 my-0.25 rounded-xl "
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          opened ? "opacity-0 my-1" : " group-hover:opacity-100 my-1 rounded-xl"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          opened
            ? "-rotate-45 -translate-y-3  group-hover:opacity-100  my-1 rounded-xl"
            : " group-hover:opacity-100 my-0.25 rounded-xl"
        }`}
      />
    </button>
  );
};
