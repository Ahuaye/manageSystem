<template>
    <header>
        <div class="h-content">
            <el-button plain icon="el-icon-menu" size="mini" @click="handleAside"></el-button>
            <h3 style="color:#fff">{{$store.state.label}}</h3>
            <el-dropdown trigger="hover">
                <span>
                    <img :src="userImg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="u-content">
            
        </div>
    </header>
</template>

<script>
export default {
    name:'CommonHeader',
    data(){
        return{
            userImg:require('../assets/images/460.jpg')
        }
    },
    methods:{
        handleAside(){
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 100%;
    }
    .h-content {
        width: 100%;
        height: 100%;
    }
    .el-button {
        float: left;
        margin-top: 17px;
    }
    .el-button:hover {
        border-color: #ffd04b;
        color: #ffd04b;
    }
    h3 {
        float: left;
        margin-left: 10px;
        font-size: 18px;
        font-weight: 400;
    }
    .el-dropdown {
        float: right;
    }
    .el-dropdown span {
        display: block;
        width: 35px;
        height: 35px;
        margin-top: 10px;
    }
    .el-dropdown span img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
</style>