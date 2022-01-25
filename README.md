# Introduction

# Getting Started with Nexweave Widget SDK

## Purpose

The Nexweave widget development SDK is intended to be the standard way to write custom widgets. SDK  provide some tools that abstract over the setup process and handle the most common use cases, as well as include some useful utilities that will let the user simplify their widget code.

## Installation:

Create Nexweave Widget is a comfortable environment for **learning widget development**, and is the best way to start building a new widget for the platform.

```bash
npx create-react-app test-nex-widget --template nexweave-widget
```

## What's Included

- A general Nexweave editor layout template (Sandbox for widget testing)
- `@nexweave/autoform`  : Provides a react component that accepts form schema as props and renders the respective form elements under forms section.

---
# Schema Definition

## Core features

- Automatic forms generation
- Fields capable of rendering every schema
- Similarly to other form packages, uniforms can help you with rendering a form, by taking care of its state management, validation, and submission. What makes it unique though, is the ability to **completely generate the form** for you, without having to manually provide its field

In order to do so, nexweave autoform require you to do follwing things:

- Provide **the schema** of your data. You can approach the schema as a formal description of the data, where you define its types, allowed values, default values, required ones and so on.

## Basic Schema Usage

### Start by defining a schema

```bash
export const schema = {
  title: 'My Widget',
  type: 'object',
  properties: {
    backgroundColor: { type: 'string' },
    font:{
      type: "string",
      span: 24,
      ishidden: false,
      instanceOf: "typography",
      uniforms: {
          allowedFields: ["fontFamily", "fontWeight", "fontSize", "letterSpacing", "align", "color", "fontStyle", "textDecoration"]
      },
  }
  },
  required: ['firstName', 'lastName'],
};
```

As you can see, we've defined three properties - `backgroundColor` and  `font`, that are of string  and `backgroundColor`, which is an instance of `typograpy`.

Once the schema is defied, Nexweave widget development kit will automatically pick the schema and render form accordingly.

Your widget will receive the data as per the properties field defined.  So for our example the widget will receive `interaction` props which have the `data` property containing all the data defined under schema .

```bash
interactions : {
	data : {
		backgroundColod : "#FFFFFF",
		font: {
			fontFamily: "Montserrat",
      fontSize: 3.5,
      color: "#000",
      align: "left",
      direction: "ltr",
      lineHeight: 0,
      fontWeight: 700,
      fontStyle: "normal",
      letterSpacing: 5,
      textDecoration: "none"
		}
	}
}
```

Now you're free to do whatever you want inside your widget component with this data 🙌🏻

## 

## Form layouting

The widget form is logically divided into 24 columns, every time when you define a properties you can pass in `span` property that expects a number between 1 - 24. Based on span property the field will occupy the columns. When span field is not passed in the default value 24 will be used.

## API reference

### Instance (`instanceOf`)

Most of the time you'll be using complex form fields like (color picker, font selection/typography) fileds. To get this do we have already created some predefined fields which can be used with the help on `instanceOf` field in schema

`slider` :  slide instance type can be used where we want to show a slider for number field.

```bash
speed: {
      type: "number",
      instanceOf: "slider",
      span: 24,
      ishidden: false,
      max: 4,
      min: 0.25,
      step: 0.05,
      marks: { 0.25: '0.25', 4: '4' }
  }
```

`color` : color instance type renders a chrome color picker that can be used wherever you need to get color from the user.

```bash
backgroundColor: {
      type: "string",
      instanceOf: "color",
      span: 24,
      ishidden: false,
  }
```

`upload` :  This instance type renders a upload component that is synced with nexweave users storage account and allows to upload a new asset from his/her system

```bash
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
}
```

`typography` : This instance type renders a Typography component that helps user define all the basic font styling properties like

- Font Family
- Font Size
- Color
- Alignment
- Text direction
- Line Height
- Font Weight
- Font Style
- Letter Spacing
- Text Decoration

```bash
fontStyling: {
    type: "string",
    span: 24,
    ishidden: false,
    instanceOf: "typography",
    uniforms: {
        isCustomFont: true,
        allowedFields: ["fontFamily", "fontWeight", "fontSize", "letterSpacing", "align", "color", "fontStyle", "textDecoration"]
    },
},
```

`designTools` : This instance renders a complex form that defines following properties

- Background Image/Color
- Border properties
- Opacity
- Blur
- Height/Width
- Aspect Ratio
- 3D warp

```bash
designTools: {
  type: "string",
  span: 24,
  ishidden: false,
  instanceOf: "designTools",
  uniforms: {
      allowedFields: ["background", "border", "size", "filter", "style", "aspectRatio", "isWarpable"],
      allowedBorder: ["borderStyle", "borderColor", "borderWeight", "borderRadius"]
  },
}
```

`animationTools` : This instance type renders a complex form that will be used by the user to define animation for the widget

```bash
animationTool: {
    isCollapsible: true,
    title: "Animation Tools",
    gutter: [12, 3],
    description: 'Animation Tools',
    type: "object",
    properties: {
        animation: {
            type: 'string',
            span: 24,
            ishidden: false,
            instanceOf: "animationTools",
        },
    },
}
```

`sourceTools` : This instance type renders a button that invokes a modal which contains all the assets uploaded by the user. Think of this as a media gallery of the user and they can select an y media that they want to link.

```bash
sourceTools: {
    type: 'string',
    span: 24,
    buttonLabel: "Upload Lottie",
    maxCount: 1,
    listType: 'text',
    allowedFileSize: 5000000000,
    accept: ".png, .jpg",
    ishidden: false,
    instanceOf: "sourceTools",
}
```

