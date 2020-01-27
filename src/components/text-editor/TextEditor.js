
import React from "react";
import Draft from "draft-js";
import {
    ResizableBox
} from 'react-resizable'
import { Ref, Button, Icon, Divider } from "semantic-ui-react";
import injectSheet from 'react-jss';
import classNames from 'classnames';

const { Editor, EditorState, RichUtils, getDefaultKeyBinding } = Draft;


const styleMap = {
    CODE: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
    }
};

const styles = {
    root : {
        borderRadius : '.28571429rem',
        height : '100%',
        width : '100%',
        background: '#fff',
        border: '1px solid rgba(34,36,38,.15) !important',
        fontFamily: '"Georgia", serif',
        fontSize: 14,
        padding: 15,
    },
    focused : {
        borderColor : '#85b7d9 !important'
    },
    container : {
        height : 'calc(100% - 65px)',
        width : '100%',
        overflow : 'auto',
        '&:hover' : {
            cursor : 'text'
        }
    },
    buttonGroup : {
        marginBottom : '1px !important'
    }
}

const getBlockStyle = (block) => {
    switch (block.getType()) {
        case "blockquote":
            return "RichEditor-blockquote";
        default:
            return null;
    }
}

const Controls = injectSheet(styles)(props => {
    const { editorState, classes } = props;

    const currentStyle = editorState.getCurrentInlineStyle();
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    const handleClickBlockStyle = (style, e) => {
        e.preventDefault()
        props.onBlockStyleToggle(style)
    }

    const handleClickInlineStyle = (style, e) => {
        e.preventDefault()
        props.onInlineStyleToggle(style)
    }
        
    return (
        <div className="RichEditor-controls">
            <Button.Group className={classes.buttonGroup}>
                {[{ label: "H1", style: "header-one" },
                { label: "H2", style: "header-two" },
                { label: "H3", style: "header-three" },
                { label: "H4", style: "header-four" },
                { label: "H5", style: "header-five" },
                { label: "H6", style: "header-six" }].map(type => (
                    <Button 
                        active={type.style === blockType} 
                        key={type.label} 
                        icon 
                        onClick={handleClickBlockStyle.bind(this, type.style)}
                    >
                        {type.label}
                    </Button>
                ))}
            </Button.Group>{" "}

            <Button.Group className={classes.buttonGroup}>
                {[{ label: "Blockquote", style: "blockquote" },
                { label: "UL", style: "unordered-list-item" },
                { label: "OL", style: "ordered-list-item" },
                { label: "Code Block", style: "code-block" }].map(type => (
                    <Button 
                        active={type.style === blockType} 
                        key={type.label} 
                        icon 
                        onClick={handleClickBlockStyle.bind(this, type.style)}
                    >
                        {type.label}
                    </Button>
                ))}
            </Button.Group>{" "}

            <Button.Group className={classes.buttonGroup}>
                {[{ label: "Bold", style: "BOLD", icon : "bold" },
                { label: "Italic", style: "ITALIC", icon : "italic" },
                { label: "Underline", style: "UNDERLINE", icon : "underline" },
                { label: "Monospace", style: "CODE", icon : 'code' }].map(type => (
                    <Button 
                        active={currentStyle.has(type.style)} 
                        key={type.label} 
                        icon 
                        onClick={handleClickInlineStyle.bind(this, type.style)}
                    >
                        <Icon name={type.icon}></Icon>
                    </Button>
                ))}
            </Button.Group>
        </div>
    );
});

const TextEditor = ({
    classes,
    ...props
}) => {

    const containerRef = React.useRef()
    const editorRef = React.useRef()
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
    const [initialWidth, setInitialWidth] = React.useState(500)

    const [isFocused, setIsFocused] = React.useState(false)

    const focus = () => editorRef.current && editorRef.current.focus()
    const onChange = (editorState) => setEditorState(editorState)
    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return true;
        }
        return false;
    }
    const mapKeyToEditorCommand = (e) => {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(e, editorState, 4);
            if (newEditorState !== editorState) {
                onChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    }
    const toggleBlockType = (blockType) => {
        onChange(RichUtils.toggleBlockType(editorState, blockType));
    }
    const toggleInlineStyle = (inlineStyle) => {
        onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    }

    const handleOnFocus = () => setIsFocused(true)
    const handleOnBlur = () => setIsFocused(false)

    React.useEffect(() => {
        containerRef.current && setInitialWidth(containerRef.current.clientWidth)
    }, [])

    return (
        <div className="w-full" ref={containerRef}>
            <ResizableBox
                className="box"
                width={initialWidth}
                height={300}
                minConstraints={[705, 300]}
                maxConstraints={[containerRef.current && containerRef.current.clientWidth, 800]}
            >
                <div className={classNames(classes.root, {
                    [classes.focused] : isFocused
                })}>
                    <Controls
                        editorState={editorState}
                        onBlockStyleToggle = {toggleBlockType}
                        onInlineStyleToggle = {toggleInlineStyle}
                    />
                    <Divider></Divider>
                    <div className={classes.container} onClick={focus}>
                        <Editor
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            blockStyleFn={getBlockStyle}
                            customStyleMap={styleMap}
                            editorState={editorState}
                            handleKeyCommand={handleKeyCommand}
                            keyBindingFn={mapKeyToEditorCommand}
                            onChange={onChange}
                            ref={editorRef}
                            spellCheck={true}
                        />
                    </div>
                    
                </div>
            </ResizableBox>
        </div>
    );
    
}

export default injectSheet(styles)(TextEditor);
