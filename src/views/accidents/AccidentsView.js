import React from 'react'
import {
    Header,
    Image,
    Button,
    Segment,
    Table, 
    Icon,
    Menu,
    Sidebar,
    Checkbox,
} from 'semantic-ui-react'
import * as AccidentsActions from './store/accidents.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { List } from 'immutable';

const AccidentsView = ({
    accidents,
    getAccidents,
    resetAccidents,
    history,
    ...props
}) => {

    const [selected, setSelected] = React.useState(null);

    React.useEffect(() => {
        getAccidents && getAccidents()

        return resetAccidents
    }, [])

    const toggleSelection = () => {
        selected ? setSelected(null) : setSelected(List())
    }

    const handleNavigateDetail = (accident) => {
        !selected && history && history.push(`accidents/${accident.id}`)
    }

    const handleNavigateNewAccident = () => {
        history && history.push('accidents/new')
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

    return <Segment basic>
        <div className="flex justify-between">
            <Header as='h3'>Accidents</Header>
            <div className="flex">
                {selected ? 
                <React.Fragment>
                    <Button compact disabled={selected.size === 0} icon="trash alternate"/>
                </React.Fragment> : 
                <React.Fragment>
                    <Button id="add-accident-dialog-button" compact onClick={handleNavigateNewAccident}>
                        <Icon name="add"></Icon>
                        Add Accident
                    </Button>
                    <Button compact onClick={getAccidents} icon="refresh" />
                </React.Fragment>
                
                }
                <Button compact onClick={toggleSelection} icon="tasks" active={Boolean(selected)}/>
            </div>
        </div>
        <Table celled padded selectable>
            <Table.Header>
                <Table.Row>
                    {selected && 
                        <Table.HeaderCell textAlign="center">
                            <Checkbox 
                                onChange={handleSelectAllAccidents}
                                checked={selected.size === accidents.size}
                                indeterminate={selected.size > 0 && selected.size !== accidents.size}
                            />
                        </Table.HeaderCell>
                    }
                    <Table.HeaderCell singleLine>id</Table.HeaderCell>
                    <Table.HeaderCell>Brand</Table.HeaderCell>
                    <Table.HeaderCell>Model Name</Table.HeaderCell>
                    <Table.HeaderCell>req</Table.HeaderCell>
                    <Table.HeaderCell>req_alter</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {accidents &&
                    accidents.size > 0 &&
                    accidents.map(accident => (
                        <Table.Row 
                            onClick={handleClickRow.bind(this, accident)} 
                            onDoubleClick={handleNavigateDetail.bind(this, accident)} 
                            key={accident.id}
                        >
                            {selected &&
                                <Table.Cell textAlign="center">
                                    <Checkbox checked={isAccidentChecked(accident)}/>
                                </Table.Cell>
                            }
                            <Table.Cell>
                                {accident.id}
                            </Table.Cell>
                            <Table.Cell singleLine>
                                {accident.brand}                            
                            </Table.Cell>
                            <Table.Cell>
                                {accident.modelName}
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                                {accident.req}
                            </Table.Cell>
                            <Table.Cell>
                                {accident.req_alter}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='6'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>

    </Segment>
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
    
