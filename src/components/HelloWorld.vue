<template>
  <div class="hello">
    <center>
      <h1>{{ msg }}</h1>
    </center>
    <center>
      github:
      <a>https://github.com/wuzhong233/Aragorn</a>
    </center>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "欢迎使用Aragorn"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  color: #f00;
  margin: 100px;
  font-size: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: transparent;
}
</style>
