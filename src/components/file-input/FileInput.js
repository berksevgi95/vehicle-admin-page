import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Icon, List } from 'semantic-ui-react';

const styles = {
    dropzone : {
        display : 'flex',
        width : '100%',
        overflow : 'auto',
        height : 166,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out',
        userSelect : 'none',
        '&:hover' : {
            cursor : 'pointer'
        }
    },
    error : {
        borderColor: '#ff1744',
    },
    isDragging : {
        borderColor : '#85b7d9'
    },
    list : { 
        margin: '0px !important', 
        overflow: 'auto !important', 
        width: '100% !important', 
        height: '100% !important', 
        padding: '20px !important' 
    },
    flex : {
        display : 'flex !important'
    },
    marginAuto : {
        margin : 'auto !important'
    }
}

const FileInput = ({
    classes,
    onChange,
    id,
    name,
    value,
    multiple,
    formikRef,
    error,
    ...props
}) => {

    const [files, setFiles] = React.useState([]);
    const [isDragging, setIsDragging] = React.useState(false)
    const innerRef = React.useRef()
    const dropRef = React.useRef()

    const handleDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsDragging(true)
    }

    const handleDragLeave = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsDragging(false)
    }

    const handleDrop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const fileList = [...files, ...e.dataTransfer.files];
        setFiles(fileList)
        formikRef.setFieldValue(name, fileList)
        setIsDragging(false)
    }

    React.useEffect(() => {
        dropRef.current.addEventListener('dragover', handleDragOver)
        dropRef.current.addEventListener('dragleave', handleDragLeave)
        dropRef.current.addEventListener('drop', handleDrop)

        return () => {
            dropRef.current.removeEventListener('dragover', handleDragOver, false)
            dropRef.current.removeEventListener('dragleave', handleDragLeave, false)
            dropRef.current.removeEventListener('drop', handleDrop, false)
        }
    }, [])

    const handleDoubleClick = () => {
        innerRef.current.click()
    }

    const handleOnFileChange = (e) => {
        const fileList = [...files, ...innerRef.current.files];
        setFiles(fileList)
        formikRef.setFieldValue(name, fileList)
    }

    const handleDeleteFile = (index) => {
        const fileArr = [...files]
        fileArr.splice(index, 1)
        setFiles(fileArr)
        formikRef.setFieldValue(name, fileArr)
    }

    return (
        <div ref={dropRef} onDoubleClick={handleDoubleClick} 
            className={classNames(classes.dropzone, {
                [classes.error] : Boolean(error),
                [classes.isDragging] : isDragging
            })} 
        >
            <input
                hidden 
                type="file"
                id={id}
                name={name}
                onChange={handleOnFileChange}
                multiple={multiple}
                ref={innerRef}
            ></input>
            {files &&
                files.length > 0 ?
                <List divided relaxed className={classes.list}>
                    {files.map((file, index) => (
                        <List.Item key={index} className={classes.flex}>
                            <div className="flex">
                                <List.Icon 
                                    name={file.type.startsWith('image') ? 
                                        'image' : 
                                        'file'
                                    } 
                                    size='large' 
                                    verticalAlign='middle' 
                                    className={classes.marginAuto}
                                />
                            </div>
                            <div className="flex w-full ml-4">
                                <div className="w-full">
                                    <List.Header as='a'>
                                        {file.name}
                                    </List.Header>
                                    <List.Description as='a'>
                                        Updated 10 mins ago
                                    </List.Description>
                                </div>
                                <Icon name="close" onClick={handleDeleteFile.bind(this, index)}/>
                            </div>
                        </List.Item>
                    ))}
                </List> :
                error ?
                    <span className="m-auto">
                        {error}
                    </span> :
                    <span className="m-auto">
                        Drag 'n' drop some files here, or double click to select files
                    </span>
            }
        </div>
    )
}

export default injectSheet(styles)(FileInput)