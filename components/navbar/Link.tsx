export const Link = ({ label }: any) => {
  return (
    <div>
      {/* <button className="font-medium text-xl cursor-pointer hover:bg-gray-100 active:bg-gray-100 focus:outline-none  rounded-xl p-2">
        {label}
      </button> */}
      <a
        href="#"
        className="font-medium text-xl cursor-pointer hover:bg-gray-100 active:bg-gray-100 focus:outline-none  rounded-xl p-2"
      >
        {label}
        <span className="px-2" aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
};
