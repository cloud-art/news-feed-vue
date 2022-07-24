<template>
  <div class="news-panel">
    <div class="news-panel-header">
      <!-- CREATE NEWS -->
      <b-button v-b-modal.modal-1 squared>CREATE NEWS</b-button>
      <b-modal id="modal-1" hide-footer hide-header title="Create News">
        <div class="form-header">
          <h4>Create News</h4>
          <b-button pill variant="primary" font-scale="1.2">X</b-button>
        </div>
        <NewsAddForm />
      </b-modal>
    </div>
    <div class="news-panel-body" v-for="item in allNews" :key="item.id">
      <News :title="item.title" :date="item.date" :author="item.author" :text="item.text" :likes="item.likes"/>
    </div>

  </div>
</template>

<script>
import News from './News.vue'
import NewsAddForm from './NewsAddForm.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'NewsPanel',
  computed: mapGetters(['allNews']),
  components: {
    News,
    NewsAddForm
  },
  async mounted() {
    this.$store.dispatch('fetchNews')
  }
}
</script>

<style scoped>
  .form-header{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  .news-panel{
    border: 1px solid rgb(216, 216, 216);
    margin: auto;
    width: 1150px;
  }
  .news-panel-body{
    margin: 40px
  }
</style>
