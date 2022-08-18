<template>
    <el-row :gutter="20">
        <el-col :span="8" style="margin-top:20px">
            <el-card shadow="hover">
                <div class="user">   
                    <div class="userInfo">
                        <img :src="userImg">
                        <div class="content">
                            <h2 class="name">Admin</h2>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <hr>
                    <div class="loginInfo">
                        <p>上次登录时间：<span>2022-8-14</span> </p>
                        <p>上次登录地点：<span>湖南</span> </p>
                    </div>
                </div>
            </el-card>
            <el-card style="margin-top:20px;height: 350px;">
                <el-table :data="tableData">
                    <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{padding:0}" style="margin-top:20px">
                    <i class="icon" :class="item.icon" :style="{backgroundColor:item.color}"></i>
                    <div class="detail">
                        <p class="price">￥{{item.value}}</p>
                        <p class="txt">￥{{item.name}}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height:410px;margin-top: 80px;">
                <div style="height:410px" ref="echarts"></div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import {getData} from '../../api/data.js'
import * as echarts from 'echarts'
export default {
    name:'Home',
    data(){
        return{
            userImg:require('@/assets/images/460.jpg'),
            tableData:[],
            tableLabel:{
                name:'品牌',
                tadayBuy:'今日购买',
                monthBuy:'本月购买',
                totalBuy:'总共购买',
            },
            countData:[
                {
                    name:'今日支付订单',
                    value:210,
                    icon:'el-icon-success',
                    color:'#2ec7c9'
                },
                {
                    name:'今日收藏订单',
                    value:280,
                    icon:'el-icon-star-on',
                    color:"#ffb980"
                },
                {
                    name:'今日未支付订单',
                    value:123,
                    icon:'el-icon-goods',
                    color:"#5ab1ef"
                },
                {
                    name:'本月支付订单',
                    value:666,
                    icon:'el-icon-success',
                    color:"#2ec7c9"
                },
                {
                    name:'本月收藏订单',
                    value:888,
                    icon:'el-icon-star-on',
                    color:"#ffb980"
                },
                {
                    name:'本月未支付订单',
                    value:420,
                    icon:'el-icon-goods',
                    color:"#5ab1ef"
                }
            ]
        }
    },
    mounted(){
        getData().then(res =>{ 
            // 取到后端的数据
            const {code,data}= res.data
            if(code===20000){
                this.tableData = data.tableData
                const order = data.orderData
                const xData = order.date
                const keyArr = Object.keys(order.data[0])
                const series = []
                keyArr.forEach(key=>{
                    series.push({
                        name:key,
                        data:order.data.map(item=>item[key]),
                        type:'line'
                    })
                })
                const option={
                    xAxis:{
                        data:xData
                    },
                    yAxis:{},
                    legend:{
                        data:keyArr
                    },
                    series
                }
                const E=echarts.init(this.$refs.echarts)
                E.setOption(option)
            }
            // console.log(res);
        })
    }
}
</script>

<style scoped>
    .user {
        width: 100%;
        height: 200px;
    }

    .userInfo {
        width: 100%;
        height: 100px; 
        padding-left:20px ;
    }
    .userInfo img {
       float: left;
       width: 100px;
       height: 100px;
       border-radius: 50%;
    }
    .content {
        float: left;
        margin-left: 20px;
    }
    .content h2 {
        height: 20px;
    }
    .content p {
        margin-top: 10px;
        color: #a3a2a2;
        font-size: 14px;
    }
    .loginInfo {
        width: 100%;
        height: 100px;
        color: #a3a2a2;
        font-size: 14px;
    }
    hr {
        margin: 15px 0;
        border-color:transparent ;
        border-top-color: rgb(224, 224, 224);
    }
    .num {
        height: 144px;

    }
    .num .el-card {
        float: left;
        width: 255px;
        height: 70px;   
        margin-right: 20px;
        padding: 0;
    }
    .num .el-card .icon {
        float: left;
        display: block;
        width: 70px;
        height: 70px;
        font-size: 35px;
        text-align: center;
        line-height: 70px;
    }
    .detail{
        float: left;
    }
    .detail .price {
        font-size: 20px;
        margin-top: 8px;
        margin-bottom: 0;
        margin: 8px 0 0 10px;
    }
    .detail .txt {
        margin-top:5px ;
        margin-left: 10px;
        color: #ccc;
        font-size: 12px;
    }
    .graph .el-card {
        float: left;
    }
</style>