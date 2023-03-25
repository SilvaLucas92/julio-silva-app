import { Text } from "@@//@ui/paragraps/Text";
import { Container } from "@@//@ui/section-container/Container";
import { Subtitle } from "@@//@ui/titles/Subtitle";
import { Steps } from "../terapy/utils";

export const Modality = () => {
  return (
    <Container id="therapy-modality">
      <div className="flex flex-col gap-8">
        <div className=" flex flex-col gap-2">
          <Subtitle subtitle="Proceso Terapeutico" />
          {/* <Text>
            <>
              El proceso terapéutico consta de tres etapas: Evaluación,
              Tratamiento y Seguimiento. Evaluación,
              Tratamiento y Seguimiento.
            </>
          </Text> */}
        </div>
        <div className="lg:flex-row flex flex-col gap-5 gap-5">
          {Steps.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-2 w-full p-8 border rounded-lg hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold">{item.step}</h2>
              <div className="flex items-center gap-5">
                <span className="rounded font-semibold opacity-75">
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
