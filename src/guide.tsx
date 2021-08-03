
import { createApp, CSSProperties, reactive, ref, toRefs } from 'vue'
import ItemSvgPath from './renderPath'
import { GuideProps } from './types';
// import renderProgress from './renderProgress'
const svgStyle: CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 999,
  minWidth: '100vw',
  minHeight: '100vh'
}
export default function ( options: GuideProps ) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const vm = render(options)
  function render(options: GuideProps) {
    return createApp({
      setup () {
        const state = reactive(options)
        const curIndex = ref(0)
        const { opacity, steps } = toRefs(state)
        function changeIndex (index: number) {
          curIndex.value = index
        }
        return {
          opacity,
          steps,
          curIndex,
          changeIndex
        }
      },
      methods: {
        indexChange (idx: Number) {
          this.curIndex = idx
        }
      },
      render() {
        return <svg
        style={svgStyle}
      >
        <ItemSvgPath 
          steps={options.steps}
          opacity={options.opacity}
          neverOpenHandler={options.neverOpenHandler}
          on={{
              change: this.indexChange
            }}
        />
      </svg>
      },
    }).mount(div);
  }
  function destroy () {
    div.innerHTML = ''

  }
}