<template>
    <el-container style="height:100%">
        <el-aside width="auto">
            <CommonAside/>
        </el-aside>
        <el-container>
            <el-header>
                <CommonHeader/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside'
import CommonHeader from '../src/components/CommonHeader';
export default {
    name:'Home',
    components:{
        CommonAside,
        CommonHeader
    },
    data(){
        return{

        }
    },
    
}
</script>

<style>
    .el-header{
        background-color: #333;
    }
    .el-main {
        padding-top: 20px;
    }
</style>
