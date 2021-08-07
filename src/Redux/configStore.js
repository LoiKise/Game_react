import { combineReducers, createStore } from 'redux';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';




const rootReducer = combineReducers({
    // các state sẽ được lưu tại đây
    BaiTapOanTuXiReducer

})


export const store = createStore(rootReducer);