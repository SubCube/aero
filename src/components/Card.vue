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
          <subscribe
          @mark="$emit('mark')"
          :marked="marked"
          />
          <!-- <i class="fa fa-heart"  :style="marked && {color:'red'}" @click="$emit('mark')"></i> -->
          <i class="fa fa-rocket"></i>
        </div>
      </div>
    </div>
</template>

<script>
import Subscribe from './Subscribe'

export default {
  name: 'Card',
  components:{
    'subscribe' : Subscribe
  },
  props: {
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
    marked: {
      type: Boolean,
      default:false
    },
  },
  data(){
    return{
      // markeddd: false
    }
  }
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
    .fa.fa-rocket{
      margin-left: 20px;
    }
    .fa.fa-heart{
      cursor: pointer;
    }
  }
}
</style>
