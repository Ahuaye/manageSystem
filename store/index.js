// 该文件用于创建Vuex最核心的store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}
const mutations = {
    collapseMenu(state) {
        state.isCollapse = !state.isCollapse
    },
    changeTitle(state, value) {
        state.label = value
    }
}
const state = {
    isCollapse: false,
    label: '',
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})