import { Text } from "@@//@ui/paragraps/Text";
import { Title } from "@@//@ui/titles/Title";
import { Container } from "../../@ui/section-container/Container";

export const AboutMe = () => {
  return (
    <Container id="about-me">
      <div className="py-5 flex flex-col gap-2">
        {/* <Title title="Psicologo Clinico" /> */}
        <div className="flex gap-1">
          <span className="text-3xl text-grayTitle font-bold">Psicologo</span>
          <span className="text-3xl text-black font-bold">Clinico</span>
        </div>
        <h4 className="text-black opacity-75">mt 44444</h4>

        <p className="text-black italic ">
          &rsquo; Convencido de que siempre en el problema, se encuentra la
          solución. &lsquo;
        </p>
        <div className="">
          <Text>
            <>
              Movilizado por deseo de acompañar a las personas a lograr una
              mejor calidad de vida, atiendo en centros de salud integrales y en
              mi consultorio privado. Me gusta leer, escribir y el cine.
              <br></br>
            </>
          </Text>
        </div>
      </div>
    </Container>
  );
};
