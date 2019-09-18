<template>
  <div>
    <h1>Page not found 😢</h1>
    <router-link :to="{ name: 'home'}">Click here to go back home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>