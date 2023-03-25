import { Text } from "@@//@ui/paragraps/Text";
import { Subtitle } from "@@//@ui/titles/Subtitle";
import { Title } from "@@//@ui/titles/Title";
import { Container } from "../../@ui/section-container/Container";
import { therapyJob } from "./utils";

export const Therapy = () => {
  return (
    <section className={`p-2 md:px-10 mx-auto lg:w-3/4`}>
      <div>
        {therapyJob.map((item) => (
          <div key={item.id} className="md:flex md:my-5 gap-10 w-full">
            <h2 className="font-normal text-xl  my-2 md:my-0 md:w-1/4">
              {item.title}
            </h2>
            <p className="opacity-75 md:w-3/4">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
