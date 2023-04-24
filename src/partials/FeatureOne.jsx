import React, { useState, useRef } from 'react';
import FullscreenGif from '../images/fullscreen.gif';
import { SlEyeglass } from 'react-icons/sl';
function FeatureOne() {
  const videoRef = useRef(null);
  const [videoControls, setVideoControls] = useState(true);
  const playVideo = () => {
    setVideoControls(false);
    videoRef.current.play();
  };

  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <SlEyeglass className="text-7xl inline-block text-center mb-3" />
            <div className="flex justify-center">
              <h1 className="h2 mb-4 mr-5 ">Stay focused</h1>
            </div>
            <p className="text-xl text-gray-600">Control your music without ever leaving fullscreen mode</p>
          </div>

          <div className="flex flex-wrap my-3">
            <img
              src={FullscreenGif}
              className="rounded-2xl mx-auto w-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureOne;
