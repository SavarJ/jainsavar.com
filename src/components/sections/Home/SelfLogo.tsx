import React, { Suspense } from "react";
const Logo = React.lazy(() => import("../../icons/Logo"));
const Fade = require("react-reveal/Fade");

const SelfLogo: React.FC = () => {
  return (
    <Fade duration={2000} delay={100}>
      <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
        <Logo className="mb-2" />
      </Suspense>
    </Fade>
  );
};

export default SelfLogo;
