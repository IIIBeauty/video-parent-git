<template>
    <div>
        <h1>MyComponent...{{ MyComponentMsg }}</h1>


        <el-button @click="changeContent('MyComponent vue')">修改内容</el-button>
    </div>

</template>

<script>
    export default {
        name: "MyComponent",
        //用于组件之间的数据传值
        //props:["MyComponentMsg"]
        props:
            {
                MyComponentMsg:{
                        type:String,
                        required:true,
                        default:'defaultMyComponent'
                },

                changeContent:{
                    type:Function
                }

            },
        //当前组件的属性（全局变量）
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>