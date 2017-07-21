import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:''
        }
    }

    componentDidMount(){
        $.getJSON(this.props.url,(res)=>{
            this.setState({
                name:res['name'],
                age:res['age']
            })
        })
    }
    render(){
        return (
            <div>
                {this.state.name}=====>{this.state.age}
            </div>
        )
    }
}

Mock.mock('http://ajax.data.com',{
    'name':'@name',
    'age|1-100':121
})

ReactDOM.render(
    <Test url="http://ajax.data.com"/>,
    document.getElementById('app')
)