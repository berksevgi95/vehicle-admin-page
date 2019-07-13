import React, {Component} from 'react'
import { Table as SemanticTable, Input, Popup, Menu, Modal } from 'semantic-ui-react'

import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import _ from 'lodash'


class Table extends Component{

    state = {
        filterObj : {},
        changeVehicleState : {
            objId : null,
        },
    }

    handleSearch = (bindAtts, e) => {
        if(e.target.value){
            this.setState({
                filterObj :{
                    ...this.state.filterObj,
                    [bindAtts] : e.target.value
                }
            })
        }
        else {
            let filterObj = this.state.filterObj
            delete filterObj[bindAtts];
            this.setState({
                filterObj
            })
        }
    }

    getRoutes = () => {

        const {routes} = this.props;

        if(Object.keys(this.state.filterObj).length === 0)
            return routes
        else {
            let routeArr = [];
            const self = this;
            for(let filterKey of Object.keys(this.state.filterObj)){
    
                routeArr = routeArr.length === 0 ? 
                    routes.filter(route => {
                        const att =  _.get(route, filterKey)
                        return att && att.includes(self.state.filterObj[filterKey])
                    }) :
                    routeArr.filter(route => {
                        const att =  _.get(route, filterKey)
                        return att && att.includes(self.state.filterObj[filterKey])
                    })
            }
    
            return routeArr
        }
        
    }

    filterAsDate = (arr) => {
        return arr && arr.filter(el => !el.filterDate ? el : new Date(el.date) < new Date(el.filterDate))
    }

    handleOnClickChangeVehicle = (route) => {
        this.setState(prevState => ({
            ...prevState,
            changeVehicleState : {
                objId : null
            }
        }))
        this.props.history.push(`/change-vehicle/${route.id}`)
    }

    handleOpenPopup = (route) => {
        this.setState(prevState => ({
            ...prevState,
            changeVehicleState : {
                objId : prevState.changeVehicleState.objId === route.id ? null : route.id
            }
        }))
    }

    render(){
        const {changeVehicleState} = this.state
        return (
            <SemanticTable compact>
                <SemanticTable.Header>
                    <SemanticTable.Row>
                        <SemanticTable.HeaderCell>Name</SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>Vehicle</SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>Time</SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>Driver</SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>Helper</SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>Performance</SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>Status</SemanticTable.HeaderCell>
                    </SemanticTable.Row>
                    <SemanticTable.Row>
                        <SemanticTable.HeaderCell>
                            <Input className="table-search-field" placeholder="Search" onChange={this.handleSearch.bind(this, 'name')}></Input>
                        </SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>
                            <Input className="table-search-field" placeholder="Search" onChange={this.handleSearch.bind(this, 'vehicle.name')}></Input>
                        </SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>
                            <Input className="table-search-field" placeholder="Search" onChange={this.handleSearch.bind(this, 'time')}></Input>
                        </SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>
                            <Input className="table-search-field" placeholder="Search" onChange={this.handleSearch.bind(this, 'driver.name')}></Input>
                        </SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>
                            <Input className="table-search-field" placeholder="Search" onChange={this.handleSearch.bind(this, 'helper')}></Input>
                        </SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>
                            <Input className="table-search-field" placeholder="Search" onChange={this.handleSearch.bind(this, 'performance')}></Input>
                        </SemanticTable.HeaderCell>
                        <SemanticTable.HeaderCell>
                            <Input className="table-search-field" placeholder="Search" onChange={this.handleSearch.bind(this, 'status')}></Input>
                        </SemanticTable.HeaderCell>
                    </SemanticTable.Row>
                </SemanticTable.Header>

                <SemanticTable.Body>
                {
                    this.filterAsDate(this.getRoutes()).map((route, index) => (
                        <SemanticTable.Row key={route.id}>
                            <SemanticTable.Cell>{route.name}</SemanticTable.Cell>
                            <SemanticTable.Cell>
                                <Popup
                                    on='click'
                                    open={changeVehicleState.objId === route.id}
                                    pinned
                                    content={
                                        <Menu style={{ padding: 0 }} secondary vertical>
                                            <Menu.Item
                                                name='Change'
                                                onClick={this.handleOnClickChangeVehicle.bind(this, route)}
                                            />
                                            <Menu.Item
                                                name='Swap'
                                            />
                                        </Menu>
                                    }
                                    trigger={
                                        <div onClick={this.handleOpenPopup.bind(this, route)}>
                                            {route.vehicle.name}
                                        </div>
                                    }
                                />
                            </SemanticTable.Cell>
                            <SemanticTable.Cell>{route.time}</SemanticTable.Cell>
                            <SemanticTable.Cell>{route.driver.name}</SemanticTable.Cell>
                            <SemanticTable.Cell>{route.helper || '-'}</SemanticTable.Cell>
                            <SemanticTable.Cell>{route.performance}</SemanticTable.Cell>
                            <SemanticTable.Cell>{route.status}</SemanticTable.Cell>
                        </SemanticTable.Row>
                    ))
                }
                </SemanticTable.Body>
            </SemanticTable>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      routes: state.routes
    }
  }


export default withRouter(
    connect(
        mapStateToProps,
        undefined
    )(Table)
)
    