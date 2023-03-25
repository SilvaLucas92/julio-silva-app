interface ContainerProps {
  id: string;
  children: JSX.Element;
  paddingTop?: number;
}

export const Container = ({ id, children, paddingTop }: ContainerProps) => {
  return (
    <section id={id} className={"mx-auto p-5 md:px-10 lg:w-3/4 my-5"}>
      {children}
    </section>
  );
};
