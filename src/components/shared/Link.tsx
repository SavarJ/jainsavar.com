import "../../styles/Link.css";
interface LinkProps {
  link: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
  sameTab?: boolean;
}

const Link: React.FC<LinkProps> = (props) => {
  const style = `${props.color ? `link link-${props.color}` : "icon"} ${props.className}`;
  const isInternal = props.link.startsWith("/");

  if (isInternal) {
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
  }

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
