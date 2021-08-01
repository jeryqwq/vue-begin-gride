import beginGride from "./BeginGride.vue"
export default {
  install (_V){
    _V.prototype.$guide = function ({lists = [], opacity= 0.7, neverOpenHandler = () => {}}) {
      const isfingerPoint = window.localStorage.getItem("isfingerPoint")
      if(isfingerPoint && (isfingerPoint === 'true')) return
      const parent =  document.createElement('div')
      const el = document.createElement('div')
      parent.appendChild(el)
      document.body.appendChild(parent)
      const vm =  new _V({
        el,
        render() {
          return <beginGride lists={lists} opacity={opacity} on-destory={destroy} neverOpenHandler={neverOpenHandler}/>
        }
      })
      function destroy () {
        vm.$destroy();
        parent.innerHTML = ''
        document.body.removeChild(parent)
      }
      return {
        vm,
        destroy
      }
    }
  }
}
