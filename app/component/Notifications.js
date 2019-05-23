import React, { Component } from 'react'
import { FlatList, TouchableHighlight } from 'react-native'
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo'
import {list} from '../constants/notificationList'

class Notifications extends Component {

    handleClick=()=>{
        console.log('clicked')
    }
    renderItem = ({ item }) => (
        <ListItem
            rightIcon={
                <TouchableHighlight>
                    <Icon name="chevron-small-right" style={{fontSize:24}} />
                </TouchableHighlight>
            }
            bottomDivider={true}
            topDivider={true}
            containerStyle={{backgroundColor: item.unRead,}}
            titleStyle={{fontSize: 16, fontWeight: 'bold',}}
            onPress={this.handleClick}
            title={item.name + item.message}
            subtitle={item.subtitle}
            leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
            }}
        />
    )

    keyExtractor = (item, index) => index.toString()
    
    render() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={this.renderItem}
            />
        )
    }
}

export default Notifications
