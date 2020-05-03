<template>
  <div class="Sdk">
    <label class="xrequired">SDK名称 :</label>
    <input type="text" value class="SDK_name" />
    <br />
    <label class="xrequired" style="margin-left:31px">SDK :</label>
    <input type="text" value class="SDK" />
    <br />
    <label class="xrequired" style>服务名称 :</label>
    <input type="text" value class="serve_name" />
    <br />
    <label class="xrequired" style="margin-left:16px">操作员 :</label>
    <input type="text" value class="ctrlor" />
    <br />
    <label class="xrequired" style="margin-left:-14px">操作员密码 :</label>
    <input type="text" value class="ctrl_pass" />
    <br />
    <label class="xrequired" style>加速域名 :</label>
    <input type="text" value class="domain" />
    <br />默认上传方式 :
    <input type="checkbox" name="sex" id="male" class="chooseBtn" />
    <label for="male" class="choose-label" style="margin-left:10px"></label>
    <br />
    <div>
      <button class="save">保存到应用</button>
      <button class="test">测试链接</button>
    </div>
  </div>
</template>
<style scoped>
label.xrequired:before {
  content: "* ";
  color: red;
}
input {
  margin: 20px;
}
.chooseBtn {
  display: none;
}

.choose-label {
  box-shadow: #ccc 0px 0px 0px 1px;
  width: 40px;
  height: 20px;
  display: inline-block;
  border-radius: 20px;
  position: relative;
  background-color: #bdbdbd;
  overflow: hidden;
}

.choose-label:before {
  content: "";
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 20px;
  background-color: #fff;
  z-index: 20;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.chooseBtn:checked + label.choose-label:before {
  left: 20px;
}

.chooseBtn:checked + label.choose-label {
  background-color: #51ccee;
}
.save {
  position: absolute;
  border: none;
  border-radius: 5px;
  background-color: #51ccee;
  color: white;
  width: 100px;
  height: 30px;
  bottom: 10px;
}
.test {
  position: absolute;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  bottom: 10px;
  border: 1px solid #cccccc;
  left: 500px;
}
</style>