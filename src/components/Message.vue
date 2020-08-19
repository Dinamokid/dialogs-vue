<template>
  <div class="message py-3">
    <div class="container">
      <div class="d-flex align-items-center">
        <div>
          <div
            v-bind:style="{backgroundImage: 'url(' + message.authorAvatar + ')'}"
            style="background-size:cover; background-position:center; width: 50px; height: 50px; border-radius: 100%;"
          ></div>
        </div>
        <div class="ml-3">
          <div>
            <span class="bold mr-1">{{message.authorName}}</span>
            {{new Date(message.dateTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}}
          </div>
          <div>{{message.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: Object,
    index: Number
  }
};
</script>

<style lang="scss">
.message {
  height: 70px;
}

.bold {
  font-weight: 700;
}
</style>