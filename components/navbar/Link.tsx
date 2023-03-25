export const ScrollLink = ({ label }: any) => {
  return (
    <p>
      {label}
      <span className="px-2" aria-hidden="true">
        &rarr;
      </span>
    </p>
  );
};
