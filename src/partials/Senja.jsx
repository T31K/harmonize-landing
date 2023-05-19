import React, { useEffect } from 'react';

const Senja = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://widget.senja.io/embed/frame.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="senja-frame-embed"
      data-id="efc6418d-72f0-40bf-9a64-7a98d5678502"
    ></div>
  );
};

export default Senja;
