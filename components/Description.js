import { useEffect,useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

export default function Description({route}){
    const {itemName,itemImage,itemDescription} = route.params;
    return (
    <View >
        <Text style={styles.name}>{itemName}</Text>
        <Image style={styles.image} source={{ uri:itemImage,width:100,height:100}} />
        <Text style={styles.flex}>{itemDescription}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    name : {
        display : "flex",
        justifyContent : "center",
        alignItems : 'center',
        fontWeight:"bold",
        margin : 20
    },
    image : {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    flex : {
        display : "flex",
        justifyContent : "center",
        alignItems : 'center',
        margin : 20
    }
})