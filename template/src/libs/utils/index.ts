import {
  IAnimation,
  IInteraction,
  IInteractionINEX0001,
  IInteractionINEX0002,
  IInteractionINEX0003,
  IInteractionINEX0004,
} from "@nexweave/types";
import { EventEmitter } from "@nexweave/utils";
import { defaultTo } from "lodash";
/**
 * @param {any} value  The String/Number that needs to be rounded
 * @param {number} precision The number of digits to appear after the decimal point
 */
export const roundTo = (value: number, precision: number): number => {
  return (
    Math.round((value + Number.EPSILON) * 10 ** precision) / 10 ** precision
  );
};

export type GetDuringAnimationArgType = {
  animation: IAnimation;
  visibility: { start: number; end: number };
};
export const getDuringAnimationTime = ({
  animation,
  visibility,
}: GetDuringAnimationArgType): number => {
  const { in: inAnimation, out: outAnimation } = animation;
  const { start, end } = visibility;
  const elementLifeSpan = end - start;
  const duringAnimationDuration =
    elementLifeSpan - (inAnimation.duration + outAnimation.duration);
  return duringAnimationDuration > 0 ? duringAnimationDuration : 0;
};

const getFilteredRedirectUrl = (url: string): string => {
  const protocaolRegex = /http(s?):\/\//;
  if (protocaolRegex.test(url)) {
    const result = url.replace(/http(s?):\/\//g, "");
    return `https://${result}`;
  }
  return `https://${url}`;
};

export const handleInteractionAction = (
  interaction: IInteraction,
  playerId: string
): void => {
  if (interaction.data.action.value) {
    switch (interaction.data.action.type) {
      case "REDIRECT":
        try {
          interaction.data.action.value !== "undefined"
            ? window.open(
                `${
                  getFilteredRedirectUrl(interaction.data.action?.value) || "#"
                }`
              )
            : void 0;
        } catch (error) {
          console.log(error);
        }
        break;
      case "SEEK":
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        interaction.data.action.value !== "undefined"
          ? (EventEmitter.emit("NEX_VIDEO_SEEKED", {
              id: playerId,
              time: interaction.data.action.value,
            }),
            EventEmitter.emit("NEX_VIDEO_PLAY", { id: playerId }))
          : void 0;
        break;
      case "EMAIL":
        if (
          interaction.data.action.value &&
          typeof interaction.data.action.value === "string" &&
          interaction.data.action.value.includes("mailto:", 0)
        ) {
          window.open(`${interaction.data.action.value}`);
        } else {
          window.open(`mailto:`);
        }
        break;
      case "PHONE":
        if (
          interaction.data.action.value &&
          typeof interaction.data.action.value === "string" &&
          interaction.data.action.value.includes("tel:", 0)
        ) {
          window.open(`${interaction.data.action.value}`);
        }
        break;
      default:
        break;
    }
  }
};

export const getFontWeight = (fontWeight: number = 400): number | string => {
  if (fontWeight === 0) {
    return "inherit";
  }
  return fontWeight;
};

export const isValidURL = (url: string) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url);
};

export const getGoogleFontFamily = (
  fontFamily: string,
  fontWeight: number,
  fontStyle: string
) => {
  const style = fontStyle && fontStyle === "italic" ? "italic" : "";
  const weight = fontWeight || 400;

  let titleFont = `${fontFamily}:${weight}${style}`;
  return titleFont;
};

export const isValidateEmail = (email: string | undefined): boolean => {
  if (!email) return false;
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
};

export const isValidPhone = (phone: string): boolean => {
  if (!phone) return false;
  const phoneNoRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (phone.match(phoneNoRegex)) {
    return true;
  }
  return false;
};

export const injectVariables = (
  variables: Record<string, any>,
  data: Record<string, any>
) => {
  let stringifiedPayload = JSON.stringify(data);
  for (const [key, value] of (<any>Object).entries(defaultTo(variables, {}))) {
    stringifiedPayload = stringifiedPayload.replace(
      new RegExp(`\\[${key as string}\\]`, "gm"),
      value
    );
  }
  const filteredData = JSON.parse(stringifiedPayload);
  return filteredData;
};

export const getComponentPath = (component: string) => {
  const prefix = component.substring(0, 3);
  if (prefix === "WID") {
    return `widgets/dist/${component}`;
  }
  return `elements/dist/${component}`;
};
