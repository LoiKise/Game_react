import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../Redux/action/BaiTapDatVeAction';


class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disable = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disable = true;
            }
            // xét trạng thái ghế đang đặt
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }


            return (
                <button onClick={() => {
                    this.props.datGhe(ghe)
                }}
                    disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat} `} key={{ index }}>
                    {ghe.soGhe}
                </button>
            )
        }
        )

    }


    renderSoHangCuaGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((soHang, index) => {
            return (
                <button className="rowNumber" key={{ index }}>
                    {soHang.soGhe}
                </button>
            )
        })
    }


    renderHangGhe = () => {
        if (this.props.soHangCuaGhe === 0) {
            return (
                <div>
                    {this.props.hangGhe.hang}
                    {this.renderSoHangCuaGhe()}
                </div>
            )
        }
        else {
            return <div>
                {this.props.hangGhe.hang}
                {this.renderGhe()}
            </div>


        }
    }

    render() {
        return (
            <div className="text-light text-left ml-2 mt-2" style={{ fontSize: 30, fontWeight: '500' }} >
                {this.renderHangGhe()}

            </div >
        )
    }
}


const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);