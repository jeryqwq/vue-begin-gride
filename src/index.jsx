import { createApp } from 'vue';
import guide from "./guide";
createApp({
  render () {
    return <div style={{margin: ' 100px'}}>
      <input id="username"/>
      <input id="password"/>
      <button id="login">登陆</button>
    </div>
  }
}).mount('#app')


setTimeout(() => {
  guide({
    opacity: 0.4,
    neverOpenHandler: (bool) => {  alert(bool) },
    steps: [{
      el: window.username,
      render: function () {
        return <h1>this is a render function</h1>
      },
      align: 'UP',
      text: '点击这里注册'
    }]
  })
}, 500);