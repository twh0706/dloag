import React, { Component } from 'react'
import '../index.css'
export default class dloag extends Component {
    render() {
        let {title,confirm,cancel,Cancels,Confirm}=this.props
        return (
                 <div className="message-box">
                    <div className="content">
                    <div className="title">{title}</div>
                    <div className="btns">
                        <div onClick={Cancels}>{cancel}</div>
                        <div onClick={Confirm}>{confirm}</div>
                    </div>
                    </div>
            </div>
        )
    }
}
