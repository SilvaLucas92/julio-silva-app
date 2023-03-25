import { Text } from "@@//@ui/paragraps/Text";
import { Title } from "@@//@ui/titles/Title";
import { Container } from "../../@ui/section-container/Container";

export const AboutMe = () => {
  return (
    <Container id="about-me" paddingTop={2}>
      <div className="py-5">
        <Title title="Psicologo Clinico" />
        <div className="my-5">
          <Text>
            <>
              Movilizado por deseo de acompañar a las personas a lograr una
              mejor calidad de vida, atiendo en centros de salud integrales y en
              mi consultorio privado. Me gusta leer, escribir y el cine.
              <br></br>
              {/* Convencido de que siempre en el problema, se encuentra la
              solución. */}
              Convencido de que siempre en el problema, se encuentra la
              solución, mi enfoque terapéutico se basa en la terapia sistémica.
              Este enfoque psicoterapéutico se enfoca en el estudio y la
              intervención en las interacciones que se dan en todo tipo de
              vínculos, como las relaciones familiares, de pareja, de amistad,
              de trabajo, de estudio, entre otras. Las técnicas utilizadas están
              orientadas a la solución de problemas en el menor tiempo posible,
              teniendo como objetivo el cambio terapéutico.
            </>
          </Text>
        </div>
      </div>
    </Container>
  );
};
