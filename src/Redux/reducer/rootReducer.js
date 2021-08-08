import { combineReducers } from "redux";

import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer'
import BaiTapDatVeReducer from './BaiTapDatVeReducer'
const rootReducer = combineReducers({// store tongo cua ung dung
    BaiTapOanTuXiReducer,
    BaiTapDatVeReducer
});

export default rootReducer;