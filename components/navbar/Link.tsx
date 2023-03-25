export const ScrollLink = ({ label }: any) => {
  return (
    <button className="block  rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black border   hover:border-black">
      {label}
      <span className="px-2" aria-hidden="true">
        &rarr;
      </span>
    </button>
  );
};
