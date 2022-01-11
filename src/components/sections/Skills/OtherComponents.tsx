interface SkillProps {
  name: string;
  className: string;
}

const Skill: React.FC<SkillProps> = (props) => {
  return (
    <div className={`${props.className} border shadow-2xl px-5 py-2 rounded-lg m-2 hover:shadow-4xl skill`}>
      <h1>{props.name}</h1>
    </div>
  );
};

export { Skill };
