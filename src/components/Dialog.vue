<template>
  <div class="position-relative" style="height: 100vh;">
    <div id="chat-list">
      <div v-for="(message, index) in messages" v-bind:key="index">
        <Message v-bind:message="message" v-bind:index="index" />
      </div>
    </div>
    <div class="position-absolute" style="bottom: 0; left: 0; right: 0;">
      <div class="d-flex justify-content-center pb-2">
        <input type="text" v-model="input" class="w-50" />
        <button class="ml-2 btn btn-dark" v-on:click="addMessage(input)">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message";
import { bus } from "../main";

export default {
  name: "Dialog",
  props: ["id"],
  data: function() {
    return {
      messages: [
        {
          id: 1,
          text: "Ку",
          time: "20:20",
          authorAvatar: "https://picsum.photos/seed/1/400",
          authorName: "Aleksandr"
        }
      ],
      input: ""
    };
  },
  components: {
    Message
  },
  methods: {
    addMessage(text) {
      let today = new Date();
      this.messages.push({
        id: this.messages.length,
        text,
        time: `${today.getHours()}:${
          today.getMinutes() < 10
            ? "0" + today.getMinutes()
            : today.getMinutes()
        }`,
        authorAvatar: "https://picsum.photos/seed/2/400",
        authorName: "Savelii"
      });
      bus.$emit("updateDialog", this.$route.params.id, this.input, today, "https://picsum.photos/seed/2/400");
    }
  }
};
</script>

<style lang="scss">
#chat-list {
  height: 75vh;
}
</style>