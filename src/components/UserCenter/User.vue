<template>
  <div id="User">

    <my-header></my-header>
    <my-top2></my-top2>

    <div class="m_content">

      <my-lefts></my-lefts>

      <div class="m_right">
        <div class="m_des">
          <table border="0" style="width:870px; line-height:22px;" cellspacing="0" cellpadding="0">
            <tr valign="top">
              <td width="115"><img src="@/assets/static/images/user.jpg" width="90" height="90" /></td>
              <td>
                <div class="m_user">TRACY</div>
                <p>
                  等级：注册用户 <br />
                  <font color="#ff4e00">您还差 270 积分达到 分红100</font><br />
                  上一次登录时间: 2015-09-28 18:19:47<br />
                  您还没有通过邮件认证 <a href="#" style="color:#ff4e00;">点此发送认证邮件</a>
                </p>
                <div class="m_notice">
                  用户中心公告！
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div class="mem_t">资产信息</div>
        <table border="0" class="mon_tab" style="width:870px; margin-bottom:20px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="33%">用户等级：<span style="color:#555555;">普通会员</span></td>
            <td width="33%">消费金额：<span>￥200元</span></td>
            <td width="33%">返还积分：<span>99R</span></td>
          </tr>
          <tr>
            <td>账户余额：<span>￥200元</span></td></td>
            <td>红包个数：<span style="color:#555555;">3个</span></td></td>
            <td>红包价值：<span>￥50元</span></td></td>
          </tr>
          <tr>
            <td colspan="3">订单提醒：
              <font style="font-family:'宋体';">待付款(<span>0</span>) &nbsp; &nbsp; &nbsp; &nbsp; 待收货(<span>2</span>) &nbsp; &nbsp; &nbsp; &nbsp; 待评论(<span>1</span>)</font>
            </td>
          </tr>
        </table>

        <div class="mem_t">账号信息</div>
        <table border="0" class="mon_tab" style="width:870px; margin-bottom:20px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="40%">用户ID：<span style="color:#555555;">12345678</span></td>
            <td width="60%">邀请人：<span style="color:#555555;">邀请人姓名</span></td>
          </tr>
          <tr>
            <td>电&nbsp; &nbsp; 话：<span style="color:#555555;">1861111111</span></td>
            <td>邮&nbsp; &nbsp; 箱：<span style="color:#555555;">12345678@qq.com</span></td>
          </tr>
          <tr>
            <td>身份证号：<span style="color:#555555;">522555123456789</span></td>
            <td>注册时间：<span style="color:#555555;">2015-10-10</span></td>
          </tr>
        </table>


      </div>
    </div>>
    <my-footer></my-footer>


  </div>

  </div>
</template>


<script>


  import MyLefts from "@/components/public/Lefts";
  import MyTop2 from "@/components/public/Top2";
  import MyHeader from "@/components/public/Header";
  import MyFooter from "@/components/public/Footer";

  export default {
    name: 'User',
    data () {
      return {
      }
    },
    components : {
      MyFooter : MyFooter,
      MyHeader : MyHeader,
      MyTop2 : MyTop2,
      MyLefts : MyLefts,

    },

  }
</script>



