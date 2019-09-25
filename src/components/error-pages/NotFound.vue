<template>
  <div>
    <h3>Page not found 😢</h3>
        <router-link :to="{ name: 'home'}">Back to home here</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>