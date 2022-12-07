import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,ScrollView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data,setData] = useState([]);
  const [list,setList] = useState([]);
  const url = "https://auntieanne-demo.proseller.io/product/api/productpreset/loadcategory/webOrdering/64e4e47b-b428-4ee3-97f5-62bfa03c8ba6/";
  const urlItem = "https://auntieanne-demo.proseller.io/product/api/productpreset/loaditems/webOrdering/64e4e47b-b428-4ee3-97f5-62bfa03c8ba6/"
  useEffect(function(){
    axios.post(url).then(function(res){
      setData(res.data.data);
      console.log(res.data.data);
    })
  },[])

  function Press(id){
    console.log("id : ",id);
    axios.post(urlItem + id).then(function(res){
      console.log("item-id " , res.data);
      setList(res.data.data);
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView} >
      {data.map(function(item){
        return (
          <View style={styles.item} key={item.id}>
            <TouchableOpacity onPress={() => Press(item.id)}>
            <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )
      })}
      </ScrollView>
      </View>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}>
        {list.map(function(item){
          console.log(item.product.defaultImageURL);
          return (
            <View style={styles.list} key={item.id}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.product.description}</Text>
              <Image source={{ uri:item.product.defaultImageURL,width:100,height:100}} />
            </View>
          )
        })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ScrollView : {
    display : "flex",
    flexDirection : "row",
    justifyContent : 'flex-start',
    alignItems : 'flex-start',
    flexGrow : 1
  },
  item : {
    margin : 50,
  },
  list : {
    display : "flex",
    justifyContent : "center",
    alignItems : 'center',
    margin : 20
  },
  name : {
    fontWeight:"bold"
  }
});
