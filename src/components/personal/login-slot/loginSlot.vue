<template>
  <div class="login-wrap">
    <form >
      <div class="login">
        <input type="text" :placeholder="type" @blur="regPhoneCode()" v-model="phone">
      </div>

      <div class="code">
        <input type="text" :placeholder="codeOrPwd" @blur="regPhoneCode()" v-model="code">
        <slot name="code"></slot>
        <!--<span @click="getCode" :class="{disabledCode: hintTime>0}">{{hintTime===0? '获取验证码' : `${hintTime}s`}}</span>-->
      </div>
      <p class="err-msg">{{errMsg}}</p>
      <slot name="login-desc"></slot>
      <!--<p class="login-desc">-->
        <!--<a href="javascript:;">遇到问题?</a>-->
        <!--<a href="javascript:;" @click="">使用密码验证登录</a>-->
      <!--</p>-->
    </form>
    <div class="login-button" @click="loginByCode">登录</div>
    <div class="login-other">其他登录方式</div>
    <slot name="register"></slot>
    <!--<p class="register">注册账号&nbsp;></p>-->
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data(){
      return {
        phone: '',
        errMsg: '',
        code: null,
        isReg: false,
        hintTime: 0
      }
    },
    props:{
      type: String,
      codeOrPwd: String
    },
    methods: {
      regPhoneCode(){
        const phoneReg= /^1\d{10}$/;
        const codeReg= /\d{6}/;
        if (!phoneReg.test(this.phone)){
          this.errMsg = '手机格式错误';
          this.isReg = false;
          return
        }
        if (!codeReg.test(this.code)){
          this.errMsg = '验证码格式错误'
          this.isReg = false;
          return
        }
        if (this.code != '123456') {
          this.errMsg = '验证码错误'
          this.isReg = false;
          return
        }
        this.isReg = true;
        this.errMsg = '';
      },
      loginByCode(){
        if (!this.isReg) {
          return
        } else {
          //xxxxxx
          MessageBox.alert('登录成功')
        }
      },

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
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
