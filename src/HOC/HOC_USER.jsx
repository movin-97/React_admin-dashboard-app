import React from 'react';
import axios from 'axios';

const HOC_USER = (UserComponents,path) => {
  return class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:[],
        }
    }
    componentDidMount(){
        let fatchUsers = async()=>{
            await axios.get(`https://dummyjson.com/${path}`).then((res)=>{
                this.setState({...this.state,user:res.data.users})
            }).catch((err)=>console.log(err))
        }
    fatchUsers();
    }
    render(){
        return(
            <div className="">
                <UserComponents value={this.state.user}></UserComponents>
            </div>
        )
    }
  }
}

export default HOC_USER