<!--<template>-->
<!--    <div>-->
<!--    <el-container>-->
<!--        <el-main>-->
<!--            <el-row>-->
<!--                <el-col :span="12" :offset="6">-->
<!--                    <el-card class="box-card">-->
<!--                        <div slot="header" class="clearfix">-->
<!--                            <span>用户登录</span>-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <el-form :model="loginInfo">-->
<!--                                <el-form-item label="用户名">-->
<!--                                    <el-input v-model="loginInfo.username"></el-input>-->
<!--                                </el-form-item>-->
<!--                                <el-form-item label="密码">-->
<!--                                    <el-input v-model="loginInfo.password"></el-input>-->
<!--                                </el-form-item>-->
<!--                                <el-form-item>-->
<!--                                    <el-button type="primary" @click.prevent="login">登录</el-button>-->
<!--                                </el-form-item>-->
<!--                            </el-form>-->
<!--                        </div>-->
<!--                    </el-card>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--        </el-main>-->
<!--    </el-container>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    //导入vue-cookies-->
<!--    import VueCookies from 'vue-cookies'-->

<!--    export default {-->
<!--        name: "Login",-->
<!--        data(){-->
<!--            return{-->
<!--                loginInfo:{-->
<!--                    username:"",-->
<!--                    password:""-->
<!--                }-->
<!--            }-->
<!--        },-->
<!--        methods:{-->
<!--            login(){-->
<!--                this.axios.post("/user/login",this.loginInfo)-->
<!--                    .then(resp => {-->
<!--                        //登录成功后，将token设置到cookie中，然后跳转页面-->
<!--                        let token = resp.data.token;-->
<!--                        alert(token)-->
<!--                        VueCookies.set("token",token);-->

<!--                        this.$router.push({path:'/index'})-->
<!--                    })-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->