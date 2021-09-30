<template>
  <div class="container">
    <Header  title="Topic Tracker"/>
    <Topics @toggle-reminder="toggleReminder" @delete-topic="deleteTopic" :topics="topics" :articles="articles"/>
  </div>
</template>




<script>

import Header from './components/Header.vue'
import Topics from './components/Topics.vue'

export default {
  name: 'App',
  components: {
    Header,
    Topics,
  },
  data() {
    return {
      topics: [],
      articles: []
    }
  },
  methods:  {
    deleteTopic(id) {
      if(confirm('Are you sure?')) {
        this.topics = this.topics.filter((topic)=> topic.id !== id)
      }
    },
    toggleReminder(id) {
      this.topics = this.topics.map((topic)=> topic.id === id ? {...topic, reminder: !topic.reminder} : topic)
    },
    async fetchTopics() {
      const res = await fetch('api/topics.json')

      const data = await res.json()

      return data
    },
    async fetchTopic(id) {
      const res = await fetch(`api/topics/${id}.json`)

      const data = await res.json()

      return data
    },
    async fetchArticles() {
      const res = await fetch('api/articles.json')

      const data = await res.json()

      return data
    },
    async fetchArticle(id) {
      const res = await fetch(`api/article/${id}.json`)

      const data = await res.json()

      return data
    }
  },

  async created() {
    this.topics = await this.fetchTopics()
    this.articles = await this.fetchArticles()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
