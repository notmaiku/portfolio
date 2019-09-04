<template>
  <nav id="main">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="exp">Experience</router-link>
      </li>
      <li>
        <router-link to="works">Works</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>