// import React from 'react'
// import {
//     Header,
//     Image,
//     Button,
//     Segment,
//     Table, 
//     Icon,
//     Menu,
//     Sidebar,
//     Checkbox,
// } from 'semantic-ui-react'
// import * as AccidentsActions from './store/accidents.actions';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux'
// import { List } from 'immutable';

// const AccidentsView = ({
//     accidents,
//     getAccidents,
//     resetAccidents,
//     history,
//     ...props
// }) => {

//     const [selected, setSelected] = React.useState(null);

//     React.useEffect(() => {
//         getAccidents && getAccidents()

//         return resetAccidents
//     }, [])

//     const toggleSelection = () => {
//         selected ? setSelected(null) : setSelected(List())
//     }

//     const handleNavigateDetail = (accident) => {
//         !selected && history && history.push(`accidents/${accident.id}`)
//     }

//     const handleNavigateNewAccident = () => {
//         history && history.push('accidents/new')
//     }

//     const isAccidentChecked = (accident) => {
//         return Boolean(selected.filter(item => item.id === accident.id).size)
//     }

//     const handleClickRow = (accident) => {
//         if(selected){
//             !isAccidentChecked(accident) ? 
//                 setSelected(selected.push(accident)) :
//                 setSelected(selected.delete(
//                     selected.findIndex(item => item.id === accident.id)
//                 ))
//         }
//     }

//     const handleSelectAllAccidents = () => {
//         selected.size === 0 ?
//             setSelected(accidents) :
//             setSelected(List()) 
//     }

//     return <Segment basic>
//         <div className="flex justify-between">
//             <Header as='h3'>Accidents</Header>
//             <div className="flex">
//                 {selected ? 
//                 <React.Fragment>
//                     <Button compact disabled={selected.size === 0} icon="trash alternate"/>
//                 </React.Fragment> : 
//                 <React.Fragment>
//                     <Button id="add-accident-dialog-button" compact onClick={handleNavigateNewAccident}>
//                         <Icon name="add"></Icon>
//                         Add Accident
//                     </Button>
//                     <Button compact onClick={getAccidents} icon="refresh" />
//                 </React.Fragment>
                
//                 }
//                 <Button compact onClick={toggleSelection} icon="tasks" active={Boolean(selected)}/>
//             </div>
//         </div>
//         <Table celled padded selectable>
//             <Table.Header>
//                 <Table.Row>
//                     {selected && 
//                         <Table.HeaderCell textAlign="center">
//                             <Checkbox 
//                                 onChange={handleSelectAllAccidents}
//                                 checked={selected.size === accidents.size}
//                                 indeterminate={selected.size > 0 && selected.size !== accidents.size}
//                             />
//                         </Table.HeaderCell>
//                     }
//                     <Table.HeaderCell singleLine>id</Table.HeaderCell>
//                     <Table.HeaderCell>Brand</Table.HeaderCell>
//                     <Table.HeaderCell>Model Name</Table.HeaderCell>
//                     <Table.HeaderCell>req</Table.HeaderCell>
//                     <Table.HeaderCell>req_alter</Table.HeaderCell>
//                 </Table.Row>
//             </Table.Header>

//             <Table.Body>
//                 {accidents &&
//                     accidents.size > 0 &&
//                     accidents.map(accident => (
//                         <Table.Row 
//                             onClick={handleClickRow.bind(this, accident)} 
//                             onDoubleClick={handleNavigateDetail.bind(this, accident)} 
//                             key={accident.id}
//                         >
//                             {selected &&
//                                 <Table.Cell textAlign="center">
//                                     <Checkbox checked={isAccidentChecked(accident)}/>
//                                 </Table.Cell>
//                             }
//                             <Table.Cell>
//                                 {accident.id}
//                             </Table.Cell>
//                             <Table.Cell singleLine>
//                                 {accident.brand}                            
//                             </Table.Cell>
//                             <Table.Cell>
//                                 {accident.modelName}
//                             </Table.Cell>
//                             <Table.Cell textAlign='right'>
//                                 {accident.req}
//                             </Table.Cell>
//                             <Table.Cell>
//                                 {accident.req_alter}
//                             </Table.Cell>
//                         </Table.Row>
//                     ))}
                
