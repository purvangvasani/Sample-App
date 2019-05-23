import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, TouchableNativeFeedback } from 'react-native'
import { Card, CardItem, Grid, Col, Row, Button, Thumbnail, Content } from 'native-base';
import Icon from 'react-native-vector-icons/Foundation'
import { products } from '../constants/product';

class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color: 'lightgrey',
        }
    }

    renderRaw=({item})=>{
        return(<Card style={{marginBottom: 20,}}>
                <CardItem  style={{borderBottomWidth: 1, borderColor: 'grey',}}>
                    <Grid>
                        <Col size={15}>
                            <View style={{backgroundColor: 'lightgrey', width: 40, height: 40, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 30,}}>
                                <Text style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>{item.title[0]}</Text>
                            </View>
                        </Col>
                        <Col size={70}>
                             <View style={{paddingLeft: 25}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold',}}>{item.title}</Text>
                                <Text>{item.subtitle}</Text>
                            </View>
                        </Col>
                        <Col size={15}>
                            <View style={{ backgroundColor: 'white', width: 45, height: 45, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 30,}}> 
                            <TouchableOpacity onPress={this.handleFavorite.bind(this, item.id)}>
                                <Icon name="heart" color={this.state.color} style={{fontSize: 24, textAlign: 'center', paddingTop: 10}}/>
                            </TouchableOpacity>
                            </View>
                        </Col>
                    </Grid>
                </CardItem>
                <CardItem>
                    <Grid>
                        <Col size={25} >
                            <Image source={item.uri}  />                    
                        </Col>
                        <Col size={75}>
                            <View style={{paddingLeft: 25}}>
                                <Grid>
                                    <Col size={75}>
                                        <Text style={{fontSize: 14, fontWeight: 'bold',}}>{item.title}</Text>
                                    </Col>
                                    <Col size={25}>
                                        <Text style={{fontSize: 16,  }}>{'\u20B9'}{item.price}</Text>    
                                    </Col>
                                </Grid>
                                <Grid style={{paddingTop: 15}}>
                                    <Col size={20}>
                                        <View style={{backgroundColor: 'green', borderRadius: 115}}>
                                            <Text style={{fontSize: 14, color: 'white', textAlign: 'center'}}>{item.ratings} <Icon name="star" color={'white'}  style={{fontSize: 14}} /></Text>
                                        </View>
                                    </Col>
                                    <Col size={60}>
                                        <Text style={{paddingLeft: 10}}>({item.reviews})</Text>
                                    </Col>
                                    <Col size={20}>
                                        <View>
                                            <TouchableNativeFeedback onPress={this.handleInfo.bind(this, item.title)}>
                                                <Icon name="info" style={{fontSize: 26, color: 'blue'}} />
                                            </TouchableNativeFeedback>
                                        </View>
                                    </Col>
                                </Grid>
                                <Grid style={{paddingTop: 30}}>
                                    <Col size={100}>
                                        <Button block small dark>
                                            <Text style={{fontWeight: 'normal', color: 'white', fontSize: 14}}>Know more</Text>
                                        </Button>
                                    </Col>
                                </Grid>
                            </View>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        )
    }

    handleInfo(value){
        alert(value)
    }

    handleFavorite(value){
       console.log('====================================');
       console.log(value + ' favourite');
       console.log('====================================');
       alert('item '+value+ ' marked as favorite.')
    }
    render() {
        return (
                <FlatList 
                    data={products} 
                    renderItem={this.renderRaw} 
                    keyExtractor={(item,index) => 'key'+index} 
                    onEndReachedThreshold = {1} 
                />
        )
    }
}
export default Products