<template>
  <div class="container">
    <h1 class="ml-3 mt-4 mb-4">All dialogs</h1>
    <div class="col-md-12 mt-4 p-0">
      <div id="chatroom" class="mb-2">
        <div
          class="mt-2 pb-3 border-bottom cursor-pointer position-relative"
          v-for="(dialog, key) in dialogs"
          :key="dialog.message"
        >
          <div class="d-flex">
            <div class="col-1 mt-2">
              <div
                v-bind:style="{backgroundImage: 'url(' + dialog.dialogAvatar + ')'}"
                style="background-size:cover; background-position:center; width: 70px; height: 70px; border-radius: 100%;"
              ></div>
            </div>
            <div class="col-9">
              <div>
                <b class="w-100">{{dialog.dialogName}}</b>
              </div>
              <div class="d-flex pt-2 align-items-center">
                <div
                  v-bind:style="{backgroundImage: 'url(' + dialog.lastAuthorAvatar + ')'}"
                  style="background-position:center; min-width: 40px; min-height: 40px; border-radius: 100%;"
                ></div>
                <p class="m-0 ml-2" style="height:45px; overflow: hidden;">{{dialog.message}}</p>
              </div>
            </div>
            <div class="col-2 d-flex align-items-center">
              <div>{{dialog.date}}</div>
            </div>
          </div>
          <div
            class="position-absolute"
            style="top: 0; right: 0; cursor:pointer"
            v-on:click="removeDialog(key)"
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
    <button v-on:click="updateDialog(0,'ты че пес', '21 May 2020', 'https://picsum.photos/seed/1/300')">Click me!</button>
  </div>
</template>

<script>
export default {
  name: "Dialogs",
  data: function() {
    return {
      dialogs: [
        {
          dialogName: "Авдоничев Александр",
          dialogAvatar: "https://picsum.photos/seed/1/300",
          date: "20 May 2020",
          message:
            "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
          lastAuthorAvatar: "https://picsum.photos/seed/2/300"
        }
      ]
    };
  },

  mounted: function() {
    this.addDialog(
      "Свелий Крюк",
      "21 May 2020",
      "test",
      "https://picsum.photos/seed/3/300",
      "https://picsum.photos/seed/4/300"
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
  }
};
</script>