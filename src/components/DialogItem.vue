<template>
  <div>
    <div class="position-relative dialogItem" @click="openDialog()">
      <div class="d-flex">
        <div class="mt-2 pl-0">
          <div
            v-bind:style="{backgroundImage: 'url(' + dialog.dialogAvatar + ')'}"
            style="background-size:cover; background-position:center; width: 70px; height: 70px; border-radius: 100%;"
          ></div>
        </div>
        <div class="ml-3 w-100">
          <div class="d-flex">
            <b class="w-100">{{dialog.dialogName}}</b>
            <div class="mr-3 text-nowrap">{{dialog.date}}</div>
          </div>
          <div class="d-flex pt-2 align-items-center">
            <div
              v-bind:style="{backgroundImage: 'url(' + dialog.lastAuthorAvatar + ')'}"
              style="background-position:center; min-width: 40px; min-height: 40px; border-radius: 100%;"
            ></div>
            <p class="m-0 ml-2" style="height:26px; overflow: hidden;">{{dialog.message}}</p>
          </div>
        </div>
      </div>
      <div
        class="position-absolute delete"
        style="top: 0; right: -10px; cursor:pointer"
        v-on:click="removeDialog()"
      >
        <i class="fas fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "DialogItem",

  data: function() {
    return {};
  },

  props: {
    dialog: Object,
    index: Number
  },

  mounted: function() {},

  methods: {
    removeDialog() {
      bus.$emit("removeDialog", this.index);
    },

    openDialog(){
      this.$router.push({ path: `/Dialog/${this.index}` });
    }
  }
};
</script>

<style scoped lang="scss">
.dialogItem {
  margin-top: 20px;
  cursor: pointer;

  & .delete {
    display: none;
  }

  &:hover {
    .delete {
      display: block;
    }
  }
}
</style>