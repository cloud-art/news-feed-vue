<template>
    <div class="news">
        <b-card>
            <div class="news-header">
                <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                <div class="news-header-info">
                    <b-card-title>{{title}}</b-card-title>
                    <b-card-sub-title>{{date}}</b-card-sub-title>
                    <b-card-text>from <a href="#" class="designed-color">{{author}}</a></b-card-text>
                </div>
            </div>
            <hr>
            <b-card-sub-title>{{text}}</b-card-sub-title>
            <div class="news-footer">
                <div class="news-footer-likes">
                    <span>{{likes}}</span>
                    <b-link class="button-edit"><b-icon icon="suit-heart-fill" font-scale="1.2"></b-icon></b-link>
                </div>
                
                <div class="news-footer-edit">
                    <b-link class="button-edit"><b-icon icon="pencil-fill" color="blue" font-scale="1.2"></b-icon></b-link>
                    <b-link class="button-edit"><b-icon icon="trash" color="red" font-scale="1.2"></b-icon></b-link>
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: 'NewsItem',
    methods: {
    ...mapMutations(["deleteItem"]),
    onDelete(event) {
        event.preventDefault()
        this.addItem(this.id)
    }
  },
  props: {
    id: Number,
    title: String,
    date: String,
    author: String,
    text: String,
    likes: String
  }
}
</script>

<style scoped>
a:hover{
    color: rgba(197, 17, 98, 0.7);
}
.news-header{
    display:flex;
    justify-content: start;
    align-items: center;
}
.news-header-info{
    display:flex;
    flex-direction: column;
    align-items: start;
    padding-left: 15px;
}
.news-footer{
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 10px 0px;
}
.button-edit{
    padding: 0px 10px 0px 10px;
}
.button-edit:hover{
    opacity: 0.5;
}
</style>
