export default [{
    icon : 'car',
    title : 'vehicles',
    tag: 'vehicles,araçlar,list',
    description : 'vehicles.list.description',
    action : (props) => props.history.push('/vehicles')
},{
    icon : 'car',
    title : 'vehicles.add',
    tag: 'vehicles,araçlar,ekleme,add',
    description : 'vehicles.add.description',
    action : (props) => Promise.resolve(
        props.history.push('/vehicles')
    ).then(() => setTimeout(() => {
        document.getElementById('add-vehicle-dialog-button').click()   
    }, 250))
}]