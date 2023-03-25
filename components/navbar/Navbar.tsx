import { useState } from "react";
import { Link } from "./Link";
import { NavIcon } from "./NavIcon";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-8 px-5 md:px-10 lg:w-3/4 mx-auto">
      <nav>
        <div className="mx-auto flex justify-between items-center align-center">
          <div className="flex gap-2">
            <span className="font-bold text-2xl">JULIO</span>
            <span className="font-bold text text-2xl"> SILVA</span>
          </div>
          <NavLinks opened={open} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
