<template>
    <div class="card">
      <div class="top">
        <div class="stars"><span v-for="index in 5" :key="index"><i class="fa fa-star" ></i></span></div>
        <div class="code">Арт {{art}}</div>
      </div>
      <div class="card-img"><img src="../assets/logo.png" alt="logo"></div>
      <div class="card-name">{{name}}</div>
      <slot name="karak"></slot>
      <div class="card-price">{{price}} руб</div>
      <div class="more"> + {{more}} бонуса</div>
      <div class="shopping">
        <button class="btn"><i class="fa fa-shopping-cart"></i> Купить</button>
        <div class="icons">
          <i class="fa fa-heart-o"></i>
          <i class="fa fa-heart"></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String,
    art: {
      type: Number,
    },
     name: {
      type: String,
      default: ''
    },
     price: {
      type: String,
      default: ''
    },
     more: {
      type: Number,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
  max-width: 320px;
  margin: 20px 20px 0 0;
  background-color: #fff;
  padding: 15px;
  .top{
    display: flex;
    justify-content: space-between;
  }
  &-name{
    font-size: 20px;
    color: #252525;
    margin: 10px 0;
  }
  &-img{
    text-align: center;
  }
  &-price{
    font-size: 32px;
    font-weight: 600;
    color: #252525;
    margin-top: 20px;
  }
  .shopping{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .btn{
      background-color: rgb(25, 108, 216);
      padding: 10px;
      color: #fff;
    }
    .fa-heart-o{
      margin-right: 20px;
    }
  }
}
</style>
