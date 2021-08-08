import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType";



// đâu tiên tạo mãng rỗn
const stateDefault = {
    danhSachGheDangDat: [


    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case DAT_GHE: {

            // luoon tạo cái này vì biến của mình làm 1 mảng rỗg tạo để k bất biến của redux k bị ảnh  hưởng
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) { // khi người dùng clịc Ghế đang có trong mãng đang đặt thfi có thì sẽ xóa đi
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            else {
                danhSachGheDangDatUpdate.push(action.ghe)
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return { ...state }
        }
        // case HUY_GHE: {
        //     let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

        //     let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
        //     if (index !== -1) { // khi người dùng clịc Ghế đang có trong mãng đang đặt thfi có thì sẽ xóa đi
        //         danhSachGheDangDatUpdate.splice(index, 1);
        //     }

        //     state.danhSachGheDangDat = danhSachGheDangDatUpdate;
        //     return { ...state }
        // }



        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) { // khi người dùng clịc Ghế đang có trong mãng đang đặt thfi có thì sẽ xóa đi
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state };

        }
        default: return { ...state }
    }
}


export default BaiTapDatVeReducer