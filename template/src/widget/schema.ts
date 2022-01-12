export const schema = {
  title: "Video Editor Form",
  type: "object",
  properties: {
    selectVariable: {
      type: "string",
      span: 24,
      ishidden: false,
      instanceOf: "selectVariable",
      label: "Select Variable from list",
      uniforms: {},
    },
    content: {
      isCollapsible: true,
      title: "Text content",
      gutter: [12, 3],
      description: "Content tool",
      type: "object",
      properties: {
        template: {
          type: "string",
          span: 24,
          ishidden: false,
          placeholder: "Enter form title",
        },
        typography: {
          type: "string",
          span: 24,
          ishidden: false,
          instanceOf: "typography",
          uniforms: {
            isCustomFont: true,
            allowedFields: [
              "fontWeight",
              "fontSize",
              "letterSpacing",
              "align",
              "color",
              "fontStyle",
              "textDecoration",
            ],
          },
        },
      },
    },
    size: {
      isCollapsible: true,
      title: "Size",
      gutter: [12, 3],
      description: "Size",
      type: "object",
      properties: {
        width: {
          type: "number",
          minimum: 0,
          maximum: 100,
          step: 1,
          span: 12,
          ishidden: false,
        },
        height: {
          type: "number",
          minimum: 0,
          maximum: 100,
          step: 1,
          span: 12,
          ishidden: false,
        },
      },
    },
    position: {
      isCollapsible: true,
      title: "Position",
      gutter: [12, 3],
      description: "Position",
      type: "object",
      properties: {
        top: {
          type: "number",
          minimum: 0,
          maximum: 100,
          decimal: false,
          step: 1,
          span: 12,
          ishidden: false,
        },
        left: {
          type: "number",
          minimum: 0,
          maximum: 100,
          decimal: false,
          step: 1,
          span: 12,
          ishidden: false,
        },
      },
    },
    designTool: {
      isCollapsible: true,
      title: "Design tool",
      gutter: [12, 3],
      description: "Design tool",
      type: "object",
      properties: {
        uploadAvatar: {
          type: "string",
          instanceOf: "upload",
          listType: "picture-list",
          maxCount: 10,
          allowedFileSize: 500000,
          accept: ".pdf",
          buttonLabel: "Hello World",
          span: 24,
          ishidden: false,
        },
        tools: {
          type: "string",
          span: 24,
          ishidden: false,
          instanceOf: "designTools",
          uniforms: {
            allowedFields: ["background", "border", "filter", "style"],
            allowedBorder: [
              "borderStyle",
              "borderColor",
              "borderWeight",
              "borderRadius",
            ],
          },
        },
      },
    },
  },
};