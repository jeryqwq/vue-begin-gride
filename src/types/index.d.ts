import { JSXElement } from "@babel/types";

export interface GuideProps  {
  opacity: Number,
  neverOpenHandler: (obj: Boolean) => void,
  steps: [StepItem]
}
type StepItem = {
  el: HTMLElement,
  width?: String,
  style?: String,
  text: String | Function,
  lineStyle: String,
  padding: Number,
  render?: (item: StepItem) => JSXElement
}