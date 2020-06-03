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
},{
    icon : 'unlink',
    title : 'accidents',
    tag: 'accidents,kazalar,list',
    description : 'accidents.list.description',
    action : (props) => props.history.push('/vehicles')
},{
    icon : 'unlink',
    title : 'accidents.add',
    tag: 'accidents,kazalar,ekleme,add',
    description : 'accidents.add.description',
    action : (props) => Promise.resolve(
        props.history.push('/accidents')
    ).then(() => document.getElementById('add-accident-dialog-button').click())
}]