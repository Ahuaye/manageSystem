<template>
    <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="login-container">
        <h3 class="login-title">系统登录</h3>
        <el-form-item
            label="用户名"
            label-width="80px"
            prop="username"
            class="username"
        >
            <el-input
                type="input"
                v-model="form.username"
                autocomplete="off"
                placeholder="请输入账号"
            ></el-input>
        </el-form-item>
        <el-form-item
            label="密码"
            label-width="80px"
            prop="password"
            >
            <el-input
                type="password"
                v-model="form.password"
                autocomplete="off"
                placeholder="请输入密码"
            ></el-input>
        </el-form-item>
        <el-form-item class="login-submit">
            <el-button type="primary" @click="login" class="login-submit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name:'Login',
    data() {
        return {
            form:{},
            rules:{
                username:[{
                    required:true,message:"请输入用户名",trigger:"blur"
                },
                {
                    min:3,
                    message:"用户名长度不能小于3位",
                    trigger:"blur"
                }
                ],
                password:[{
                    required:true,message:"请输入密码",trigger:"blur"
                }]
            }
        }
    },
    methods:{
        login(){

        }
    }
}
</script>

<style>
    .login-container {
        /* background-clip: padding-box; */
        border-radius: 15px;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background-color: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .login-title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .login-submit {
        margin: 10px auto 0 auto;
    }
</style>