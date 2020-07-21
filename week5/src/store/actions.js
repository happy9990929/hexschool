import * as types from './types';

const actions = {
    setMsg({ commit }, { msg, type }) {
        commit(types.SET_MSG, {
            msg,
            type,
        });
        setTimeout(() => commit(types.CLEAR_MSG), 2000);
    },
    setCategory({ commit }, category) {
        commit(types.SET_CATEGORY, category);
    },
    setProducts({ commit }, data) {
        commit(types.SET_PRODUCTS, data);
    },
    setPagination({ commit }, data) {
        commit(types.SET_PAGINATION, data);
    },
    toggleLoading({ commit }) {
        commit(types.TOGGLE_LOADING);
    },
    toggleSticky({ commit }, data) {
        commit(types.TOGGLE_STICKY, data);
    },
};

export default actions;
