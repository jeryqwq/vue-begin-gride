export type GuideProps = {
  opacity: Number,
  neverOpenHandler: Function,
  list: [
    {
      el: HTMLElement,
      width?: String,
      style?: String,
      text: String|Function,
      lineStyle: String,
      padding: Number,
      render: Function
    }
  ]
}