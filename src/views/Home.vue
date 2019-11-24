<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="textClick">跳转abou5666t</button>
    <el-row>
      <el-button @click="textClick">登录{{ $store.state.count }}</el-button>
    </el-row>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
  <!-- <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container> -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import store from '../store';
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private textClick(): void {
    console.log('sdfsd');
    this.$router.push({name:'login'})
    console.log(this.$store.state.count) // -> 1
  }
  created () {
   console.log('Home-created');
  }
}
</script>
