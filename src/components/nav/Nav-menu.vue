<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo no-border"
    @open="handleOpen"
    @close="handleClose"
    background-color="transparent"
    text-color="#fff"
    router
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-zoom-in"></i>
        <span>首页</span>
      </template>
      <el-menu-item-group>
        <template slot="title">欢迎页面</template>
        <el-menu-item index="1-1" route="/hello">欢迎页面</el-menu-item>
        <el-menu-item index="1-2"></el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title>
        <el-menu-item index="1-3"></el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title"></template>
        <el-menu-item index="1-4-1"></el-menu-item>
        <el-menu-item index="1-4-2"></el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2" route="/sdk">
      <i class="el-icon-menu"></i>
      <span slot="title">SDK</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">API</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-upload"></i>
      <span slot="title">上传</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <span slot="title">设置</span>
    </el-menu-item>
    <el-menu-item index="6" route="/about">
      <i class="el-icon-warning"></i>
      <span slot="title">关于我们</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Nav-menu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-submenu__title:hover,
.el-menu-item:hover {
  background: #3b526a !important;
}
</style>