const Fade = require("react-reveal/Fade");

interface MoreArrowProps {
  selfSocialsDone: boolean;
}
const MoreArrow: React.FC<MoreArrowProps> = (props) => {
  return (
    <Fade top delay={500} when={props.selfSocialsDone}>
      <div className="arrow-container" id="arrow">
        <a href="#arrow">
          <div className="arrow arrow-1 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"></div>
          <div className="arrow arrow-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"></div>
          <div className="arrow arrow-3 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"></div>
        </a>
      </div>
    </Fade>
  );
};

export default MoreArrow;
