<template>
 <div class="wrapper">
     <div class="button-wrapper">
         <button class="btn" @click="$emit('filter', selected)">Показать результат</button>
         <button class="btn gray" @click="selected.splice(0,selected.length)">Очистить фильтр</button>
     </div>
      <div class="item" v-for="item in filter" :key="item.id">
          <input type="checkbox" :id="item.id" :value="item.name" v-model="selected">
            <label :for="item.id">{{item.name}}</label>
      </div>
 </div>
</template>

<script>
export default {
    name: 'Filters',
    data(){
        return{
                  filter:[
                    {id:1, name: 'Canon'},
                    {id:2, name: 'Fijufilm'},
                    {id:3, name: 'Nikon'},
                    {id:4, name: 'Panasonic'},
                    {id:5, name: 'Leika'},
                    {id:6, name: 'Canon1'},
                    {id:7, name: 'Fijufilm1'},
                    {id:8, name: 'Nikon1'},
                    {id:9, name: 'Panasonic1'},
                    {id:10, name: 'Leika1'},
                ],
      selected: []
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item{
        width: calc(50% - 10px);
        input:checked + label{
            color: rgb(25, 108, 216);
        }
        margin-bottom: 5px;
    }
    .button-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        .btn{
            cursor: pointer;
            font-size: 20px;
            width: 100%;
            background-color: rgb(25, 108, 216);
            padding: 10px;
            color: #fff;
            margin-bottom: 10px;
            &.gray{
            background-color: rgb(197, 199, 202);
            color: rgb(39, 37, 37);
            }
        }
    }
}
</style>
