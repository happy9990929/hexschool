<template lang="pug">
    #category.category
        .category-container
            ul.category-list
                li: button(@click="setCategory('')") 全部商品
                li: button(@click="setCategory('bed')") 床架／床墊
                li: button(@click="setCategory('chair')") 椅子／沙發
                li: button(@click="setCategory('case')") 櫃子／桌子
                li: button(@click="setCategory('curtain')") 地毯／窗簾
</template>
<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(['setCategory']),
    },
};
</script>
<style lang="sass" scoped>
    $navyblue: #333D51
    $hnavyblue: #242b39
    $goldyellow: #D3AC2B
    $darkgray: #CBD0D8
    $lightgray: #F4F3EA

    *
        padding: 0
        margin: 0
        list-style: none
    .category-container
        width: 100%
        max-width: 250px
        border: 1px solid $darkgray
        background: $lightgray
        text-align: center
        border-radius: 5px
        .category-list
            li
                margin: 1%
                button
                    color: #888
                    border: 0
                    font-size: 16px
                    position: relative
                    outline: none
                    &:after
                        content: ''
                        height: 0
                        border-bottom: 1px solid blue
                        position: absolute
                        bottom: -1%
                        right: 50%
                        left: 50%
                        transition: .2s
                    &:hover
                        color: blue
                    &:hover:after
                        right: 0
                        left: 0
</style>
