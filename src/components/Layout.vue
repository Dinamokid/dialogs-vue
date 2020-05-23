<template>
  <div class="row m-0">
    <div class="col-md-2" id="side-menu">
      <div
        class="d-flex justify-content-center align-items-center w-100 text-white"
        style="min-height: 100px"
      >
        <p class="text-center mb-0">
          Dinamokid's
          <br />Chat
        </p>
      </div>

      <ul>
        <li class="m-0">
          <router-link to="/Index">Home</router-link>
        </li>
        <li>
          <router-link to="/Dialogs">Dialogs</router-link>
        </li>
      </ul>

      <div class="position-absolute" style="bottom: 0; right: 0; left: 0">
        <p class="text-white text-center small">From Dinamokid to Dinamokid</p>
      </div>
    </div>
    <div class="col-md-10">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  mounted: function(){
      if(this.$route.fullPath == '/'){
          this.$router.push('Index')
      }
  },
};
</script>

<style lang="scss">
#side-menu {
  position: relative;
  height: 100vh;
  background-color: black;
  font-weight: 600;

  & ul {
    list-style: none;
    padding: 0;

    & li {
      border-bottom: 2px solid white;
      cursor: pointer;
      text-align: center;

      & a {
        color: white;
        line-height: 2.5em;
      }
    }
  }
}
</style>