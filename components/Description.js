import { useEffect,useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import axios from 'axios';
export default function Description({route}){
    const {id,navId} = route.params;
    const [list,setList] = useState([]);
    const urlItem = "https://auntieanne-demo.proseller.io/product/api/productpreset/loaditems/webOrdering/64e4e47b-b428-4ee3-97f5-62bfa03c8ba6/";
    useEffect(function(){
        axios.post(urlItem + navId).then(function(res){
            setList(res.data.data);
        }).catch(function(err){
            console.log(err);
        })
    },[id])
    return (
        <View>
            {list.map(function(item){
                return (
                    <View>
                        {item.id == id &&
                        <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Image style={styles.image} source={{ uri:item.product.defaultImageURL,width:100,height:100}} />
                        <Text style={styles.flex}>{item.product.description}</Text>
                        </View>
                        }
                    </View>
                )
            })}
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