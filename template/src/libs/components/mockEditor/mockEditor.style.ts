import styled from 'styled-components';

export const Header = styled.div`
  height: 70px;
  background: #4d148c;
`;

export const Wrapper = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  display: grid;
  grid-template-areas:
    'elements editor  form'
    'timeline timeline timeline';
  grid-template-rows: 60vh 1fr;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const ElementsContainer = styled.div`
  grid-area: elements;
  border: 0.5px solid black;
`;
export const PlayAreaContainer = styled.div`
  grid-area: editor;
  border: 0.5px solid black;
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverlayWrapper = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 2;
`;

export const FormContainer = styled.div`
  grid-area: form;
  padding: 2%;
  border: 0.5px solid black;
  overflow-y: scroll;
`;

export const Timeline = styled.div`
  grid-area: timeline;
  border: 0.5px solid black;
`;
