<template>
  <div style="">
    <!-- <PointTool :lists="lists" :opacity="0.7" /> -->
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
import Vue from 'vue'
import PointTool from "../src/index"
Vue.use(PointTool)
export default {
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
      opacity: 0.4,
      neverOpenHandler: function(isNeverOpen) {
        alert(isNeverOpen)
      }
    })
  },
}
</script>
