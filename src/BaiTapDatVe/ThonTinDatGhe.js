import React, { Component } from 'react'
import { connect } from 'react-redux';
import { HUY_GHE } from '../Redux/type/BaiTapDatVeType';


class ThonTinDatGhe extends Component {


    renderThongTinDat = () => {
        return this.props.danhSachGheDangDat.map((gheDangDat, index) => {
            return (

                <tr key={{ index }}>
                    <td>
                        {gheDangDat.soGhe}
                    </td>
                    <td>
                        {gheDangDat.gia.toLocaleString()}
                    </td>
                    <td>
                        <button onClick={() => {
                            this.props.dispatch({
                                type: HUY_GHE,
                                soGhe: gheDangDat.soGhe
                            })
                        }}>
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>

            )
        })
    }



    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon">
                    </button>
                    <span className="text-light" style={{ fontSize: '30px' }}>Ghế đã đặt</span>

                    <br />
                    <button className="gheDangChon">
                    </button>

                    <span className="text-light" style={{ fontSize: '30px' }}>Ghế đang chọn</span>
                    <br />
                    <button className="ghe" style={{ marginLeft: '0' }}>
                    </button>
                    <span className="text-light" style={{ fontSize: '30px' }}>Ghế Trống</span>
                </div>
                <div className="mt-5">
                    <table className="table" borde="2">
                        <thead>
                            <tr className="text-light" style={{ fontSize: 25 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.renderThongTinDat()}
                        </tbody>
                        <tfoot className="text-warning">
                            <tr>
                                <td></td>
                                <td>TỔNG TIỀN</td>
                                <td>
                                    {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia
                                    }, 0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    })
}


export default connect(mapStateToProps)(ThonTinDatGhe)