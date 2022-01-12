import styled from 'styled-components';
import { animationStyle, baseStyle , IBaseStyle} from '../../styles';

interface WID0001WrapperProps {
  data: Record<string, any>;
  isAnimatable: boolean;
  isVisible: boolean;
}

export const Wrapper = styled.div<WID0001WrapperProps>`
  ${(props) => `
    display: ${props.isVisible ? `block` : `none`};
    ${baseStyle(props.data as IBaseStyle)}
    background: ${props.data.designTool.tools.background.color};
  `}
`;
