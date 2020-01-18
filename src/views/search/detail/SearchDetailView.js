import React from 'react'
import {
    Header,
    Segment,
    List,
} from 'semantic-ui-react'
import search from '../../../configs/search'

const SearchDetailView = ({
    ...props
}) => {

    return <Segment basic>
        <Header as='h3'>Search for {props.match.params.searchText}</Header>
        <List divided relaxed>
            {search &&
                search.length > 0 &&
                search
                    .filter(e => (
                        e.title.toLowerCase().includes(props.match.params.searchText.toLowerCase()) ||
                        e.description.toLowerCase().includes(props.match.params.searchText.toLowerCase())
                    ))
                    .map(e => (
                        <List.Item>
                            <List.Icon name={e.icon} size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header 
                                    onClick={e.action.bind(this, props)} 
                                    as='a'
                                >
                                    {e.title}
                                </List.Header>
                                <List.Description as='a'>
                                    {e.description}
                                </List.Description>
                            </List.Content>
                        </List.Item>
                ))}
            
        </List>
    </Segment>
}

export default SearchDetailView