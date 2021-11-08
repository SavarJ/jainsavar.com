interface LinkProps {
  link: string;
  children: React.ReactNode;
  color?: string;
}
const Link: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default Link;
