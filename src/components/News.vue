<template>
    <div class="news">
        <b-card>
            <div class="news-header">
                <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                <div class="news-header-info">
                    <a href="#" class="title"><b-card-title>{{title}}</b-card-title></a>
                    <b-card-sub-title>{{date}}</b-card-sub-title>
                    <b-card-text>from <a href="#" class="designed-color">{{author}}</a></b-card-text>
                </div>
            </div>
            <hr>
            <b-card-sub-title><p>{{text}}</p></b-card-sub-title>
            <div class="news-footer">
                <div class="news-footer-likes">
                    <span>{{likes}}</span>
                    <b-button type="button" variant="link" class="button-edit">
                        <b-icon icon="suit-heart-fill" class="designed-color" font-scale="1.2"></b-icon>
                    </b-button>
                </div>
                
                <div class="news-footer-edit">
                    <b-button @click="showEdit=true" type="button" variant="link" class="button-edit">
                        <b-icon icon="pencil-fill" color="blue" font-scale="1.2"></b-icon>
                    </b-button>
                    <b-modal v-model="showEdit" hide-footer hide-header title="Create News">
                        <div class="form-header">
                            <h4>Edit News</h4>
                            <b-button @click="showEdit=false" type="button" class="btn-close" aria-label="Close"></b-button>
                        </div>
                        <NewsEditForm 
                            :id="this.id" 
                            :title="this.title" 
                            :date="this.date" 
                            :author="this.author" 
                            :text="this.text" 
                            :likes="this.likes" 
                        />
                    </b-modal>
                    <b-button type="button" variant="link" class="button-edit" @click="onDelete">
                        <b-icon icon="trash" color="red" font-scale="1.2"></b-icon>
                    </b-button>
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import NewsEditForm from "./NewsEditForm.vue";

export default {
  name: 'NewsItem',
  data(){
    return{
        showEdit: false
    }
  },
    components: {
    NewsEditForm
},
  props: {
    id: String,
    title: String,
    date: String,
    author: String,
    text: String,
    likes: String
  },
    methods: {
    ...mapMutations(["deleteItem"]),
    onDelete() {
        this.deleteItem(this.id);
    }
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
.title{
    color: #111;
    text-decoration: none;
}
p{
    text-align: justify;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
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
.form-header{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
}
</style>
