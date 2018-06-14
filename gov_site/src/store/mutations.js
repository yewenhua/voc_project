import * as types from './types.js'

export default {
    [types.HIDELOADING]: ( state )=>{
        state.loading = false;
    },
    [types.SHOWLOADING]: ( state )=>{
        state.loading = true;
    },
    [types.LOGIN]: ( state, param )=>{
        state.token = param.token;
    },
    [types.LOGOUT]: ( state )=>{
        state.token = '';
    },
    [types.REGIST]: ( state )=>{
        state.token = '9527';
    },
    [types.HIDESWIPERBTN]: ( state )=>{
        state.swiperbtn = false;
    },
    [types.SHOWSWIPERBTN]: ( state )=>{
        state.swiperbtn = true;
    },
}