`switch` : This instance type renders a switch component and used to get a boolean value.

```bash
isNameVisible: {
    type: "string",
    span: 8,
    ishidden: false,
    instanceOf: "switch",
    label: "Ask for name",
    defaultChecked: true,
    checkedChildren: "On",
    unCheckedChildren: "Off",
    disabled: false,
    loading: false,
}
```

`selectVariable` : This instance type renders a dropdown that lists all the variables defined for the template by the user.

```bash
selectVariable: {
    type: "string",
    span: 24,
    ishidden: false,
    instanceOf: "selectVariable",
    label: "Select Variable from list",
    uniforms: {
    }
}
```

`TextArea` : 

`CodeEditor`:  This instance type renders a code editor.  For now we only accept CSS properties if we want to allow users to pass in any custom CSS. 

```bash
customCSS: {
    type: "string",
    instanceOf: "CodeEditor",
    label: "Custom CSS",
    span: 24,
    ishidden: false,
    rows: 4,
    bordered: true,
    uniforms: {
        config: {
            language: "css",
            showGutter: true,
            fontSize: 20,
            theme: "textmate",
            showPrintMargin: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            blockScrolling: true,
        }
    }
}
```

---
# Widget Development

1. Create a react app using the command `npx create-react-app test-nex-widget --template nexweave-widget`, which will generate a development environment for widget development.
You will work inside `src` folder in your widget development cycle.
2. There are 2 main files namely `index.tsx` and `schema.ts`
    1. `index.tsx` - Here you will going to write all your JSX and business logic for your widget
    2. `schema.ts` - Add your editor form schema inside this file which will require to change your widget behaviour using the form. (refer [this link](https://www.notion.so/Schema-Definition-cbbfd337901b40f286edddd949fc3bda) for detailed documentation about schema definition)
    3. `mockData.ts` - Here you will define your widget default interaction data and variables.
    4. `mockWidget.style.ts` - This a styled component file where you can write your own css.
3. Your `index.tsx` file inside your widget folder will get following props by default
    
    ```tsx
    isVisible: boolean; // Widget visibility based on visibility time
    interaction: IWidgetInteractionProps; // Widget interaction data
    clientHeight: number; // Editor/Player clientHeight
    clientWidth: number; // Editor/Player clientWidth
    playerId: string; // Unique ID for each player
    isAnimatable: boolean; // Boolean value for widget to be animatable baased on warping and other features
    mode: "editor" | "player"; // Mode of the widget using
    experienceId?: string; // Unique experience id
    host?: "staging" | "beta" | "production"; // Host platform for the widget
    ```
    
4. Now write your jsx inside return function.
    
    Write a wrapper component/hoc on your widget to handle widget visibility, height, width and animation (optional)
    
    ```tsx
    import React, { FC } from "react";
    import { Wrapper } from "./mockWidget.style";
    
    export type mockWidgetProps = {
      isVisible: boolean;
    	interaction: IWidgetInteractionProps;
    	clientHeight: number;
    	clientWidth: number;
    	playerId: string;
    	isAnimatable: boolean;
    	mode: "editor" | "player";
    	experienceId?: string;
    	host?: "staging" | "beta" | "production";
    };
    
    export const mockWidget: FC<mockWidgetProps> = ({
    	isVisible,
      interaction,
      clientHeight,
      clientWidth,
    	playerId,
    	isAnimatable,
    	mode,
    	experienceId,
    	host,
    }) => {
      return (
        <Wrapper
          clientHeight={clientHeight}
          clientWidth={clientWidth}
          data={interaction.data}
          isAnimatable={true}
          isVisible={true}
    			id=`nex-element-${interaction.meta.id}`
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
    ```
    
5. interaction in props mainly contains 3 objects
    1. meta - Meta for the particular interaction
        
        ```tsx
        id: string; // Unique id of the widget
        component: string; // Widget component name
        isVisible: boolean; // Boolean value for widget to be visible or not
        label: string; // Label for your widget
        type: string; // type of the widget (make sure to add 'widget' as value)
        keepAspectRatio?: boolean; // Keep it true to maintain aspect ratio for widget
        category?: string // Widget category
        ```
        
    2. data - Interaction data (define your data in `mockData.ts` file in `widgetData` variable)
        
        Interaction data for “Hello World” widget 
        
        ```tsx
        {
          position: {
            top: 40,
            left: 10,
          },
          visibility: {
            start: 2,
            end: 10,
          },
          size: {
            height: 10,
            width: 30,
          },
          content: {
            typography: {
              fontWeight: 400,
              color: "rgba(185, 115, 115, 1)",
              letterSpacing: 15,
              align: "center",
              textDecoration: "none",
              fontSize: 25,
              fontStyle: "normal",
            },
            template: "Hello World!",
          },
          designTool: {
            tools: {
              background: {
                type: "color",
                color: "#fff",
                url: "",
                position: "",
                size: "",
              },
              border: {
                color: "#ccc",
                weight: 12,
                radius: 50,
              },
              style: {
                opacity: 1,
              },
              filter: {
                blur: 1,
              },
              transform: {
                rotate: 0,
                matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
              },
            },
          },
        }
        ```
        
    3. schema - Form schema (refer [this link](https://www.notion.so/Schema-Definition-cbbfd337901b40f286edddd949fc3bda) for detailed documentation about schema definition)
    
    (note - for the widget development, we don’t need form schema, the schema object is to render form for your widget)
    
6. Add `id` props and value as ``nex-element-${interaction_meta_id}`` to make your widget movable (optional)