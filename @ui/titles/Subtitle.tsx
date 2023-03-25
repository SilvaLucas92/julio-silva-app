export const Subtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className="">
      <h2 className="font-medium text-xl my-2 md:my-0 md:w-1/4 opacity-75">
        {subtitle}
      </h2>
    </div>
  );
};
