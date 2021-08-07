


const stateDefault = {
    mangDatCuoc: [
        { ma: "keo", hinhAnh: './img/gameTuXi/keo.png', datCuoc: false },
        { ma: "bua", hinhAnh: './img/gameTuXi/bua.png', datCuoc: true },
        { ma: "bao", hinhAnh: './img/gameTuXi/bao.png', datCuoc: false },
    ],
    ketQua: "you win !!!!!",
    soBanThang: 0,
    soBanChoi: 0,

    computer:
        { ma: "keo", hinhAnh: './img/gameTuXi/keo.png' }


}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'CHON_KEO_BUA_BAO': {
            //reset mang thafnh false

            let mangCuocUpdate = [...state.mangDatCuoc];

            mangCuocUpdate = mangCuocUpdate.map((item, index) => {

                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }

                return { ...item, datCuoc: false }
            })

            console.log('magcuoc', mangCuocUpdate);
            console.log(action)
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }

        case 'RAN_DOM': {

            //set ngẫu nhiên cho sự kiện lcick
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
            state.computer = quanCuocNgauNhien;

            return { ...state }
        }

        case 'KET_THUC': {

            state.soBanChoi += 1

            let Player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let Computer = state.computer;
            switch (Player.ma) {
                case 'keo':
                    if (Computer.ma === 'keo') {
                        state.ketQua = 'DRAW PLAY AGAIN'
                    }
                    else if (Computer.ma === 'bua') {
                        state.ketQua = 'NON'
                    }
                    else {
                        state.soBanThang += 1
                        state.ketQua = 'WINNERR!!!!'
                    }
                    ; break;
                case 'bua':
                    if (Computer.ma === 'keo') {
                        state.soBanThang += 1
                        state.ketQua = 'WINERRRR'
                    }
                    else if (Computer.ma === 'bua') {
                        state.ketQua = 'DRAW PLAY AGAIN'
                    }
                    else {
                        state.ketQua = 'NON :('
                    }
                    ; break;
                case 'bao':
                    if (Computer.ma === 'keo') {
                        state.ketQua = 'NON'
                    }
                    else if (Computer.ma === 'bua') {
                        state.soBanThang += 1
                        state.ketQua = 'WINERRRR'
                    }
                    else {
                        state.ketQua = 'DRAW PLAY AGAIN'
                    }
                    ; break
                default: state.ketQua = "GO GO GO "

            }
        }
            return { ...state }
        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer;