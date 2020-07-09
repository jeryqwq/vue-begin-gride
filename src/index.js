import beginGride from "./BeginGride.vue"

export default {
  props: ["lists", "opacity"],
  render() {
    let el = <beginGride lists={this.lists} opacity={this.opacity} />
    return el
  },
}
