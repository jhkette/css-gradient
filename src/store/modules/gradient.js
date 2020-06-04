const state = {
  percentage: 0,
  opacity: 0
}

const getters = {
    getPercentage: (state) => state.percentage,
    getOpacity: (state) => state.opacity
}

const actions = {
    addPercentage: ({commit}, percentage) => {
        commit('setPercentage', percentage)
    },
    addOpacity: ({commit}, opacity) => {
        commit('setOpacity', opacity)
    }

}

const mutations = {
    setPercentage: (state, percentage) => {
        state.percentage = percentage;
    },
    setOpacity: (state, opacity) => {
        state.opacity = opacity;
    }

}

export default {
    state,
    getters,
    actions,
    mutations,

}