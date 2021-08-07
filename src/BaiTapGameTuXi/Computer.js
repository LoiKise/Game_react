import React, { Component } from 'react'
import { connect } from 'react-redux';


class Computer extends Component {
    render() {
        return (
            <div className="playerGame">
                <div className="theThink">
                    <img src={this.props.computer.hinhAnh} className="mt-5" width={100} height="100" alt={this.props.computer.hinhAnh} style={{ transform: 'rotate(120deg)' }} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200 }} src="./img/gameTuXi/playerComputer.png" />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)