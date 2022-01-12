import { useEffect, useState } from 'react';
import { useVideoDimension } from './useVideoDimension';
import { useWindowSize } from './useWindowSize';

const GlobalConst = {
  EDITOR_BOX_PADDING: 30,
};

// eslint-disable-next-line import/prefer-default-export
export const usePlayerDimensionEffect = (
  container: HTMLDivElement | null,
  videoUrl: string
) => {
  const size = useWindowSize();
  const { height: videoHeight, width: videoWidth } = useVideoDimension(
    videoUrl
  );
  const [style, setstyle] = useState({
    height: '0px',
    width: '0px',
    top: '0',
    left: '0',
  });

  const maximizePlayerArea = () => {
    if (container) {
      const containerHeight =
        container.clientHeight - GlobalConst.EDITOR_BOX_PADDING;
      const containerWidth =
        container.clientWidth - GlobalConst.EDITOR_BOX_PADDING;
      const boxAspectRatio = containerWidth / containerHeight;
      const videoAspectRatio = videoWidth / videoHeight;
      if (videoAspectRatio <= boxAspectRatio) {
        const computedWidth = Math.round(
          (containerHeight * videoWidth) / videoHeight
        );
        setstyle({
          ...style,
          height: `calc(100% - ${GlobalConst.EDITOR_BOX_PADDING}PX)`,
          width: `${computedWidth}px`,
        });
      } else {
        const computedHeight = Math.round(
          (containerWidth * videoHeight) / videoWidth
        );
        setstyle({
          ...style,
          height: `${computedHeight}px`,
          width: `calc(100% - ${GlobalConst.EDITOR_BOX_PADDING}px)`,
        });
      }
    }
  };
  useEffect(() => {
    if (container) {
      maximizePlayerArea();
    }
  }, [videoUrl, videoHeight, videoWidth, size]);

  return style;
};
