import React, {Component} from 'react'
import { Button, Checkbox, Form, Icon, Input } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import { changeFilterDate } from '../actions';
import { connect } from 'react-redux'


class Toolbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date : null
        }
    }

    handleRedirectMap = () => {
        this.props.history.push('/map')
    }

    handleRedirectAddRoute = () => {
        this.props.history.push('/add-route')
    }

    handleChangeDate = (e, {name, value}) => {
        this.setState({
            date : value
        })
    }   

    handleSubmitFilterDate = (e) => {
        this.props.changeFilterDate(this.state.date)
    }
 
    render(){
        return (
            <div className="space-between">

                <div className="flex-start">
                    <Button className="mr-10" onClick={this.handleRedirectMap} icon>
                        <Icon name="map"/>
                    </Button>
                    <Input 
                        className="mr-10"
                        name="date"
                        type="date"
                        placeholder="Date"
                        onChange={this.handleChangeDate}
                    />
                    <Button onClick={this.handleSubmitFilterDate} className="mr-10" icon type='submit'>
                        <Icon name="angle right"/>                        
                    </Button>
                </div>
                <div>
                    <Button onClick={this.handleRedirectAddRoute} icon>
                        <Icon name='add' />
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      routes: state.routes
    }
  }
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeFilterDate: (date) => {
            dispatch(changeFilterDate(date))
      }
    }
  }

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Toolbar)
)
  