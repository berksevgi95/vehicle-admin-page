import React from 'react'
import search from '../../configs/search'
import { List, BSTheme } from 'bs-ui-components'
import { Icon } from 'semantic-ui-react'

const SearchView = ({
    ...props
}) => {
    return (
        <div className="p-4">
            <h3 className="text-2xl">Search</h3>
            <List.List className="mt-4">
                {search &&
                    search.length > 0 &&
                    search
                        .map(e => (
                            <List.Item
                                onClick={e.action.bind(this, props)} 
                                theme={BSTheme.SECONDARY}
                                icon={
                                    <Icon name={e.icon} size="big"/>
                                }
                                title={e.title}
                                subtitle={e.description}
                                actions={[
                                    <Icon name={e.icon} size="arrow right"/>
                                ]}
                            />
                        ))}
            </List.List>
        </div>
    )
}

export default SearchView