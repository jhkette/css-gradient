const state = {
  percentage: 0,
  opacity: 0,
  colour1: '',
  colour2: '',
  c1selected: false,
  c2selected: false
}

const getters = {
    getPercentage: (state) => state.percentage,
    getOpacity: (state) => state.opacity,
    getFirstColour: (state) => state.colour1,
    getSecondColour: (state) => state.colour2,
    getc1selected: (state) => state.c1selected,
    getc2selected: (state) => state.c2selected,
    getc1unselected: (state) => state.c1selected,
    getc2unselected: (state) => state.c2selected
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
    },
    addc1selected: ({commit}) => {
        commit('setc1selected')
    },
    addc2selected: ({commit}) => {
        commit('setc2selected')
    },
    addc1unselected: ({commit}) => {
        commit('setc1unselected')
    },
    addc2unselected: ({commit}) => {
        commit('setc2unselected')
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
    },
    setc1selected: (state) => {
        state.c1selected = true
    },
    setc2selected: (state) => {
        state.c2selected = true
    },
    setc1unselected: (state) => {
        state.c1selected = false
    },
    setc2unselected: (state) => {
        state.c2selected = false
    }

}

export default {
    state,
    getters,
    actions,
    mutations,

}