<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-addTask')"
      :text="showAddTask ? 'Close' : 'Add '"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  computed: {
    homePage() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
