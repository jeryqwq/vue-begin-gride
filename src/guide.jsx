
import { createApp } from 'vue'
import ItemSvgPath from './renderPath'
import renderProgress from './renderProgress'
const svgStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 999,
  minWidth: '100vw',
  minHeight: '100vh'
}
export default function ( options = {} ) {
  const { opacity = "0.5", steps= [] } = options
  const div = document.createElement('div');
  document.body.appendChild(div);
  const vm = render(options)
  function render(options) {
    return createApp({
      data() {
        return { steps, curIndex: 0 }
      },
      render() {
        return <svg
        style={svgStyle}
      >
        <ItemSvgPath 
          steps={options.steps}
          opacity={options.opacity}
          
        />
      </svg>
      },
    }).mount(div);
  }
  console.log(vm)

  function destroy () {
    div.innerHTML = ''

  }
}