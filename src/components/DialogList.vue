<template>
  <div class="my-4">
    <h1>All dialogs</h1>
    <div class="col-md-12 mt-4 p-0">
      <div class="mb-2">
        <div v-for="dialog in allDialogs" v-bind:key="dialog.id">
          <DialogItem v-bind:dialog="dialog" v-bind:index="dialog.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DialogItem from "./DialogItem";

export default {
  name: "DialogList",
  components: {
    DialogItem
  },
  computed: mapGetters(["allDialogs"]),
  methods: {
    ...mapActions(["removeDialog"]),
    ...mapGetters(["dialogsLenght"]),

    addDialog(dialogName, date, message, dialogAvatar, lastAuthorAvatar) {
      this.addDialog({
        id: this.dialogsLenght,
        dialogName,
        date,
        message,
        dialogAvatar,
        lastAuthorAvatar
      });
    },
  },
};
</script>