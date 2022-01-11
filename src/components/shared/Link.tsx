interface LinkProps {
  link: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
  sameTab?: boolean;
}

const Link: React.FC<LinkProps> = (props) => {
  const style = `${props.color ? `link link-${props.color}` : "icon"} ${props.className}`;
  return (
    <a
      className={style}
      href={props.link}
      target={props.sameTab ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

export default Link;
