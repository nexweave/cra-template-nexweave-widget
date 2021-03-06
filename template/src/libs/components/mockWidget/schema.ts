export const mockSchema = {
  title: "Video Editor Form",
  type: "object",
  properties: {
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
    visibility: {
      isCollapsible: true,
      title: "Visibility",
      gutter: [12, 3],
      description: "Visibility",
      type: "object",
      properties: {
        start: {
          type: "number",
          minimum: 0,
          maximum: 100,
          decimal: false,
          step: 1,
          span: 12,
          ishidden: false,
        },
        end: {
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
  },
};
