const state = {
  percentage: 0,
  opacity: 0,
  colour1: '',
  colour2: '',
}

const getters = {
    getPercentage: (state) => state.percentage,
    getOpacity: (state) => state.opacity,
    getFirstColour: (state) => state.colour1,
    getSecondColour: (state) => state.colour2
}

const actions = {
    addFirstColour: ({commit}, colour1) => {
        commit('setColour1', colour1.hex)
    },
    addSecondColour: ({commit}, colour2) => {
        commit('setColour2', colour2.hex)
    },
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
    },
    setColour1: (state, colour1) => {
        state.colour1 = colour1;
    },
    setColour2: (state, colour2) => {
        state.colour2 = colour2;
    }

}

export default {
    state,
    getters,
    actions,
    mutations,

}