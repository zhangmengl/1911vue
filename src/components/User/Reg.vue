<template>
  <div id="Reg">

    <my-header ></my-header>


    <!--Begin Reg Begin-->
    <div class="log_bg">
      <div class="top">
        <div class="logo"><a href="Index.html"><img src="@/assets/static/images/logo.png" /></a></div>
      </div>
      <div class="regist">
        <div class="log_img"><img src="@/assets/static/images/l_img.png" width="611" height="425" /></div>
        <div class="reg_c">
          <form>
            <table border="0" style="width:420px; font-size:14px; margin-top:20px;" cellspacing="0" cellpadding="0">
              <tr height="50" valign="top">
                <td width="95">&nbsp;</td>
                <td>
                  <span class="fl" style="font-size:24px;">注册</span>
                  <span class="fr">已有商城账号，<router-link :to="{name : 'Login'}" style="cursor: pointer">我要登录</router-link></span>
                </td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;用户名 &nbsp;</td>
                <td><input type="text" value="" class="l_user" /></td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;密码 &nbsp;</td>
                <td><input type="password" value="" class="l_pwd" /></td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;确认密码 &nbsp;</td>
                <td><input type="password" value="" class="l_pwd" /></td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;邮箱 &nbsp;</td>
                <td><input type="text" value="" class="l_email" /></td>
              </tr>
              <tr height="50">
                <td align="right"><font color="#ff4e00">*</font>&nbsp;手机 &nbsp;</td>
                <td><input type="text" value="" class="l_tel" /></td>
              </tr>
              <tr height="50">
                <td align="right">邀请人会员名 &nbsp;</td>
                <td><input type="text" value="" class="l_mem" /></td>
              </tr>
              <tr height="50">
                <td align="right">邀请人ID号 &nbsp;</td>
                <td><input type="text" value="" class="l_num" /></td>
              </tr>
              <tr height="50">
                <td align="right"> <font color="#ff4e00">*</font>&nbsp;验证码 &nbsp;</td>
                <td>
                  <input type="text" value="" class="l_ipt" />
                  <a href="#" style="font-size:12px; font-family:'宋体';">换一张</a>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="font-size:12px; padding-top:20px;">
                	<span style="font-family:'宋体';" class="fl">
                    	<label class="r_rad"><input type="checkbox" /></label><label class="r_txt">我已阅读并接受《用户协议》</label>
                    </span>
                </td>
              </tr>
              <tr height="60">
                <td>&nbsp;</td>
                <td><input type="submit" value="立即注册" class="log_btn" /></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
    <!--End Reg End-->

    <!--Begin Footer Begin-->
    <div class="btmbg">
      <div class="btm">
        备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
        <img src="@/assets/static/images/b_1.gif" width="98" height="33" /><img src="@/assets/static/images/b_2.gif" width="98" height="33" /><img src="@/assets/static/images/b_3.gif" width="98" height="33" /><img src="@/assets/static/images/b_4.gif" width="98" height="33" /><img src="@/assets/static/images/b_5.gif" width="98" height="33" /><img src="@/assets/static/images/b_6.gif" width="98" height="33" />
      </div>
    </div>
    <!--End Footer End -->

  </div>
</template>


<script>



  import MyHeader from "@/components/public/Header";

  export default {
    name: 'Reg',
    data () {
      return {
      }
    },
    components : {
      MyHeader : MyHeader,
    },

  }
</script>



