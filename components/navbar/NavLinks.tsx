import { Link } from "./Link";

const NavLinks = ({ opened, setOpen }: any) => {
  return (
    <>
      <nav className="flex items-center">
        <ul className="mx-auto flex gap-5">
          {/* <li>
            <Link label="Sobre mi" />
          </li>
          <li>
            <Link label="Terapia" />
          </li> */}
          <li>
            <Link label="Contacto" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
