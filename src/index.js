import beginGride from "./BeginGride.vue"
export default {
  props: ["lists", "opacity"],
  data: () => ({}),
  render() {
    return <beginGride lists={this.lists} opacity={this.opacity} />
  },
}
