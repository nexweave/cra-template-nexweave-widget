/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IAnimation } from "@nexweave/types";
import { getDuringAnimationTime } from "../utils";


export interface IBaseStyle {
  size: { height: number; width: number };
  position: { top: number; left: number };
  transform?: { rotate: number };
}
export const baseStyle = (props: IBaseStyle): string => {
  return `
      position: absolute;
      box-sizing: border-box;
      height: ${props.size.height || 50}%;
      width: ${props.size.width || 50}%;
      top: ${props.position.top || 0}%;
      left: ${props.position.left || 0}%;
      transform: rotate(${props.transform?.rotate || 0}deg);
`;
};

export const animationStyle = (animation: IAnimation, visibility: { start: number, end: number }, isAnimatable: boolean): string => {
  if (!isAnimatable) return ``;
  return `
  animation-fill-mode: forwards;
  animation-name: ${animation?.in?.name || 'noAnimation'},${animation?.during?.name || 'noAnimation'}, ${animation?.out?.name || 'noAnimation'
    };
  animation-duration: ${`${animation?.in?.duration || 0
    }s,${getDuringAnimationTime({animation, visibility})}s,${animation?.out?.duration || 0 + 0.2}s`};
  animation-delay: ${`0s,${animation?.in?.duration || 0}s,${animation?.in?.duration || 0 + getDuringAnimationTime({animation, visibility})
    }s`};`;
};
