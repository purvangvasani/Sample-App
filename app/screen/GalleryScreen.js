import React, { Component } from 'react';
import { View, Text, Image, Switch, FlatList } from 'react-native';
import { Icon, Card, CardItem, Left, Thumbnail, Body, DeckSwiper } from 'native-base';
import HeaderComponent from '../component/HeaderComponent';
import {title} from '../constants/constTitles'

import Styles from './Styles'

import {IMAGES} from '../constants/constImages'

export default class GalleryScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [],
            isLoading : false,
            SwitchOnValueHolder: false,
        }
    }
    
    componentDidMount(){
        this.setState({
            isLoading:true
        },this.getData)
    }

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="camera" style={{fontSize : 24, color:tintColor}} />
        )
    }

    renderRaw = ({item}) => {
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={item.uri} />
                        <Body>
                            <Text style={Styles.galleryCardText}>{item.text}</Text>
                            <Text note>NativeBase</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image style={Styles.galleryImageStyle} source={item.uri} />
                </CardItem>
                <CardItem>
                    <Icon name="heart" style={Styles.galleryIconStyle} />
                    <Text>{item.id}</Text>
                </CardItem>
            </Card>
        )
    }

    getData = () =>{
        const url =`${IMAGES}`;
        fetch(url).then((response) => response.json())
            .then((responseJson) => (
            this.setState({
                data : this.state.data.concat(responseJson),
                isLoading:false
            })   
        ))
    }

    ShowAlert = (value) =>{
        this.setState({
            SwitchOnValueHolder: value
        })  
      }

    render() {
        return (
            <View>
                <HeaderComponent title={title.Gallery} style={{color: 'blue'}}/>
                <View>
                    {this.state.SwitchOnValueHolder ? 
                        <Text style={Styles.galleryLayoutText}>
                            Change to Deck Layout
                        </Text> : 
                        <Text style={Styles.galleryLayoutText}>
                            Change to Linear Layout
                        </Text>
                    }
                <Switch
                    onValueChange={(value) => this.ShowAlert(value)}
                    value={this.state.SwitchOnValueHolder} />
                    {!this.state.SwitchOnValueHolder ?
                        <DeckSwiper
                            dataSource={IMAGES}
                            renderItem={item=>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.uri} />
                                        <Body>
                                            <Text style={Styles.galleryCardText}>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={Styles.galleryImageStyle} source={item.uri} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={Styles.galleryIconStyle} />
                                    <Text>{item.id}</Text>
                                </CardItem>
                            </Card>
                            }
                            />
                        :
                            <FlatList 
                                style={Styles.galleryFlatList}
                                data={IMAGES} 
                                renderItem={this.renderRaw} 
                                keyExtractor={(item,index) => 'key'+index} 
                                onEndReachedThreshold = {16} 
                            /> 
                    }
                </View>
            </View>
        );
    }
}
