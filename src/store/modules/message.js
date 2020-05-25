export default {
  actions: {
    async fetchMessages({ commit }) {
      //mockup
      const messages = [
        {
          id: 0,
          dialogId: 0,
          text: "Ку",
          time: "20:20",
          authorAvatar: "https://picsum.photos/seed/1/400",
          authorName: "Aleksandr"
        },
        {
          id: 1,
          dialogId: 0,
          text: "Ку!",
          time: "20:21",
          authorAvatar: "https://picsum.photos/seed/2/400",
          authorName: "Savelii"
        },
        {
          id: 2,
          dialogId: 1,
          text: "hi",
          time: "22:20",
          authorAvatar: "https://picsum.photos/seed/1/400",
          authorName: "Aleksandr"
        },
        {
          id: 3,
          dialogId: 1,
          text: "hi!",
          time: "13:21",
          authorAvatar: "https://picsum.photos/seed/3/400",
          authorName: "Sergey"
        },
      ]

      commit('updateMessages', messages)
    },
    async addMessage({ commit }, newMessage) {
      commit('addMessage', newMessage)
    },
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages
    },
    addMessage(state, newMessage) {
      console.log("произошло дополнение");
      state.messages.push(newMessage)
    },
  },
  state: {
    messages: []
  },
  getters: {
    getMessagesFromDialog: state => id => {
      return state.messages.filter(t=>t.dialogId == id)
    },
    messagesCount(state) {
      return state.messages.length
    },
    getLastMessageByDialogId: state => id => {
      return state.messages.filter(t=>t.dialogId == id).slice(-1)[0]
    }
  },
  strict: process.env.NODE_ENV !== 'production'
}
