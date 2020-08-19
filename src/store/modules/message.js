export default {
  actions: {
    async fetchMessages({ commit }) {
      //mockup
      const messages = [
        {
          id: 0,
          dialogId: 0,
          text: "Ку",
          dateTime: "2020-08-15T19:20:30Z",
          authorAvatar: "https://picsum.photos/seed/1/400",
          authorName: "Aleksandr"
        },
        {
          id: 1,
          dialogId: 0,
          text: "Ку!",
          dateTime: "2020-08-15T19:21:30Z",
          authorAvatar: "https://picsum.photos/seed/2/400",
          authorName: "Savelii"
        },
        {
          id: 2,
          dialogId: 1,
          text: "hi",
          dateTime: "2020-08-15T19:22:30Z",
          authorAvatar: "https://picsum.photos/seed/1/400",
          authorName: "Aleksandr"
        },
        {
          id: 3,
          dialogId: 1,
          text: "hi!",
          dateTime: "2020-08-15T19:23:30Z",
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
      let msgObj = state.messages.filter(t=>t.dialogId == id).slice(-1)[0];
      msgObj.dateTime = new Date(msgObj.dateTime);
      return msgObj
    }
  },
  strict: process.env.NODE_ENV !== 'production'
}
