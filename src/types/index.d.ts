import { JSXElement } from "@babel/types";

export interface GuideProps  {
  opacity: Number,
  neverOpenHandler: (obj: Boolean) => void,
  steps: [StepItem]
}
export interface StepItem  {
  el: HTMLElement,
  width?: String,
  style?: String,
  text: String | Function,
  lineStyle: String,
  padding: Number,
  render?: (item: StepItem) => JSXElement,
  align: Direction
}
 export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}