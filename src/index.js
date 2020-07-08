import beginGride from "./index.vue"

export default {
  props: ["lists", "opacity"],
  render() {
    let el = <beginGride lists={this.lists} opacity={this.opacity} />
    return el
  },
}
