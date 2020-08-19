<template>
  <div class="position-relative" style="height: 100vh;">
    <div id="chat-list">
      <div v-for="message in messages" v-bind:key="message.id">
        <Message v-bind:message="message" v-bind:index="message.id" />
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dialog",
  props: ["id"],
  data: function() {
    return {
      input: ""
    };
  },
  components: {
    Message
  },
  computed: {
    ...mapGetters(["getMessagesFromDialog"]),
    messages: {
      get() {
        return this.getMessagesFromDialog(this.id);
      }
    }
  },
  methods: {
    ...mapActions(["addMessage"]),
    ...mapGetters(["messagesCount"]),

    addMessage(text) {
      let today = new Date().toISOString();
      this.$store.dispatch("addMessage", {
        id: this.messagesCount(),
        text,
        dialogId: this.id,
        dateTime: today,
        authorAvatar: "https://picsum.photos/seed/1/400",
        authorName: "Aleksandr"
      });
      this.input = "";
    }
  },
};
</script>

<style lang="scss">
#chat-list {
  height: 75vh;
}
</style>