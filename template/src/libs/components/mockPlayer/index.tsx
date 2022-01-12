/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { MOCK_VIDEO_URL } from "../../utils/constants";
export type PlayerProps = {
  url: string;
};

export const Player = React.forwardRef<HTMLVideoElement, PlayerProps>(
  ({ url }, ref) => (
    <div>
      <video
        ref={ref}
        id="nexweave-player"
        width="100%"
        controls
        disablePictureInPicture
        controlsList="nodownload nofullscreen"
      >
        <source src={url ? url : MOCK_VIDEO_URL} />
      </video>
    </div>
  )
);
