<template>
  <div id="User">

    <my-header></my-header>
    <my-top2></my-top2>

    <div class="m_content">

      <my-lefts></my-lefts>

      <div class="m_right">
        <p></p>
        <div class="mem_tit">我的订单</div>
        <table border="0" class="order_tab" style="width:930px; text-align:center; margin-bottom:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="20%">订单号</td>
            <td width="25%">下单时间</td>
            <td width="15%">订单总金额</td>
            <td width="25%">订单状态</td>
            <td width="15%">操作</td>
          </tr>
          <tr>
            //接受订单号
            //$order_no=inut('get.order_no');
            $order_no='';
            //根据订单号查询物流信息
            <td><font color="#ff4e00"><a href="aa?order_no=2015092823056">2015092823056</a></font></td>
            <td>2015-09-26   16:45:20</td>
            <td>￥456.00</td>
            <td>未确认，未付款，未发货</td>
            <td>取消订单</td>
          </tr>
          <tr>
            <td><font color="#ff4e00">2015092823056</font></td>
            <td>2015-09-26   16:45:20</td>
            <td>￥456.00</td>
            <td>已确认，已付款，已发货</td>
            <td><font color="#ff4e00">已确认</font></td>
          </tr>
          <tr>
            <td><font color="#ff4e00">2015092823056</font></td>
            <td>2015-09-26   16:45:20</td>
            <td>￥456.00</td>
            <td>未确认，未付款，未发货</td>
            <td>取消订单</td>
          </tr>
          <tr>
            <td><font color="#ff4e00">2015092823056</font></td>
            <td>2015-09-26   16:45:20</td>
            <td>￥456.00</td>
            <td>已确认，已付款，已发货</td>
            <td><font color="#ff4e00">已确认</font></td>
          </tr>
          <tr>
            <td><font color="#ff4e00">2015092823056</font></td>
            <td>2015-09-26   16:45:20</td>
            <td>￥456.00</td>
            <td>未确认，未付款，未发货</td>
            <td>取消订单</td>
          </tr>
          <tr>
            <td><font color="#ff4e00">2015092823056</font></td>
            <td>2015-09-26   16:45:20</td>
            <td>￥456.00</td>
            <td>已确认，已付款，已发货</td>
            <td><font color="#ff4e00">已确认</font></td>
          </tr>
          <tr>
            <td><font color="#ff4e00">2015092823056</font></td>
            <td>2015-09-26   16:45:20</td>
            <td>￥456.00</td>
            <td>未确认，未付款，未发货</td>
            <td>取消订单</td>
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



