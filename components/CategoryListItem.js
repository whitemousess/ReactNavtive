import React from 'react';
import App from "../App";
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Ski from '../assets/ski.png'

export default function CategoryListItem(props){
    const { category } = props;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
            <Image style={styles.Categoryimg} source={Ski} />
        </View>
    );
}

const styles  = StyleSheet.create({
    container: {
      alignItems: 'center', 
      padding: 16,
      borderRadius: 7,
      backgroundColor: '#fff',
      shadowColor: 'red',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: {width: 0,height: 0},
      marginBottom: 16
    },

    Categoryimg: {
        width: 100,
        height: 120,
        
    },

    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});