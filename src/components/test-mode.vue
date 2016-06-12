<template>
  <div class="col-md-6">
    <select class="form-control" id="exampleInputEmail1">
      <option value='1'>限制时间</option>
      <option value='2'>限制数量</option>
      <option value='3'>无限制</option>
    </select>
  </div>
  <div class='col-md-4'>
    <div class="input-group">
      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
      <div class="input-group-addon">分钟</div>
    </div>
  </div>

</template>

<script>
export default {

  name: 'test-mode',

  data() {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>