//             </Table.Body>
//             <Table.Footer>
//                 <Table.Row>
//                     <Table.HeaderCell colSpan='6'>
//                         <Menu floated='right' pagination>
//                             <Menu.Item as='a' icon>
//                                 <Icon name='chevron left' />
//                             </Menu.Item>
//                             <Menu.Item as='a'>1</Menu.Item>
//                             <Menu.Item as='a'>2</Menu.Item>
//                             <Menu.Item as='a'>3</Menu.Item>
//                             <Menu.Item as='a'>4</Menu.Item>
//                             <Menu.Item as='a' icon>
//                                 <Icon name='chevron right' />
//                             </Menu.Item>
//                         </Menu>
//                     </Table.HeaderCell>
//                 </Table.Row>
//             </Table.Footer>
//         </Table>

//     </Segment>
// }


// const mapStateToProps = (state, ownProps) => {
//     return { ...state.accidents }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({
//         ...AccidentsActions,
//     }, dispatch);
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AccidentsView)
    









import React from 'react'
import {
    Icon,
    Checkbox,
} from 'semantic-ui-react'
import * as AccidentsActions from './store/accidents.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import AccidentsViewFilterForm from './AccidentsViewFilterForm';
import { List } from 'immutable';
import moment from 'moment'

import {
    Button,
    BSTheme,
    Table,
    Chip,
    EMessageTypes
} from 'bs-ui-components'
import { FormattedMessage } from 'react-intl';

