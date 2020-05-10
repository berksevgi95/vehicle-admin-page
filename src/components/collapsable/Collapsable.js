import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';

const styles = {
  collapsable : {
    transition: '.3s',
    position: 'relative',
  },
  expanded : {
    marginBottom: '70px !important'
  },
  clickPanel : {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    width: '100%',
    display: 'flex',
    background: 'linear-gradient(180deg, rgba(2,0,36,0) 1%, rgba(245,245,245,1) 47%)',
    zIndex: 2,

    '&:hover' : {
      cursor: 'pointer'
    }
  },
  collapsedClickPanel : {
    background: '#f5f5f5',
    bottom: -50,
  }
}

const Collapsable = ({
  className,
  children,
  classes,
}) => {
  const [initialHeight, setInitialHeight] = React.useState();
  const [height, setHeight] = React.useState();
  const [collapsed, setCollapsed] = React.useState();
  const ref = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      setInitialHeight(ref.current.clientHeight)
      setHeight((ref.current.clientHeight / 5) + 50)
    })
  }, [])

  const handleClickPanel = () => {
    setCollapsed(!collapsed)
    if (collapsed) {
      setHeight((ref.current.clientHeight / 5) + 50)
    } else {
      setHeight(initialHeight)
    }
  }

  return (
    <div
      style={{
        height
      }}
      className={classNames(
        className,
        classes.collapsable, {
          [classes.expanded]: collapsed
        }
      )}
      ref={ref}
    >
      {children}
      <div
        className={classNames(
          classes.clickPanel, {
            [classes.collapsedClickPanel] : collapsed
          }
        )}
        onClick={handleClickPanel}
      >
        {collapsed ? (
          <div className="m-auto">
            Collapse details
          </div>
        ) : (
          <div className="m-auto">
            Click for details
          </div>
        )}
        
      </div>
    </div>
  )
}

export default injectSheet(styles)(Collapsable);