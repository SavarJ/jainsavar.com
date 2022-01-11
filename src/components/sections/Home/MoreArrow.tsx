const Fade = require("react-reveal/Fade");

interface MoreArrowProps {
  selfSocialsDone: boolean;
}
const MoreArrow: React.FC<MoreArrowProps> = (props) => {
  return (
    <Fade top delay={500} when={props.selfSocialsDone}>
      <div className="arrow-container" id="arrow">
        <a href="#arrow">
          <div className="arrow arrow-1"></div>
          <div className="arrow arrow-2"></div>
          <div className="arrow arrow-3"></div>
        </a>
      </div>
    </Fade>
  );
};

export default MoreArrow;
