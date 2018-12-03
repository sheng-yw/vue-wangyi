<template>
  <div >
    <Header/>
    <div class="personal-wrap" :class="{defaultLogin:isLogin}" >
      <div class="logo ">
        <h2>
          <a href="javascript:;">
            <img src="../../../static/img/logo.png" alt="">
          </a>
        </h2>
      </div>
      <div v-if="isLogin === 0">
        <div class="personal-button">
          <div @click="toggleLoginType(1)"><i class="iconfont icon-shouji"></i><span>手机号码登录</span></div>
          <div @click="toggleLoginType(2)"><i class="iconfont icon-youxiang"></i><span>&nbsp;邮箱账号登录</span></div>
        </div>
        <p class="register">手机号快捷注册&nbsp;></p>
        <footer class="login-type">
          <div class="wx">
            <a href="javascript:;">
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </a>
          </div>
          <div class="qq">
            <a href="javascript:;">
              <i class="iconfont icon-QQ"></i>
              <span>QQ</span>
            </a>
          </div>
          <div class="wb">
            <a href="javascript:;">
              <i class="iconfont icon-weibo" ></i>
              <span>微博</span>
            </a>
          </div>
        </footer>
      </div>
<!--      <div class="login-wrap" v-if="isLogin">
        <form >
          <div class="login">
            <input type="text" placeholder="请输入手机号" @blur="regPhoneCode()" v-model="phone">
          </div>

          <div class="code">
            <input type="text" placeholder="请输入短信验证码" @blur="regPhoneCode()" v-model="code">
            <span @click="getCode" :class="{disabledCode: hintTime>0}">{{hintTime===0? '获取验证码' : `${hintTime}s`}}</span>
          </div>
          <p class="err-msg">{{errMsg}}</p>
          <p class="login-desc">
            <a href="javascript:;">遇到问题?</a>
            <a href="javascript:;" @click="">使用密码验证登录</a>
          </p>
        </form>
        <div class="login-button" @click="loginByCode">登录</div>
        <div class="login-other">其他登录方式</div>
        <p class="register">注册账号&nbsp;></p>
      </div>-->

      <LoginSlot v-if="isLogin ===1" type="请输入手机号" codeOrPwd="请输入短信验证码">
        <span @click="getCode" :class="{disabledCode: hintTime>0}" slot="code">
          {{hintTime===0? '获取验证码' : `${hintTime}s`}}
        </span>
        <p class="login-desc" slot="login-desc">
          <a href="javascript:;">遇到问题?</a>
          <a href="javascript:;" >使用密码验证登录</a>
        </p>
        <p class="register" slot="register">注册账号&nbsp;></p>
      </LoginSlot>
      <LoginSlot v-if="isLogin ===2" type="邮箱账号" codeOrPwd="密码">
        <p class="login-desc" slot="login-desc">
          <a href="javascript:;">注册账号</a>
          <a href="javascript:;" >忘记密码</a>
        </p>
      </LoginSlot>
    </div>
  </div>
</template>

    <script>
      import Header from '../../components/header/Header.vue'
      import LoginSlot from '../../components/personal/login-slot/loginSlot.vue'
      export default {
        data () {
          return {
            isLogin: 0,  //0 个人中心  1 验证码登录  2邮箱登录
            hintTime: 0
          }
        },
        methods: {
          toggleLoginType(type){
            this.isLogin = type;
          },
          getCode(){
            if (this.hintTime > 0){
              return;
            }
            //开始倒计时
            // let cancel
            //const ajax = axios.get(....{
            // cancelToken: new CancelToken(function executor(c){
            //    cancel = c
            //  })
            // })
            this.hintTime = 59;
            this.timer=setInterval(()=>{
              this.hintTime--;
              if (this.hintTime<=0){
                clearInterval(this.timer)
                //如果没有返回值则取消之前的ajax发送
                //cancel()
              }
            },1000)
          }
        },
        components: {
          Header,
          LoginSlot
        }
      }
    </script>

    <style lang="stylus" rel="stylesheet/stylus" scoped>
      @import "../../../static/iconfont/iconfont.css"
      @import "../../common/stylus/mixins.styl"

      .personal-wrap
        font-size .6rem
        position absolute
        top px2rem(88)
        left 0
        right 0
        bottom 0
        background #f4f4f4
        .logo
          text-align: center
          width px2rem(750)
          height  px2rem(348)
          line-height  px2rem(348)
          img
            vertical-align middle
            width px2rem(300)
            height px2rem(104)
        &.defaultLogin
          background #fff
          .logo
            margin-top 1.5rem
            margin-bottom 3rem
            height  px2rem(64)
            line-height  px2rem(64)
            img
              height px2rem(64)
              width px2rem(192)
        .personal-button
          div
            color #fff
            text-align: center
            width px2rem(666)
            height  px2rem(86)
            line-height  px2rem(80)
            background #b4282d
            margin 0 auto
            &:last-child
              margin-top 1rem
              border 1px solid #b4282d
              background #f4f4f4
              color #b4282d
            i
              font-size .8rem
              margin-right .2rem
            span
              font-size .7rem

        .login-type
          position absolute
          bottom 1rem
          left 0
          right 0
          height px2rem(60)
          display flex
          justify-content space-around
          div
            height .6rem
            display flex
            align-items center
            justify-content center
            font-size .5rem
            a
              color gray
              i
                font-size .4rem
                margin-right .2rem
                margin-top .1rem
          .wx
            flex 1.5
          .qq
            flex 1
            border-left 1px solid gray
            border-right 1px solid gray
          .wb
            flex 1.5

        .login-wrap

          width 14rem
          margin 0 auto
          .login,.code
            margin-bottom  1.2rem
            padding-bottom .5rem
            border-bottom 1px solid #f4f4f4
            input
              width 14rem
              height .8rem
              outline none
              color gray
              &::-webkit-input-placeholder
                font-size .6rem
          .code
            margin-bottom  0
            position relative
            span
              position absolute
              right 0
              top 50%
              padding .2rem
              transform translateY(-50%)
              border 1px solid gray
              border-radius .2rem
              &.disabledCode
                background gray
          .login-desc
            display flex
            justify-content space-between
            a
              font-size .6rem
              &:first-child
                color gray
          .err-msg
            margin-top .4rem
            color #b4282d
            margin-bottom 1rem
          .login-button , .login-other
            height  px2rem(86)
            line-height  px2rem(86)
            text-align: center
            margin-top .5rem
            border-radius .2rem
          .login-button
            margin-top 1rem
            background #b4282d
            color #fff
          .login-other
            border 1px solid #b4282d
            color #b4282d

        .register
          margin-top 1rem
          font-size .7rem
          text-align: center
    </style>
