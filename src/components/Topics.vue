<template>
    <div :key="topic.id" v-for="topic in topics">
        <Topic @delete-topic="$emit('delete-topic', topic.id)" @toggle-reminder="$emit('toggle-reminder', topic.id)" :topic="topic" :articles="getArticlesForTopic(topic.id)"/>
    </div>
</template>

<script>
    import Topic from './Topic.vue'
    export default {
        name: 'Topics',
        props: {
            topics: Array,
            articles: Array
        },
        components: {
            Topic
        },
        emits: ['delete-topic','toggle-reminder'],
        methods: {
            getArticlesForTopic(id) {
                console.log(id)
                // console.log(this.articles)
                var temp_articles = new Array
                this.articles.forEach(article => {
                    if(article.topic_id == id) {
                        temp_articles.push(article)
                    }
                })
                console.log(temp_articles)
                return temp_articles
            }
        }
    }
</script>