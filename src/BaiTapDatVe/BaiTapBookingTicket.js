import React, { Component, Fragment } from 'react'
import ThonTinDatGhe from './ThonTinDatGhe'


import './BaiTapBookingTicker.css'

// kết nối data
import DataDanhSachGhe from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'


export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return DataDanhSachGhe.map((hangGhe, index) => {
            return (
                <div key={{ index }}>
                    <HangGhe hangGhe={hangGhe} soHangCuaGhe={index} />
                </div>
            )
        })

    }







    render() {
        return (
            <div className="bg">
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-8 text-center">
                                <h1 className="text-light">ĐẶT VÉ ĐI NÀO</h1>
                                <div className="text-light mt-5" style={{ fontSize: '25px' }}>SCREEN</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className="mt-1">
                                    <div className="screen">
                                    </div>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className="col-4">
                                <h1 style={{ fontSize: '35px' }} className="text-warning">DANH SACH GHE DANG CHON</h1>
                                <ThonTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
