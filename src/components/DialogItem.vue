<template>
  <div class="position-relative">
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
      v-on:click="removeDialog()"
    >
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "DialogItem",

  data: function() {
    return {     

    };
  },

  props: {
      dialog: Object,
      index: Number,
  },

  mounted: function() {
  },

  methods: {
    removeDialog() {
        bus.$emit("removeDialog", this.index);
    },
  }
};
</script>