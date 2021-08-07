import React, { Component } from 'react'
import { connect } from 'react-redux';

class Player extends Component {


    renderPlayer = () => {
        return this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
                border = { border: '3px solid orange' };
            }
            return (
                <div className="col-4" key={index}>
                    <button className="btnItem" style={border} onClick={() => {
                        this.props.datCuoc(item.ma)
                    }}>
                        <img width={35} height={35} src={item.hinhAnh} alt={item.hinhAnh} />
                    </button>
                </div>
            )
        })
    }
    render() {
        console.log(this.props.mangDatCuoc);
        return (
            <div className="playerGame">
                <div className="theThink">

                    <img src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} className="mt-5" width={100} height="100" alt="./img/gameTuXi/bua.png" style={{ transform: 'rotate(120deg)' }} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200 }} src="./img/gameTuXi/player.png" />

                <div className="row">
                    {this.renderPlayer()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {

    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(Player)