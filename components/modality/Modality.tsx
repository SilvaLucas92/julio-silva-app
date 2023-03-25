import { Text } from "@@//@ui/paragraps/Text";
import { Container } from "@@//@ui/section-container/Container";
import { Subtitle } from "@@//@ui/titles/Subtitle";
import { Steps } from "../terapy/utils";

export const Modality = () => {
  return (
    <Container id="therapy-modality">
      <div className="flex flex-col gap-10">
        <div className=" flex flex-col gap-2">
          <Subtitle subtitle="Modalidad de Terapia" />
          <Text>
            <>
              El proceso terapéutico consta de tres etapas: Evaluación,
              Tratamiento y Seguimiento. Cada una de ellas cumple una función
              específica en el abordaje de los problemas que aquejan al
              consultante, y juntas conforman un camino hacia la solución y
              prevención de futuros malestares
            </>
          </Text>
        </div>
        <div className="lg:flex gap-5">
          {Steps.map((item) => (
            <article key={item.id} className="w-full p-2 rounded shadow-lg">
              <h2 className="text-3xl font-bold opacity-75">{item.step}</h2>
              <div className="flex items-center gap-5">
                <span
                  // className="text-xl font-medium opacity-75"
                  className="rounded font-semibold text-gray-600"
                >
                  {item.title}
                </span>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <p className="text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};
