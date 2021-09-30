<template></template>
    <div @dblclick="$emit('toggle-reminder', topic.id)" :class="[topic.reminder ? 'reminder' : '', 'topic']">
        <h3>
            {{topic.title}}
            <i @click="onDelete(topic.id)" class="fas fa-times"></i>
        </h3>
        <ol>
          <li :key="article.id" v-for="article in articles">
              <h4>{{article.title}}</h4>
          </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'Topic',
        props: {
            topic: Object,
            articles: Array
        },
        methods: {
            onDelete(id) {
                this.$emit('delete-topic', id)
            }
        }
    }
</script>

<style scope>
.fas {
  color: red;
}
.topic {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.topic.reminder {
  border-left: 5px solid green;
}
.topic h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>