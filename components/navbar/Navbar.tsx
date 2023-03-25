import { ScrollLink } from "./Link";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="lg:w-3/4 py-8 mx-auto flex justify-between items-center md:px-10 p-5">
        <div className="flex gap-2">
          <span className="font-bold text-2xl">JULIO</span>
          <span className="font-bold text text-2xl"> SILVA</span>
        </div>
        <ScrollLink label="Contacto" />
      </nav>
    </header>
  );
};

export default Navbar;
