import { Text } from "@@//@ui/paragraps/Text";
import { Title } from "@@//@ui/titles/Title";
import { Container } from "../../@ui/section-container/Container";

export const AboutMe = () => {
  return (
    <Container id="about-me" paddingTop={2}>
      <div className="py-5 flex flex-col gap-2">
        <Title title="Psicologo Clinico" />
        <div className="opacity-75 italic ">
          <p>
            Convencido de que siempre en el problema, se encuentra la solución.
          </p>
        </div>
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