const AccidentsView = ({
    accidents,
    getAccidents,
    resetAccidents,
    history,
    deleteAccident,
    accidentFilters,
    accidentFilterbar,
    openAccidentFilterbar,
    deleteAccidentFilter
}) => {

    const [selected, setSelected] = React.useState(null);

    React.useEffect(() => {
        getAccidents && getAccidents()

        return resetAccidents
    }, [])

    const toggleSelection = () => {
        selected ? setSelected(null) : setSelected(List())
    }

    const handleNavigateDetail = (accident) => () => {
        !selected && history.push(`accidents/${accident.id}`)
    }

    const handleNavigateNewAccident = () => {
        !selected && history.push(`accidents/new`)
    }

    const isAccidentChecked = (accident) => {
        return Boolean(selected.filter(item => item.id === accident.id).size)
    }

    const handleClickRow = (accident) => {
        if(selected){
            !isAccidentChecked(accident) ? 
                setSelected(selected.push(accident)) :
                setSelected(selected.delete(
                    selected.findIndex(item => item.id === accident.id)
                ))
        }
    }

    const handleSelectAllAccidents = () => {
        selected.size === 0 ?
            setSelected(accidents) :
            setSelected(List()) 
    }

    const handleDeleteAccident = (accident) => {
        deleteAccident(accident)
            .then(() => {
                window.messageRef.fire({
                    message: <FormattedMessage id="accidents.delete.success" />,
                    type: EMessageTypes.SUCCESS,
                    timeout: 5000
                })
            })
            .catch((exception) => {
                window.messageRef.fire({
                    message: exception.error,
                    type: EMessageTypes.ERROR,
                    timeout: 5000
                })
            })
    }

    const handleListAccidents = () => {
        if (accidentFilters && accidentFilters.length > 0) {
            if (accidentFilters.length > 1) {
                return accidentFilters.reduce((filtered, nextFilter, index) => {
                    if (index === 1) {
                        return accidents
                            .filter(accident => accident[filtered.field].toString().toLowerCase() === filtered.value.toLowerCase())
                            .filter(accident => accident[nextFilter.field].toString().toLowerCase() === nextFilter.value.toLowerCase())
                    } else {
                        return filtered
                            .filter(accident => accident[nextFilter.field].toString().toLowerCase() === nextFilter.value.toLowerCase())
                    }
                })
            } else {
                return accidents
                    .filter(accident => accident[accidentFilters[0].field].toString().toLowerCase() === accidentFilters[0].value.toLowerCase())
            }
        } else {
            return accidents
        }
    }

    return (
        <div className="fadein-animation p-4">
            <div className="flex justify-between">
                <h3 className="text-2xl">
                    <FormattedMessage id="accidents" />
                </h3>
                <div className="flex">
                    {selected ? 
                    <React.Fragment>
                        <Button onClick={openAccidentFilterbar}>
                            <Icon name="filter"></Icon>
                        </Button>
                        <Button disabled={selected.size === 0}>
                            <Icon name="trash alternate"></Icon>
                        </Button>
                    </React.Fragment> : 
                    <React.Fragment>
                        <Button
                            theme={BSTheme.SECONDARY}
                            className="mr-2"
                            id="add-accident-dialog-button"
                            onClick={handleNavigateNewAccident}
                        >
                            <Icon name="add"></Icon>
                            <FormattedMessage id="accidents.add" />
                        </Button>
                        <Button
                            className="mr-2 hidden sm:block"
                            onClick={getAccidents}
                        >
                            <Icon className="m-icon" name="refresh"></Icon>
                        </Button>
                        <Button
                            className="mr-2 hidden sm:block"
                            onClick={openAccidentFilterbar}
                        >
                            <Icon className="m-icon"  name="filter"></Icon>
                        </Button>
                    </React.Fragment>
                    }
                    <Button
                        onClick={toggleSelection}
                        disabled={!Boolean(selected)}
                        className="hidden sm:block"
                    >
                        <Icon className="m-icon"  name="tasks"></Icon>
                    </Button>
                </div>
            </div>
            
            {accidentFilters && accidentFilters.length > 0 && (
                <div className="my-4 flex">
                    {accidentFilters.map(filterObj => filterObj && (
                        <Chip
                            key={filterObj.field}
                            className="mr-2 w-auto"
                            onClose={deleteAccidentFilter.bind(this, filterObj)}
                        >
                            {`${filterObj.label}(${filterObj.value})`}
                        </Chip>
                    ))}
                </div>
            )}
            
            <Table.Table className="mt-4">
                <Table.Head>
                    <Table.Row>
                        {selected && 
                            <Table.Title>
                                <Checkbox 
                                    onChange={handleSelectAllAccidents}
                                    checked={selected.size === accidents.size}
                                />
                            </Table.Title>
                        }
                        <Table.Title>
                            id
                        </Table.Title>
                        <Table.Title>
                            <FormattedMessage id="accidents.description" />
                        </Table.Title>
                        <Table.Title>
                            <FormattedMessage id="accidents.plates" />
                        </Table.Title>
                        <Table.Title>
                            <FormattedMessage id="accidents.date" />
                        </Table.Title>
                        <Table.Title>
                            <FormattedMessage id="accidents.time" />
                        </Table.Title>
                        {!selected && (
                            <Table.Title/>
                        )}
                    </Table.Row>
                </Table.Head>

                <Table.Body>
                    {accidents &&
                        accidents.size > 0 &&
                        handleListAccidents()
                            .map(accident => (
                            <Table.Row
                                onClick={handleClickRow.bind(this, accident)} 
                                onDoubleClick={handleNavigateDetail(accident)} 
                                key={accident.id}
                            >
                                {selected &&
                                    <Table.Cell>
                                        <Checkbox checked={isAccidentChecked(accident)}/>
                                    </Table.Cell>
                                }
                                <Table.Cell>
                                    {accident.id}
                                </Table.Cell>
                                <Table.Cell>
                                    {accident.description}
                                </Table.Cell>
                                <Table.Cell>
                                    {`${accident.vehicle1.plateNumber} - ${accident.vehicle2.plateNumber}`}
                                </Table.Cell>
                                <Table.Cell>
                                    {moment(accident.date).format('DD/MM/YYYY')}
                                </Table.Cell>
                                <Table.Cell>
                                    {moment(accident.time).format('HH:MM')}
                                </Table.Cell>
                                {!selected && 
                                    <Table.Cell>
                                        <Button onClick={handleDeleteAccident.bind(this, accident)}>
                                            <Icon className="m-icon" name="delete"></Icon>
                                        </Button>
                                    </Table.Cell>
                                }
                            </Table.Row>
                        ))}
                    
                </Table.Body>
            </Table.Table>

            {accidentFilterbar &&
                accidentFilterbar.open &&
                <AccidentsViewFilterForm/>
            }
            
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return { ...state.accidents }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...AccidentsActions,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccidentsView)
    
