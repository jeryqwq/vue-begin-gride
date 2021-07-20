const defaultWrapStyle =
  "color:white;border-radius: 20px;border:dashed 2px white;display: inline-block;padding:10px"
const lineStyle = "stroke-dasharray: 5px 5px;stroke-width:2px"
export default {
  props: ["item", "len", "curIdx", "idx", "incrment", "opacity"],
  data() {
    return {
      position: {
        left: 200,
        top: 200,
        height: 200,
        width: 200,
      },
      scrollTop: 0,
      scrollLeft: 0,
      wrapHeight: 0,
      offsetPoint: {
        x: 0,
        y: 0,
      },
    }
  },
  mounted() {
    const { left, top, width, height } = this.item.el.getClientRects()[0]
    this.position = {
      left,
      top,
      width,
      height,
    }
    window.addEventListener("scroll", this.autoScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.autoScroll)
  },
  methods: {
    autoScroll(e) {
      window.requestAnimationFrame(() => {
        this.scrollTop = e.target.scrollingElement.scrollTop
        this.scrollLeft = e.target.scrollingElement.scrollLeft
      })
    },
    neverAlert(e) {
      e.stopPropagation()
    },
    handleChange(e) {
      if (e.target.checked) {
        window.sessionStorage.setItem("isfingerPoint", "true")
      }
    },
  },
  render() {
    let { height, left, top } = this.position
    top -= this.scrollTop
    left -= this.scrollLeft
    const { x, y } = this.offsetPoint
    return (
      this.curIdx === this.idx && (
        <g>
          <path
            d={this.path}
            fill={`rgba(0,0,0,${this.opacity ? this.opacity : 0.3}`}
          ></path>
          <path
            d={`M 
            ${left - 20} ${top + height / 2}  
            Q ${left - 80 + y} ${top + height / 2 + x}
            ${left - 10 + y} ${top + height + this.wrapHeight + x}
            `}
            stroke="white"
            fill="none"
            style={this.item.lineStyle ? this.item.lineStyle : lineStyle}
          />
          <foreignObject
            x={this.wrapPosition.left + y}
            y={this.wrapPosition.top + x}
            width={this.wrapPosition.width}
            height={this.wrapPosition.height}
            style="color:white"
            key={`item${this.curIdx}`}
          >
            <div
              style={this.item.style ? this.item.style : defaultWrapStyle}
              ref={"innerContent"}
            >
              {typeof this.item.text === "function"
                ? this.item.text()
                : this.item.text}
              <br />
              {this.len - 1 === this.curIdx && (
                <label
                  onClick={this.neverAlert}
                  style="color:white;font-size:14px;line-height:30px"
                >
                  <input
                    type="checkbox"
                    style="vertical-align: middle;"
                    onChange={this.handleChange}
                    ref="checkbox"
                    select={true}
                  />
                  下次不再提示
                </label>
              )}
            </div>
            <span
              onClick={() => this.incrment(this.curIdx + 1)}
              style="float:right;margin:10px;border:solid 1px white;padding:8px;border-radius:5px;cursor:pointer"
            >
              {this.len - 1 === this.curIdx ? "完成" : "下一步"}
            </span>
          </foreignObject>
        </g>
      )
    )
  },
  computed: {
    wrapPosition() {
      let { top, left } = this.position
      this.$nextTick().then(() => {
        const el = this.$refs["innerContent"]
        el && (this.wrapHeight = el.offsetHeight)
      })
      left -= this.scrollLeft
      top -= this.scrollTop
      let foreignPosition = {
        left: left,
        top: top + this.position.height + 60,
        width: this.item.width
          ? Number(this.item.width.replace("px", ""))
          : Number(this.position.width),
        height: this.wrapHeight + 60,
      }
      foreignPosition["bottom"] = foreignPosition.top + foreignPosition.height
      foreignPosition["right"] = foreignPosition.left + foreignPosition.width
      if (
        foreignPosition["bottom"] > window.innerHeight &&
        this.scrollTop < this.position.top
      ) {
        this.offsetPoint.x = -(foreignPosition["bottom"] - window.innerHeight)
      }
      if (foreignPosition["right"] > window.innerWidth) {
        this.offsetPoint.y = -(foreignPosition["right"] - window.innerWidth)
      }
      if (this.scrollLeft > this.position.left) {
        this.offsetPoint.y = this.scrollLeft - this.position.left
      }
      if (
        this.scrollTop > this.position.top + this.position.height &&
        foreignPosition["bottom"] < window.innerHeight
      ) {
        this.offsetPoint.x =
          this.scrollTop - this.position.top - this.position.height
      }

      return foreignPosition
    },
    path() {
      let { width, height, left, top } = this.position
      top -= this.scrollTop
      left -= this.scrollLeft
      const wwidth = window.innerWidth,
        wheight = window.innerHeight,
        padding = this.item.padding || 10
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
  },
}
