<template>
  <div class="container">
    <h1 class="ml-3 mt-4 mb-4">All dialogs</h1>
    <div class="col-md-12 mt-4 p-0">
      <div class="mb-2">
        <div v-for="(dialog, index) in dialogs" v-bind:key="index">
          <DialogItem v-bind:dialog="dialog" v-bind:index="index" />
        </div>
      </div>
    </div>
    <button v-on:click="updateDialog(0,'ты че пес', '21 May 2020', 'https://picsum.photos/seed/1/300')">Click me!</button>
  </div>
</template>

<script>
import { bus } from "../main";
import DialogItem from "./DialogItem";

export default {
  name: "Dialogs",

  components: {
    DialogItem
  },

  data: function() {
    return {
      dialogs: [
        {
          dialogName: "Авдоничев Александр",
          dialogAvatar: "https://picsum.photos/seed/1/400",
          date: "20 May 2020",
          message:
            "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
          lastAuthorAvatar: "https://picsum.photos/seed/2/400"
        }
      ]
    };
  },

  mounted: function() {
    this.addDialog(
      "Свелий Крюк",
      "21 May 2020",
      "test",
      "https://picsum.photos/seed/3/400",
      "https://picsum.photos/seed/4/400"
    );
  },

  methods: {
    addDialog(dialogName, date, message, dialogAvatar, lastAuthorAvatar) {
      this.dialogs.push({
        dialogName,
        date,
        message,
        dialogAvatar,
        lastAuthorAvatar
      });
    },

    removeDialog(index) {
      this.dialogs.splice(index, 1);
    },

    updateDialog(index, message, date, lastAuthorAvatar) {
      var tempDialog = this.dialogs[index];
      tempDialog.message = message;
      tempDialog.date = date;
      tempDialog.lastAuthorAvatar = lastAuthorAvatar;
    }
  },

  created() {
    bus.$on('removeDialog', data => {
      this.removeDialog(data)
    })
  }
};
</script>