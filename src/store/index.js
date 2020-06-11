import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token: JSON.stringify(localStorage.getItem("token")),
    user: JSON.parse(localStorage.getItem("user")),
    mvUrl: JSON.stringify(localStorage.getItem("mvUrl")),
    transitionName: JSON.stringify(localStorage.getItem("transitionName")),
    type: JSON.stringify(localStorage.getItem("type")),
    address: JSON.stringify(localStorage.getItem("address")),
    address1: JSON.stringify(localStorage.getItem("address1")),
    originname: JSON.stringify(localStorage.getItem("originname")),
    originnumber: JSON.stringify(localStorage.getItem("originnumber")),
    addressinfo: JSON.stringify(localStorage.getItem("addressinfo"))
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
    setUser(state, data) {
      state.user = data;
    },
    setMvUrl(state, data) {
      state.mvUrl = data;
    },
    setTransitionName(state, data) {
      state.transitionName = data;
    },
    setType(state, data) {
      state.type = data;
    },
    setAddress(state, data) {
      state.address = data;
    },
    setAddress1(state, data) {
      state.address1 = data;
    },
    setoriginname(state, data) {
      state.originname = data;
    },
    setoriginnumber(state, data) {
      state.originnumber = data;
    },
    setaddressinfo(state, data) {
      state.addressinfo = data;
    },
  },
  actions: {}
});
export default store;
