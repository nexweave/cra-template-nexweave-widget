import React, { FC, useRef, useEffect, useContext, useState } from "react";
import { Player } from "../mockPlayer";
import {
  Wrapper,
  Header,
  ElementsContainer,
  PlayAreaContainer,
  OverlayWrapper,
  FormContainer,
  Timeline,
} from "./mockEditor.style";
import { usePlayerDimensionEffect } from "../../hooks";
import { NexForm } from "@nexweave/autoform";
import { MockEditorContextProvider, MockEditorContext } from "./context";
import { mockWidget } from "../../../widget";
import { widgetData } from "../../../widget/mockData";
import { schema } from "../../../widget/schema";
import { variables } from "../../../widget/mockData";
import { injectVariables } from "../../utils";

export type mockWidgetConstructor = {
  interaction: object;
};

export type EditorProps = {
  Widget?: React.ComponentType<mockWidgetConstructor>;
  initialFormState?: object;
  formSchema?: object;
  videoUrl: string;
};

export const Editor: FC<EditorProps> = ({
  videoUrl,
  formSchema = schema,
  Widget = mockWidget,
}) => {
  const PlayAreaRef = useRef(null);
  const videoPlayerRef = useRef(null);
  const [clientDimension, setClientDimension] = useState({
    clientHeight: 0,
    clientWidth: 0,
  });
  const { state, dispatch } = useContext(MockEditorContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const dimensions = usePlayerDimensionEffect(
    PlayAreaRef.current,
    "https://nexweave-storage.s3.ap-south-1.amazonaws.com/nexweave-wdk/sample.mp4"
  );
  useEffect(() => {
    const videoRef = document.getElementById("nexweave-overlay");
    console.log(dimensions);

    if (videoRef && videoPlayerRef) {
      videoRef.style.width = dimensions.width;
      videoRef.style.height = dimensions.height;
    }

    setClientDimension({
      clientHeight: videoRef?.clientHeight || 0,
      clientWidth: videoRef?.clientWidth || 0,
    });
  }, [dimensions]);

  const handleFormDataChange = (data: Record<string, any>) => {
    dispatch({
      type: "update",
      payload: data,
    });
  };

  return (
    <>
      <Header />
      <Wrapper>
        <ElementsContainer />
        <PlayAreaContainer ref={PlayAreaRef}>
          <OverlayWrapper id="nexweave-overlay">
            {/* <Overlay> */}
            {Widget ? (
              <Widget
                interaction={injectVariables(variables, { data: { ...state } })}
                {...clientDimension}
              />
            ) : (
              ""
            )}
            {/* </Overlay> */}
            <Player ref={videoPlayerRef} url={videoUrl} />
          </OverlayWrapper>
        </PlayAreaContainer>
        <FormContainer>
          <NexForm
            schema={schema}
            model={state}
            variables={variables}
            visibility={{
              start: 0.1,
              end: 100,
            }}
            tokenConfig={{
              TOKEN: `Bearer 1234`,
              HOST: "production",
              WORKSPACE: "workspace",
            }}
            formConfig={{
              editor: "video",
            }}
            onChange={handleFormDataChange}
            onSubmit={(model) => {
              return;
            }}
          />
        </FormContainer>
        <Timeline />
      </Wrapper>
    </>
  );
};

export const EditoWithContextProvider: FC<EditorProps> = (props) => {
  return (
    <MockEditorContextProvider
      initialState={
        props.initialFormState ? props.initialFormState : widgetData
      }
    >
      <Editor
        Widget={props.Widget}
        initialFormState={props.initialFormState}
        formSchema={props.formSchema}
        videoUrl={props.videoUrl}
      />
    </MockEditorContextProvider>
  );
};
