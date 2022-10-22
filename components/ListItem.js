import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import logo from '../assets/logoweb.png'

export default function ListItem(){
    return (<View styles={styles.container}>
        <Text styles={styles.title}>ListItems</Text>
        <Image style={styles.ListItem} source={logo} />
    </View>);
}


const styles = StyleSheet.create({
    container: {

    },

    title: {
        paddingLeft:100
    },
    
    ListItem: {
        width: 140, 
        height: 180
    }
});