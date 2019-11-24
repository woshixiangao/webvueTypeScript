<template>
  <div class="login-container">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
            <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="serchAll" :loading="logining">查询所有</el-button>
      </el-form-item>
    </el-form>
    <!-- <button @click="textClick">跳转abou5666t</button> -->
  </div>
</template>
<style scope>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Login extends Vue {
    private textClick(): void {
    console.log('sdfsd');
    this.$router.push({name:'about'})
    console.log(this.$store.state.count) // -> 1
  }
  logining = false;
  ruleForm2 = {
    username: 'admin',
    password: '123456'
  };
  rules2 = {
    username: [
      {
        required: true,
        message: 'please enter your account',
        trigger: 'blur'
      }
    ],
    password: [
      { required: true, message: 'enter your password', trigger: 'blur' }
    ],
  };
  created () {
   console.log('login-created');
  }
  private checked = false;
  private serchAll(){
            this.axios.get('/search_all_data',{headers: {'content-type': 'application/x-www-form-urlencoded'}})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // FUNCTION
      private handleSubmit(event: any) {
        console.log(this.ruleForm2.username);
        // this.$router.push({name:'home'})
        let that = this
        const params = new URLSearchParams();
      params.append('name', this.ruleForm2.username);
        this.axios.post('/login',params,{headers: {'content-type': 'application/x-www-form-urlencoded'}})
      .then( (response)=>{
        console.log(response.data);
        if(response.data.code==200){
          console.log("/home")
          console.log(this.ruleForm2.username);
          that.$router.push({name:'container'})
        }else{
          console.log("账户名和密码错误");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      // this.$refs.ruleForm2.validate(valid => {
      //   if (valid) {
      //     this.logining = true;
      //     if (
      //       this.ruleForm2.username === "admin" &&
      //       this.ruleForm2.password === "123456"
      //     ) {
      //       this.logining = false;
      //       sessionStorage.setItem("user", this.ruleForm2.username);
      //       this.$router.push("/home");
      //     } else {
      //       this.logining = false;
      //       this.$alert("username or password wrong!", "info", {
      //         confirmButtonText: "ok"
      //       });
      //     }
      //   } else {
      //     console.log("error submit!");
      //     return false;
      //   }
      // });
    }
}
</script>