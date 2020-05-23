import React from 'react';

const Image = ({
    src,
    ...props
}) => {
    const [loaded, setLoaded] = React.useState(false);

    const handleSetLoaded = () => {
        setLoaded(true)
    }

    return (
        <img
            className="w-full mb-4 sm:mb-0"
            src={!loaded ? '/assets/images/no_image.svg' : (src || '/assets/images/no_image.svg')}
            onLoad={handleSetLoaded}
            {...props}
        />
    )
}

export default Image;