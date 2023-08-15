import React from "react";
const Fade = require("react-reveal/Fade");

const SelfLogo: React.FC = () => {
  return (
    <Fade duration={2000} delay={100}>
      <img src="/logo-no-background.png" alt="Savar-Jain" className="mb-4 w-1/4" />
    </Fade>
  );
};

export default SelfLogo;
