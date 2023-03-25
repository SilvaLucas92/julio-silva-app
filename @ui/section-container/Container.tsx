interface ContainerProps {
  id: string;
  children: JSX.Element;
  paddingTop?: number;
}

export const Container = ({ id, children, paddingTop }: ContainerProps) => {
  const containerStyle = `pt-${paddingTop} mx-auto md:px-10 lg:w-3/4`;
  console.log(containerStyle);
  return (
    <section
      id={id}
      className={`mx-auto p-2 md:px-10 lg:w-3/4`}
    >
      {children}
    </section>
  );
};
