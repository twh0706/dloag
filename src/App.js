import React, { Component } from 'react'
import Dloag from './compontent/dloag'
export default class App extends Component {
  state={flag:false}
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({flag:true})}}>点击</button>
        {this.state.flag?<Dloag title="你确定要删除吗?" cancel="取消" confirm="确定" Cancels={this.Cancel} Confirm={this.Confirm}></Dloag>:""}
      </div>
    )
  }
  Cancel=()=>{
    //点击取消时
    this.setState({flag:false})
  }
  Confirm=()=>{
    //点击确定时
    this.setState({flag:false})
  }
}
