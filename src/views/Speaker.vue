<template>
    <div>

        <el-main>

            <el-dialog
                    title="提示"
                    :visible.sync="updatedialogVisible"
                    width="30%">
                <el-form :model="speakerModel" :rules="rules" ref="updatemusicForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="名称" prop="speakerName">
                        <el-input v-model="speakerModel.speakerName"></el-input>
                    </el-form-item>

                    <el-form-item label="职位" prop="speakerJob">
                        <el-input v-model="speakerModel.speakerJob"></el-input>
                    </el-form-item>

                    <el-form-item label="简介" prop="speakerDesc">
                        <el-input v-model="speakerModel.speakerDesc"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="updatesubmitForm('updatemusicForm')">修改</el-button>
                        <!--                <el-button @click="updateresetForm('updatemusicForm')">重置</el-button>-->
                    </el-form-item>
                </el-form>
            </el-dialog>



            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%">
                <el-form :model="speakerModel" :rules="rules" ref="musicForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="名称" prop="speakerName">
                        <el-input v-model="speakerModel.speakerName"></el-input>
                    </el-form-item>

                    <el-form-item label="职位" prop="speakerJob">
                        <el-input v-model="speakerModel.speakerJob"></el-input>
                    </el-form-item>

                    <el-form-item label="简介" prop="speakerDesc">
                        <el-input v-model="speakerModel.speakerDesc"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('musicForm')">提交</el-button>
                        <el-button @click="resetForm('musicForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>


            <el-button type="success" @click="dialogVisible = true">添加</el-button>

            <el-table
                    :data="speakers"
                    border
                    style="width: 100%">
                <el-table-column
                        align="center"
                        prop="id"
                        label="编号">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="speakerName"
                        label="名称"
                        width="180">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="speakerJob"
                        label="职位"
                        width="180">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="speakerDesc"
                        label="简介"
                        width="180">
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="primary"
                                icon="el-icon-edit"
                                @click="handleEdit(scope.row.id)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                icon="el-icon-delete"
                                @click="handleDelete(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>


            </el-table>

            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :page-size="pageSize"
                    :total="total">
            </el-pagination>

        </el-main>

    </div>
</template>

<script>

    import moment from 'moment'

    export default {
        name: "Speaker",
        data() {
            return {

                //msg: 'app vue',

                speakerModel: {
                    id: '',
                    speakerName: '',
                    speakerJob: '',
                    speakerDesc: '',
                },
                rules: {
                    id: [
                        { required: true, message: '请输入编号', trigger: 'blur' },
                        { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                    ],
                    speakerName: [
                        { required: true, message: '请输入名称', trigger: 'blur' }
                    ]
                },
                dialogVisible:false,
                updatedialogVisible:false,
                speakers: [],
                pageSize:'',//每页显示多少条
                pageNum:'',//当前页
                total:''//总记录数
            }
        },
        methods: {

            change(massage){
                //this.msg = "bye vue";
                this.msg = massage;
            },

            updatesubmitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.axios.post('/speaker/updateSpeakerById',this.speakerModel)
                            .then(resp => {
                                if(resp.data == "success"){
                                    this.$refs[formName].resetFields();//清空下一次添加表单中的数据
                                    alert(formName)
                                    this.updatedialogVisible = false //关闭添加的对话框
                                    this.handleCurrentChange(this.pageNum);
                                }
                            })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.axios.post('/speaker/insertSpeaker',this.speakerModel)
                            .then(resp => {
                                if(resp.data == "success"){
                                    this.$refs[formName].resetFields();//清空下一次添加表单中的数据
                                    this.dialogVisible = false; //关闭添加的对话框
                                    this.handleCurrentChange(this.pageNum);
                                }
                            })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // updateresetForm(formName) {
            //   this.$refs[formName].resetFields();
            // },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            formatDate(row, column, currValue) {
                return moment(currValue).format('YYYY-MM-DD HH:mm:ss');
            },

            handleCurrentChange(pageNum) {
                this.$http.get("/speaker/findPage?pageNum="+pageNum).then((response) => {
                    this.speakers = response.data.list
                    this.pageSize = response.data.pageSize
                    this.pageNum = response.data.pageNum
                    this.total = response.data.total
                })
            },

            handleEdit(id) {
                this.$http.get("/speaker/findById/"+id).then((response) => {

                    this.speakerModel = response.data;
                    //alert(this.musicModel.musicName)
                    this.updatedialogVisible = true;
                })
            },
            handleDelete(id) {
                //alert(musicId)

                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });

                    this.$http.get("/speaker/deleteById/"+id).then((response) => {
                        if(response.data == 'success'){
                            this.handleCurrentChange(this.pageNum);//跳转到当前页
                        }
                    })


                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });


            }

        },
        mounted() {
            //axios.js
            // this.$http.get("/music/findAll").then((response) => {
            //   this.musics = response.data
            // })

            this.$http.get("/speaker/findPage").then((response) => {
                this.speakers = response.data.list
                this.pageSize = response.data.pageSize
                this.pageNum = response.data.pageNum
                this.total = response.data.total
            })

        },

        //to：去哪
        //from：从哪来
        //next：访问下一步
        beforeRouteEnter:function (to,from,next) {
            alert(to.path);
            alert(from.path);
            //next();

            let meta = to.meta;
            let flag = false;
            meta.forEach(permission => {
                if(permission.indexOf("speaker:list")>-1){
                    flag = true;
                }
            })

            //判断
            if(flag) {
                next();
            }else{
                next({
                    path:'/login'
                })
            }
        }
    }
</script>

<style scoped>

</style>

<!-- 设置容器样式 -->
<style>

    .el-pagination {
        text-align: center;
        margin-top: 10px;
    }

    .el-table {
        margin-top: 10px;
    }
</style>