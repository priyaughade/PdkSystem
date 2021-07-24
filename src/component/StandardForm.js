import React, { Component } from 'react'
import axios from 'axios' ;
// import {Pagination ,Table} from 'react-bootstrap'

class StandardForm extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            userId:'7',
            loading:false
        }
        this.getData=this.getData.bind(this)
        this.btnClick=this.btnClick.bind(this)

    }
    getData(){
        const { userId } =this.state;
        this.setState({
            list:[],
            loading:true
        })
        axios.get(`https://reqres.in/api/users?page=2.data.id=${userId} `)
        .then(res => {
            // console.log(res.data)
            this.setState({
                list: res.data.data,
                loading:false
            })
            console.log(this.state.list)

        }).catch(e => {
            // console.log(e)
            this.setState({
                list:[],
                loading:false
            })
        })
        // console.log(this.state.list)
    }
    componentDidMount(){
        this.getData()
    }
    btnClick(e){
        // const userId=e.target.value
        this.setState({
            userId:e.target.value
        });
    }
    render() {
        const theData = this.state.list.map((d) => {
            return(
                <li key={d.id}>
                    <h3>{d.id} </h3>
                    <p>{d.first_name} </p>
                    <p>{d.last_name} </p>
                    <p>{d.email} </p>
                    <p> <img src={`${d.avatar}`} />   </p>

                </li>
            )
        })
        if(this.state.loading){
            return <p>Loading.....</p>
        }
        return (
            <div>
                <ul>
                    {theData}
                </ul>
                {/* <table>
                    <thead>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Photo</th>
                    </thead>
                    <tbody>
                        {this.state.list.map((d)=>{
                            <tr key={d.id} >
                                <td>{d.id} </td>
                                <td>{d.first_name} </td>
                                <td>{d.last_name} </td>
                                <td>{d.email } </td>
                                <td>{d.avatar} </td>

                            </tr>
                        })}
                    </tbody>
                </table> */}
                {/* <Table  list={this.state.list} />
                <Pagination
                    bsSize="medium"
                    items={10}
                    activePage={1}/> */}
                <UserIdComponent  name='1' onClick={this.btnClick} />&emsp;
                <UserIdComponent name='2' onClick={this.btnClick} />&emsp;
                <UserIdComponent name='3' onClick={this.btnClick} />&emsp;
                <UserIdComponent name='4' onClick={this.btnClick} />&emsp;

            </div>
        )
    }
}
const UserIdComponent = (props)=>{
    return <button className='btn -btn-primary'
    onClick={props.onClick}
    value={props.name}
    >{props.name}
    </button>
}

export default StandardForm
