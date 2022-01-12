import React, { FC } from "react";
import { Wrapper } from "./mockWidget.style";

export type mockWidgetProps = {
  interaction: {
    data: {
      [x: string]: any;
    };
  };
  clientHeight: number;
  clientWidth: number;
};

export const mockWidget: FC<mockWidgetProps> = ({
  interaction,
  clientHeight,
  clientWidth,
}) => {
  return (
    <Wrapper
      // clientHeight={clientHeight}
      // clientWidth={clientWidth}
      data={interaction.data}
      isAnimatable={true}
      isVisible={true}
    >
      <p
        style={{
          color: `${
            interaction.data.content
              ? interaction.data.content.typography.color
              : "#FFF"
          }`,
          textAlign: `${
            interaction.data.content
              ? interaction.data.content.typography.align
              : "center"
          }` as "center",
        }}
      >
        {interaction.data.content ? interaction.data.content.template : ""}
      </p>
    </Wrapper>
  );
};
