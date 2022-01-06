interface ComponentProps {
  children: React.ReactNode;
  class?: string;
}
const FullSection: React.FC<ComponentProps> = (props) => {
  const className = `text-blue-200 h-screen ${props.class}`;
  return <section className={className}>{props.children}</section>;
};

const NormalSection: React.FC<ComponentProps> = (props) => {
  const className = `text-blue-200 ${props.class}`;
  return <section className={className}>{props.children}</section>;
};

const SectionTitle: React.FC<ComponentProps> = (props) => {
  const className = `text-5xl text-blue-200 font-bold ${props.class}`;
  return (
    <h1 className={className} style={{ color: "#19B5FE" }}>
      {props.children}
    </h1>
  );
};

const SectionBody: React.FC<ComponentProps> = (props) => {
  const className = `max-w-3xl text-gray-400 mt-8 ${props.class}`;
  return <div className={className}>{props.children}</div>;
};

export { FullSection, SectionTitle, SectionBody, NormalSection };
