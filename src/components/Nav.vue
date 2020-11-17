<template>
  <nav id="main">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'exp' }">Experience</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'works' }">Works</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
