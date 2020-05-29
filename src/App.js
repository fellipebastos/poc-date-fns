import React, { useState, useCallback } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';

import Hello from "./pages/Hello";
import Format from "./pages/Format";
import Check from "./pages/Check";
import List from "./pages/List";
import Bye from "./pages/Bye";

const animations = [
  'foldOutAnimation',
  'scaleOutAnimation',
  'cubeAnimation',
  'openAnimation',
  'fallAnimation',
];

function App() {
  const [animation, setAnimation] = useState('');

  const randomizeAnimation = useCallback(() => {
    if (!animation) {
      setAnimation('fallAnimation');
    } else {
      const currentAnimation = animations[Math.floor(Math.random() * animations.length)];
      setAnimation(currentAnimation);
    }
  }, [animation]);

  return (
    <AwesomeSlider
      animation={animation}
      bullets={false}
      fillParent={true}
      infinite={false}
      onTransitionRequest={() => randomizeAnimation()}>
        <div><Hello /></div>
        <div><Format /></div>
        <div><Check /></div>
        <div><List /></div>
        <div><Bye /></div>
    </AwesomeSlider>
  );
}

export default App;
