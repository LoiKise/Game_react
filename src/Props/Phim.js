import React, { Component } from 'react'

export default class Phim extends Component {


    render() {
        const { movie } = this.props;

        return (

            <div className="card">
                <img src={movie.hinhAnh}></img>
                <div className="card-body">
                    <h4 className="card-title">{movie.tenPhim}</h4>
                    <p className="card-text">{movie.moTa}</p>
                </div>
            </div>
        )
    }
}
