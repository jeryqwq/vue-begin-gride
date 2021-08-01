<a href="https://jeryqwq.github.io/Others/vue-begin-gride.html" target="_blank">Demo || Document</a>

## 预览

<image  src="./demo.png"/>

## 开始

新手指引常用于网站首页以及 APP 欢迎页面，之前的引导页面太死了，有些还是设计师切图的 png 图片，发现切图太死板太浪费性能了，每次一个调整都要重新切图，完全做不到自定义，而且要考虑屏幕宽高，窗体出现滚动条根本又得动态定位，而且一个这个东西要占我好几百 k 的资源，所以就花了点时间研究了下具体的实现方式，用 svg 实现了相应的功能，还做了滑屏处理，防止引导元素超出可视化范围内看不到提示语。

### 安装

```bash
npm i vue-begin-gride -s
```

### 使用
##### 注册插件
```js
import beginGride from "vue-begin-gride"
Vue.use(beginGride)
```
##### 使用
``` js
  this.$guide({
    list: [
      {
        el: this.$refs.login,
        width: "500px",
        lineStyle: "stroke:red",
        padding: 6,
        text:
          "第一步，输入您的在网站已经注册过的用户名信息，用户名长度应该在6-20位之前",
      }
    ]
  })
```

在 vue 中一定要等待 dom 渲染完成再给 list 数组的每一个 el 对象赋值，否则无法找到 dom，所以在请在 mounted 函数中获取到每个 ref 的 dom 节点或者通过其他 api 找到的节点对象

::: details 点击查看组件代码

```vue
<template>
  <div style="">
    <div style="margin-left: 100px;">
      <input type="text" ref="text" placeholder="请输入用户名" />
      <input type="text" ref="password" placeholder="请输入密码" />
      <div ref="login" style="width: 300px; height: 100px; background: green;">
        登录
      </div>
      <div ref="end" style="width: 300px; height: 100px; background: red;">
        end
      </div>
    </div>
  </div>
</template>

<script>
import VueBeginGride from "vue-begin-gride"
import Vue from 'vue'
Vue.use(VueBeginGride)
export default {
  components: {
    PointTool,
  },
  data() {
    return {
      lists: [],
    }
  },
  mounted() {
    this.lists = [
      {
        el: this.$refs.text,
        width: "500px",
        style: "border:3px red solid",
        padding: 5,
        text:
          "第一步，输入您的在网站已经注册过的用户名信息，用户名长度应该在6-20位之前",
      },
      {
        el: this.$refs.password,
        padding: 4,
        width: "300px",
        text: () => (
          <span style="color:white;width:500px">
            "第er步：请输入注册时该用户名下对应的密码，密码限制在6-20位字符串或者数字！！！"
          </span>
        ),
      },
      {
        el: this.$refs.login,
        text: () => (
          <span style="color:white">
            "点击登录：输入您以及注册过的用户名和密码，即可登录该系统！！",
          </span>
        ),
      },
      {
        el: this.$refs.end,
        padding: 20,
        text: () => (
          <span style="color:white">
            "第四步就会出现一个下次不再提示改选择，将状态存入session，勾选后第二次刷新页面将不再展示！",
          </span>
        ),
      },
    ]
    this.$guide({
      lists: this.lists,
      opacity: 0.2
    })
  },
}
</script>
```
:::

## API 说明

| 参数             |        类型        | 默认值                                                    | 是否必填 | 说明                                                |
| ---------------- | :----------------: | ----------------------- | -------- | ----- |
| opacity          |       Float        | 0.3                                                       | false    | 背景透明度,请输入 0-1 之间的小数     
| neverOpenHandler          |       func        |  (isChecked) => ({})                                                      | false    | 点击是否下次弹出回调，参数单选框是否选中      |
| [list]           |       Array        | null                                                      | true     | 每个遮罩层的信息                                    |
| [list].el        |        Node        |                                                           | true     | 节点的 DOM 对象，请在 mounted 的函数中赋值调用      |
| [list].width     |       string       | 默认跟随 el 宽度                                          | false    | 当给定一个固定宽度时请使用 string 类型的 px 宽度    |
| [list].style     |    style-string    | color:white;border-radius: 20px;;border:dashed 2px white; | false    | 提示区域自定义样式，默认 2 像素虚线白色边框，可覆盖 |
| [list].text      | Function or String |                                                           | true     | 提示区域内容，可传入字符串或者 jsx 渲染函数         |
| [list].lineStyle |       string       | "stroke-dasharray: 5px 5px;stroke-width:2px"              | false    | 链接线条的 svg 样式，详情请阅读 svg 文档            |
| [list].padding   |       Number       | 10                                                        | false    | 遮罩层相对 DOM 节点的 padding 值                    |

<vue-begin-gride />

```bash
vue serve test/边界固定.vue
vue serve test/normal.vue
```

## publish

```bash
vue build --target lib --name main './src/index.js'
npm publish
```
