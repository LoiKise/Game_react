import React, { Component } from 'react'
import './BaiTapGameTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import { connect } from 'react-redux';

class BaiTapGameTuXi extends Component {
    render() {
        return (
            <div className="game">
                <div className="row">
                    <div className="col-4 text-center mt-5">
                        <Player />
                    </div>
                    <div className="col-4 text-center mt-5">
                        <KetQuaTroChoi />
                        <button onClick={() => {
                            this.props.playGame()
                        }} className="btn btn-success p-2 display-4 mt-5">Play Game</button>
                    </div>
                    <div className="col-4 text-center mt-5">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        playGame: () => {

            let count = 50;
            // khai báo hàm Interval
            let randomItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                })
                count ++;
                if (count > 80) {
                    clearInterval(randomItem)

                    dispatch({
                        type:'KET_THUC'
                    })
                }
            }, 100)

        }
    }
}



export default connect(null, mapDispatchToProp)(BaiTapGameTuXi)