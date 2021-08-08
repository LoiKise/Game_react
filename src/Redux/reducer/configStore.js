import { combineReducers, createStore } from 'redux';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';




const rootReducer = combineReducers({
    // các state sẽ được lưu tại đây
    BaiTapOanTuXiReducer,
    BaiTapDatVeReducer
})


export const store = createStore(rootReducer);