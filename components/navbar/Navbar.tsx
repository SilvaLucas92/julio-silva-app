import { Button } from "@@//@ui/button/Button";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { ScrollLink } from "./Link";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="lg:w-3/4 py-8 mx-auto flex justify-between items-center md:px-10 p-5">
        <div className="flex gap-2">
          <span className="font-bold text-2xl text-black">JULIO</span>
          <span className="font-bold text-2xl text-black"> SILVA</span>
        </div>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={100}
          duration={1000}
        >
          <Button variant="filled">
            <div className="flex items-center gap-1">
              <span>Contacto</span>
              <IconArrowNarrowRight />
            </div>
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
