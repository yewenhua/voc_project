import * as types from './types.js'
export default {
    hideLoading: ({ commit, state })=>{
        commit( types.HIDELOADING );
    },
    showLoading: ({ commit, state })=>{
        commit( types.SHOWLOADING );
    },
    login: ({ commit, state }, param)=>{
        commit( types.LOGIN, param );
    },
    logout: ({ commit, state })=>{
        commit( types.LOGOUT );
    },
    regist: ({ commit, state })=>{
        commit( types.REGIST );
    },
    hideSwiperBtn: ({ commit, state })=>{
        commit( types.HIDESWIPERBTN );
    },
    showSwiperBtn: ({ commit, state })=>{
        commit( types.SHOWSWIPERBTN );
    },
}
