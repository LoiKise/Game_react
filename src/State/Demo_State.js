import React, { Component } from 'react'

export default class Demo_State extends Component {

    state = {
        img: "./img/g1.jpg"
    }


    changeGlass = (glass) => {
        this.setState({


            img: `./img/${glass}.jpg`

        })
    }

    render() {
        return (

            <div className="container">

                <h3>
                    Bài tập chọn Kính
                </h3>

                <div className="row">
                    <div className="col-6">
                        <img src={this.state.img} />
                    </div>
                    <div className="col-6">
                        <button onClick={() => {
                            { this.changeGlass('g2') }
                        }}>kính 1</button>
                        <button onClick={() => {
                            {this.changeGlass('g3')}
                        }}>kính 2</button>
                        <button onClick={()=>{
                            this.changeGlass('g4')
                        }}>kính 3</button>
                    </div>
                </div>
            </div>




        )
    }

}