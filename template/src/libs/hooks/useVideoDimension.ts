import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useVideoDimension = (url: string) => {
  const [dimensions, setdimensions] = useState({
    height: 0,
    width: 0,
  });

  function updateVideoDimensions(this: HTMLVideoElement) {
    const height = this.videoHeight;
    const width = this.videoWidth;
    setdimensions({
      height,
      width,
    });
  }
  const updateDimensions = () => {
    const video = document.createElement('video');
    video.addEventListener('loadedmetadata', updateVideoDimensions, false);
    video.src = url;
  };
  useEffect(() => {
    updateDimensions();
  }, [url]);

  return dimensions;
};
