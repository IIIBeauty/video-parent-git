<template>
    <el-container>

        <!--      <MyComponent :MyComponentMsg="msg" :changeContent="change"></MyComponent>-->
        <!--      <YourComponent :YourComponentMsg="msg" ></YourComponent>-->

        <el-header>视频管理系统</el-header>
        <el-container>
            <el-aside width="200px">
                <!-- 使用router -->
                <el-menu router>
                    <!-- index相当于router-link中的to -->
                    <el-menu-item index="/video">视频管理</el-menu-item>
                    <el-menu-item index="/speaker">主讲人管理</el-menu-item>
<!--                    <el-menu-item index="/sheet">课程管理</el-menu-item>-->
                </el-menu>

            </el-aside>

            <el-main>
                <router-view></router-view>
            </el-main>

        </el-container>
    </el-container>
</template>

<script>
    //在当前组件中引入moment.js
    //let moment = require("moment");
    //import moment from 'moment'
    //import MyComponent from "./components/MyComponent";

    export default {
        //components: {MyComponent},

    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<style>
    .el-header {
        background-color: #409EFF;
        color: #ffffff;
        line-height: 60px;
        font-size: 28px;
    }
</style>

