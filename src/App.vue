<template>
  <div id="app">
  <div class="content">
   <div class="card-wrapper">
        <card
      v-for="(card,index) in cards"
      :key="index"
      :art="card.code"
      :name="card.title"
      :price="card.code.toString()"
      :more="cards.length"
      :marked="card.inFav"
      @mark="toFav(card.id)"
    >
    <div slot="karak" class="karak" v-for="(item,idx) in card.params" :key="idx">
      <div class="name">{{item.name}}</div>
      <div class="value"> {{item.value}}</div>
    </div>
    </card>
   </div>
    <div class="sidebar">
    <div class="filter">
       <filters
      :selected="selected"
      @filter="filterItems"
      @clean="getPosts()"
    />
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Filters from './components/Filters.vue'
import Controller from './controllers/Item'

export default {
  name: 'App',
  components: {
    'card' : Card,
    'filters' : Filters
  },
  data(){
    return{
      cards: null,
      selected: [],
      test: null
    }
  },
  created: async function(){
    await this.getPosts()

  },
  methods:{
   async filterItems(data){
      const result = await Controller.filterItems(data)
      console.log('res', result)
      console.log('data',[...data])
      this.cards = result
    },
   async toFav(id){
     //Определяем индекс искомого объекта
     const current = this.cards.find(item=>item.id === id)
     const idx = this.cards.indexOf(current)
     //Получаем готовый объеки с новым значением с сервера
      const newItem= await Controller.addToFavorit(id)
      this.cards.splice(idx, 1, newItem)
    },
    async getPosts(){
      this.cards = await Controller.fetchPosts()
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
.karak{
  display: flex;
  justify-content: flex-start;
  .name{
    font-size: 14px;
    margin-right: 15px;
  }
}
.content{
  display: flex;
  width: 100%;
  .card-wrapper{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(226, 226, 226);
    padding: 10px;
    padding-right: 0;
  }
  .sidebar{
    width: 340px;
    background-color: rgb(226, 226, 226);
    padding: 10px;
    padding-left: 0;
    .filter{
      margin-top: 20px;
      padding: 30px;
      background-color: #fff;
    }
  }
}
</style>
