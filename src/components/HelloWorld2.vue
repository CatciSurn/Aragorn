<template>
  <div id="login">
    <h1>Login</h1>
    <form method="post">
      <input type="text" required="required" placeholder="用户名" name="u" />
      <input type="password" required="required" placeholder="密码" name="p" />
      <button class="but" type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  position: absolute;
  top: 50%;
  left: 60%;
  margin: -150px 0 0 -150px;
  width: 500px;
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
}
#login h1 {
  text-shadow: 0 0 10px;
  letter-spacing: 1px;
  text-align: center;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
input {
  width: 278px;
  height: 18px;
  margin-bottom: 10px;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px;
  border-top: 1px solid #312e3d;
  border-left: 1px solid #312e3d;
  border-right: 1px solid #312e3d;
  border-bottom: 1px solid #56536a;
  border-radius: 4px;
  background-color: #2d2d3f;
}
.but {
  width: 300px;
  min-height: 20px;
  display: block;
  background-color: #4a77d4;
  border: 1px solid #3762bc;
  color: #fff;
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  border-radius: 5px;
  /* margin: 0; */
  margin-left: 100px;
}
</style>
