import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { Container, Content } from 'native-base';
import HeaderComponent from '../component/HeaderComponent';
import { title } from '../constants/constTitles';
import Products from '../component/Products';

class ProductList extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="appstore-o" style={{fontSize : 24, color:tintColor}} />
        )
      }
    render() {
        return (
            <Container>
                <HeaderComponent title={title.ProductList}/>
                <Content padder style={{backgroundColor: 'lightgrey'}}>
                    <Products />
                </Content>
            </Container>
        )
    }
}
export default ProductList