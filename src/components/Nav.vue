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
  mounted: () => {
    const navi = document.querySelector("#main");
    let topOfNav = navi.offsetTop;
    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = navi.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
      } else {
        document.body.classList.remove("fixed-nav");
        document.body.style.paddingTop = 0;
      }
    }
    window.addEventListener("scroll", fixNav);
  }
};
</script>