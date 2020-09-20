export default {
  actions: {
    async fetchDialogs({ commit }) {
      //mockup
      const dialogs = [
        {
          id: 0,
          dialogName: "Savelii",
          dialogAvatar: "https://picsum.photos/seed/2/400",
          lastAuthorAvatar: "https://picsum.photos/seed/2/400"
        },
        {
          id: 1,
          dialogName: "Sergey",
          dialogAvatar: "https://picsum.photos/seed/3/400",
          lastAuthorAvatar: "https://picsum.photos/seed/3/400"
        },
      ]

      commit('updateDialogs', dialogs)
    },

    removeDialog({commit}, id){
      commit('removeDialog', id)
    }
  },
  mutations: {
    updateDialogs(state, dialogs) {
      state.dialogs = dialogs
    },
    addDialog(state, newDialog) {
      state.dialogs.push(newDialog)
    },
    removeDialog(state, id){
      const i = state.dialogs.map(item => item.id).indexOf(id);
      state.dialogs.splice(i, 1);
    }
  },
  state: {
    dialogs: []
  },
  getters: {
    allDialogs(state) {
      return state.dialogs;
    },
    dialogsLenght(state) {
      return state.dialogs.lenght;
    },
  },
  strict: process.env.NODE_ENV !== 'production'
}
