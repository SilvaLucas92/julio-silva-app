import { Text } from "@@//@ui/paragraps/Text";
import { Container } from "@@//@ui/section-container/Container";
import { Subtitle } from "@@//@ui/titles/Subtitle";
import { Title } from "@@//@ui/titles/Title";

export const TherapyType = () => {
  return (
    <Container id="therapy-type">
      <>
        {/* <Subtitle subtitle="Tipo de terapia" /> */}
        <Text>
          <>
            {/* La terapia sistémica es un enfoque psicoterapéutico cuyo objeto de
            estudio y campo de intervención son las interacciones que se dan en
            todo tipo de vínculos: Familia, Pareja, Amistad, Trabajo, Estudio o
            cualquier otra relación o sistema donde circule algún tipo de
            intercambio. Las técnicas utilizadas están orientadas a la solución
            de problemas en el menor tiempo posible, teniendo como objetivo, el
            cambio terapéutico. */}
            Convencido de que siempre en el problema, se encuentra la solución,
            mi enfoque terapéutico se basa en la terapia sistémica. Este enfoque
            psicoterapéutico se enfoca en el estudio y la intervención en las
            interacciones que se dan en todo tipo de vínculos, como las
            relaciones familiares, de pareja, de amistad, de trabajo, de
            estudio, entre otras. Las técnicas utilizadas están orientadas a la
            solución de problemas en el menor tiempo posible, teniendo como
            objetivo el cambio terapéutico.
          </>
        </Text>
      </>
    </Container>
  );
};
