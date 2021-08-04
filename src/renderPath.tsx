import { Component } from "vue"
const defaultWrapStyle =
  "color:white;border-radius: 20px;border:dashed 2px white;display: inline-block;padding:10px"

const lineStyle = "stroke-dasharray: 5px 5px;stroke-width:2px"
const deviation = {
  x: 40,
  y: 40
}
const comp: Component = {
  props: {
    steps: Array,
    opacity: Number,
    neverOpenHandler: Function,
    curIndex: Number
  },
  render () {
    return <g>
      <path
        d={this.path}
        fill={`rgba(0,0,0,${this.opacity ? this.opacity : 0.3})`}
      />
      { this.renderLine() }
      { this.renderHtml() }
    </g>
  },
  created () {
    console.log(this.setps)
  },
  methods: {
    renderLine () {
      let { width, height, left, top } = this.position
      return <path
        d={`M 
          ${left - 20} ${ top + height / 2}  
          Q ${left - 80 } ${ top + height / 2 }
          ${left - 20 } ${ top + height + deviation.y  }
        `}
        stroke="white"
        fill="none"
        style={this.curItem.lineStyle ? this.curItem.lineStyle : lineStyle}
    />
    },
    renderHtml () {
      const { x, y } = deviation
      return <foreignObject
              x={this.position.left}
              y={this.position.top + x}
              width={this.position.width * 2}
              height={this.position.height * 4}
              style="color:white"
              key={`item${this.curIdx}`}
            >
            <div
              style={this.curItem.style ? this.curItem.style : defaultWrapStyle}
              ref={"innerContent"}
            >
              {typeof this.curItem.text === "function"
                ? this.curItem.text()
                : this.curItem.text}
              <br />
              {/* {this.len - 1 === this.curIdx && (
                <label
                  onClick={this.neverAlert}
                  style="color:white;font-size:14px;line-height:30px"
                >
                  <input
                    type="checkbox"
                    style="vertical-align: middle;"
                    onChange={this.handleChange}
                    ref="checkbox"
                  />
                  下次不再提示
                </label>
              )} */}
            </div>
            <span
              onClick={() => this.incrment(this.curIdx + 1)}
              style="float:right;margin:10px;border:solid 1px white;padding:8px;border-radius:5px;cursor:pointer"
            >
              {this.len - 1 === this.curIdx ? "完成" : "下一步"}
            </span>
          </foreignObject>
    }
  },
  computed: {
    path() {
      let { width, height, left, top } = this.position
      // top -= this.scrollTop
      // left -= this.scrollLeft
      const wwidth = window.innerWidth,
        wheight = window.innerHeight,
        padding = this.curItem.padding || 10
      return `
            M${left - padding}  ${top + height + padding},
            0 ${wheight},
            ${wwidth} ${wheight},
            ${wwidth} 0,
            0 0,
            0 ${wheight},
            ${left - padding}  ${top + height + padding},
            ${left - padding}  ${top - padding},
            ${left + width + padding}  ${top - padding},
            ${left + width + padding}  ${top + height + padding}
            Z`
    },
    position () {
      return this.curItem.el.getClientRects()[0]
    },
    curItem () {
      return this.steps[this.curIndex]
    }
  }
}
export default comp