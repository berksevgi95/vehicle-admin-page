import React from 'react'
import {
    Header,
    Button,
    Segment,
    Table, 
    Icon,
    Menu,
    Checkbox,
} from 'semantic-ui-react'
import * as InsurancesActions from './store/insurances.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import InsurancesViewForm from './InsurancesViewForm';
import InsurancesViewFilterForm from './InsurancesViewFilterForm';
import { List } from 'immutable';

const InsurancesView = ({
    insurances,
    getInsurances,
    resetInsurances,
    history,
    addInsuranceDialog,
    openInsuranceForm,

    insuranceFilterbar,
    openInsuranceFilterbar,
    ...props
}) => {

    const [selected, setSelected] = React.useState(null);

    React.useEffect(() => {
        getInsurances && getInsurances()

        return resetInsurances
    }, [])

    const toggleSelection = () => {
        selected ? setSelected(null) : setSelected(List())
    }

    const handleNavigateDetail = () => {
        !selected && history && history.push('insurances/detail')
    }

    const isInsuranceChecked = (insurance) => {
        return Boolean(selected.filter(item => item.id === insurance.id).size)
    }

    const handleClickRow = (insurance) => {
        if(selected){
            !isInsuranceChecked(insurance) ? 
                setSelected(selected.push(insurance)) :
                setSelected(selected.delete(
                    selected.findIndex(item => item.id === insurance.id)
                ))
        }
    }

    const handleSelectAllInsurances = () => {
        selected.size === 0 ?
            setSelected(insurances) :
            setSelected(List()) 
    }

    return <Segment basic>
        <div className="flex justify-between">
            <Header as='h3'>Insurances</Header>
            <div className="flex">
                {selected ? 
                <React.Fragment>
                    <Button compact onClick={openInsuranceFilterbar} icon="filter" />
                    <Button compact disabled={selected.size === 0} icon="trash alternate"/>
                </React.Fragment> : 
                <React.Fragment>
                    <Button id="add-insurance-dialog-button" compact onClick={openInsuranceForm.bind(this, null)}>
                        <Icon name="add"></Icon>
                        Add Insurance
                    </Button>
                    <Button compact onClick={getInsurances} icon="refresh" />
                    <Button compact onClick={openInsuranceFilterbar} icon="filter" />
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
                                onChange={handleSelectAllInsurances}
                                checked={selected.size === insurances.size}
                                indeterminate={selected.size > 0 && selected.size !== insurances.size}
                            />
                        </Table.HeaderCell>
                    }
                    <Table.HeaderCell singleLine>id</Table.HeaderCell>
                    <Table.HeaderCell>Brand</Table.HeaderCell>
                    <Table.HeaderCell>Model Name</Table.HeaderCell>
                    <Table.HeaderCell>req</Table.HeaderCell>
                    <Table.HeaderCell>req_alter</Table.HeaderCell>
                    {!selected && <Table.HeaderCell></Table.HeaderCell>}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {insurances &&
                    insurances.size > 0 &&
                    insurances.map(insurance => (
                        <Table.Row 
                            onClick={handleClickRow.bind(this, insurance)} 
                            onDoubleClick={handleNavigateDetail} 
                            key={insurance.id}
                        >
                            {selected &&
                                <Table.Cell textAlign="center">
                                    <Checkbox checked={isInsuranceChecked(insurance)}/>
                                </Table.Cell>
                            }
                            <Table.Cell>
                                {insurance.id}
                            </Table.Cell>
                            <Table.Cell singleLine>
                                {insurance.brand}                            
                            </Table.Cell>
                            <Table.Cell>
                                {insurance.modelName}
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                                {insurance.req}
                            </Table.Cell>
                            <Table.Cell>
                                {insurance.req_alter}
                            </Table.Cell>
                            {!selected && 
                                <Table.Cell textAlign="center">
                                    <Button 
                                        size='mini' 
                                        icon='edit' 
                                        onClick={openInsuranceForm.bind(this, insurance)}
                                    />
                                    <Button 
                                        size='mini' 
                                        icon='delete' 
                                    />
                                </Table.Cell>
                            }
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

        {insuranceFilterbar &&
            insuranceFilterbar.open &&
            <InsurancesViewFilterForm/>
        }
        
        {addInsuranceDialog &&
            addInsuranceDialog.open &&
            <InsurancesViewForm/>
        }
    </Segment>
}


const mapStateToProps = (state, ownProps) => {
    return { ...state.insurances }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ...InsurancesActions,
    }, dispatch);
}

export default 
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(InsurancesView)
    
