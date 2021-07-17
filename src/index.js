import beginGride from "./BeginGride.vue"
export default {
  install (_V){
    _V.prototype.$guide = function (props) {
      const parent =  document.createElement('div')
      const el = document.createElement('div')
      parent.appendChild(el)
      document.body.appendChild(parent)
      const vm =  new _V({
        el,
        data: {
          ...props
        },
        render() {
          return <beginGride lists={this.lists} opacity={this.opacity} />
        }
      })
      return {
        vm,
        destory: function() {
          vm.$destroy();
          parent.innerHTML = ''
          document.body.removeChild(parent)
        }
      }
    }
  },
}
