// import React from 'react'
// import { 
//     Segment, 
//     Header,
//     Form, 
//     Input,
//     Button,
//     TextArea
// } from 'semantic-ui-react'
// import { useFormik } from 'formik';
// import OlMap from "ol/map";
// import OlView from "ol/view";
// import OlLayerTile from "ol/layer/tile";
// import OlSourceOSM from "ol/source/osm";
// import OlFeature from 'ol/feature'
// import OlGeomPoint from 'ol/geom/point'
// import OlSourceVector from 'ol/source/vector'
// import OlLayerVector from 'ol/layer/vector'
// import OlProj from 'ol/proj'
// import FileInput from '../../../components/file-input/FileInput';
// import TextEditor from '../../../components/text-editor/TextEditor';

// const AccidentsDetailView = ({
//     postAccident,
//     match,
//     history,
//     ...props
// }) => {

//     React.useEffect(() => {

//         var vectorSource = new OlSourceVector({
//             features: []
//         });

//         const olmap = new OlMap({
//             target: null,
//             layers: [
//                 new OlLayerTile({
//                     source: new OlSourceOSM()
//                 }),
//                 new OlLayerVector({
//                     source: vectorSource,
//                 })
//             ],
//             view: new OlView({
//                 center: [0, 0],
//                 zoom: 3
//             })
//         });
//         olmap.setTarget("map");

//         /* const socket = socketIOClient('http://localhost:4000');
//         socket.on('change color', (col) => {

//             vectorSource.clear()
//             col && col.length > 0 && col.forEach(coordinate => {
//                 const marker = new OlFeature({
//                     geometry: new OlGeomPoint(
//                         OlProj.fromLonLat([coordinate.lon, coordinate.lat])
//                     )
//                 });
//                 vectorSource.addFeature(marker)
//             })
//         }) */

//     }, [])

//     const formik = useFormik({
//         initialValues: {
//             brand: '',
//             modelName: '',
//             req: '',
//             req_alter: '',
//             files : []
//         },
//         onSubmit: values => {
//             console.log(values)
//             // postAccident(values).then(() => {
                
//             // })
//         },
//         validate: ({
//             brand,
//             modelName,
//             req,
//             req_alter,
//             files,
//         }) => {
//             const errors = {}

//             if(!files || files.length === 0){
//                 errors.files = 'Empty files'
//             }

//             return errors;
//         }
//     });

//     return <Segment basic>
//         <div className="flex justify-between">
//             <Header as='h3'>
//                 {match.params.id === "new" ? "New Accident" : "Accident"}
//             </Header>
//             {match.params.id !== "new" && <Button compact icon="delete" />}
//         </div>

//         <Form className="mt-4" onSubmit={formik.handleSubmit}>

//             {/* // */}
//             <Segment>
//                 <Form.Field
//                     control={Input}
//                     label='Description'
//                     id="description"
//                 >
//                     {/* <textarea
//                         id="description"
//                         name="description"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.description}
//                     /> */}
//                     <TextEditor/>
//                 </Form.Field>
//             </Segment>

//             <Segment>
//                 <Form.Field
//                     control={Input}
//                     label='Files'
//                     id="files"
//                 >
//                     <FileInput
//                         id="files"
//                         name="files"
//                         multiple
//                         error={formik.errors.files}
//                         formikRef={formik}
//                         value={formik.values.files}
//                     />
//                 </Form.Field>
//             </Segment>

//             <Segment>
//                 <Form.Field
//                     control={Input}
//                     label='Brand'
//                     placeholder='Ex. Ford, Volkswagen, etc.'
//                     id="brand"
//                 >
//                     <input
//                         id="brand"
//                         name="brand"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.brand}
//                     />
//                 </Form.Field>
//                 <Form.Field
//                     control={Input}
//                     label='Model Name'
//                     placeholder='Ex. Focus, Golf, etc.'
//                     id="modelName"
//                 >
//                     <input
//                         id="modelName"
//                         name="modelName"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.modelName}
//                     />
//                 </Form.Field>
//                 <Form.Field
//                     control={Input}
//                     label='Req'
//                     placeholder='joe@schmoe.com'
//                     id="req"
//                     error={formik.errors.req && {
//                         content: formik.errors.req,
//                         pointing: 'above',
//                     }}
//                 >
//                     <input
//                         id="req"
//                         name="req"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.req}
//                     />
//                 </Form.Field>
//                 <Form.Field
//                     control={Input}
//                     label='Req Alter'
//                     id="req_alter"
//                 >
//                     <input
//                         id="req_alter"
//                         name="req_alter"
//                         type="text"
//                         onChange={formik.handleChange}
//                         value={formik.values.req_alter}
//                     />
//                 </Form.Field>
//             </Segment>

//             <Segment>
//                 <Form.Field
//                     control={Input}
//                     label='Location'
//                     id="location"
//                 >
//                     <div id="map" style={{ width: "100%", height: 300 }}/>
//                 </Form.Field>
//             </Segment>

//             <div className="w-full flex justify-between">
//                 <Button basic onClick={history.goBack}>Cancel</Button>
//                 <Button type='submit'>Submit</Button>
//             </div>
            
//         </Form>
//     </Segment>
// }

// export default AccidentsDetailView






















import React from 'react'
import { 
    Segment, 
    Header,
    Form, 
    Input,
    Button,
    TextArea
} from 'semantic-ui-react'
import { useFormik } from 'formik';
import OlMap from "ol/map";
import OlView from "ol/view";
import OlLayerTile from "ol/layer/tile";
import OlSourceOSM from "ol/source/osm";
import OlFeature from 'ol/feature'
import OlGeomPoint from 'ol/geom/point'
import OlSourceVector from 'ol/source/vector'
import OlLayerVector from 'ol/layer/vector'
import OlProj from 'ol/proj'
import FileInput from '../../../components/file-input/FileInput';
import TextEditor from '../../../components/text-editor/TextEditor';

const AccidentsDetailView = ({
    postAccident,
    match,
    history,
    ...props
}) => {

    return (
        <div className="fadein-animation p-4">
            <h3 className="text-2xl">Accident Detail</h3>
            <div className="flex flex-col sm:flex-row w-full">
                <TextEditor/>

            </div>
            
            {/* {addVehicleDialog &&
                addVehicleDialog.open &&
                <VehiclesViewForm/>
            } */}
        </div>
    )
}

export default AccidentsDetailView