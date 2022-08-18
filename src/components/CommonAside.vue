<template>
    <el-menu 
        default-active="1-4-1" 
        class="el-menu-vertical-demo" 
        background-color="#545c64" 
        text-color="#fff" 
        active-text-color="#ffd04b"
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse">
        <h3>后台管理系统</h3>
        <el-menu-item v-for="item in menu" :index="item.path" :key="item.path" @click="showPage(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    name:'CommonAside',
    data() {
      return {
        // 菜单栏的展开
        // isCollapse: false,
        menu:[{
            path:'/',
            name:'home',
            label:'首页',
            icon:'el-icon-s-home',
            url:'Home/Home'
        },
        {
            path:'/user',
            name:'user',
            label:'用户管理',
            icon:'el-icon-user',
            url:'UserManage/UserManage'
        }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showPage(item){
        // 实现页面跳转
        this.$router.push({
            name:item.name
        })
        //点击了item修改头部对应的标题
        this.$store.commit('changeTitle',item.label)
      }
    },
    computed:{
        isCollapse(){
            return this.$store.state.isCollapse
        }
    }
  }
</script>

<style scoped>
    .el-menu {
        height: 100%;
        border-right-color:transparent;
    }
    h3 {
        overflow: hidden;
        height: 25px;
        font-size: 17px;
        font-weight: 400;
        color: #fff;
        padding-left: 18px;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>