import React from 'react';
import { useDropzone } from 'react-dropzone';
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Icon } from 'semantic-ui-react';

const styles = {
    dropzone : {
        // flex: 1,
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',

        display : 'flex',
        width : '100%',
        overflow : 'auto',
        minHeight : 100,

        padding: 20,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out',
    },
    focused : {
        borderColor: '#85B7D9'
    },
    marginAuto : {
        margin : 'auto !important'
    },
    file : {
        display : 'flex !important',
        flexDirection : 'column !important',
        marginRight : 10
    },
    title : {
        width: 70,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        display: 'block',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    icon : {
        fontSize : '20px !important'
    }
}

const FileInput = ({
    classes,
    onChange,
    ...props
}) => {

    const [storedFiles, setStoredFiles] = React.useState([])

    const onDropAccepted = (files, event) => {
        Promise.resolve(
            setStoredFiles([...storedFiles, ...files])
        ).then(() => {
            console.log(storedFiles)
            // onChange && onChange(storedFiles)
        })
    }

    const { 
        isFocused, 
        isDragAccept, 
        getRootProps, 
        getInputProps,
    } = useDropzone({
        ...props,
        onDropAccepted,
    });

    return (
        <div {...getRootProps({
            className: classNames(classes.dropzone, {
                [classes.focused] : isDragAccept || isFocused
            })
        })}>
            <input {...getInputProps()}/>
            {storedFiles &&
                storedFiles.length > 0 ?
                storedFiles.map(file => (
                    <div className={classes.file}>
                        <Icon 
                            className={classNames(classes.marginAuto, classes.icon)} 
                            name={file.type.startsWith("image") ? "file image" : "file"}
                        />
                        <span className={classes.title}>
                            {file.path}
                        </span>
                    </div>
                )) : 
                <p className={classes.marginAuto}>
                    Drag 'n' drop some files here, or click to select files
                </p>
            }
            
        </div>
    );
}

export default injectSheet(styles)(FileInput)