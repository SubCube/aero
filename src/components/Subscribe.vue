<template>
          <i class="fa fa-heart"  :style="marked && {color:'red'}" @click="$emit('mark')"></i>
</template>

<script>
export default {
    name: 'Subscribe',
    props:{
        marked: {
            type: Boolean,
            default:false
            },
    }
}
</script>

<style lang="scss" scoped>

</style>
