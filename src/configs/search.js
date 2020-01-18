export default [{
    icon : 'car',
    title : 'Vehicles',
    description : 'List all vehicles exist in system',
    action : (props) => props.history.push('/vehicles')
},{
    icon : 'car',
    title : 'Add Vehicle',
    description : 'Define new vehicle',
    action : (props) => Promise.resolve(
            props.history.push('/vehicles')
        ).then(
            () => document.getElementById('add-vehicle-dialog-button').click()
        )
}]