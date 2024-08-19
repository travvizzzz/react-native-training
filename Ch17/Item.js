
import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./styles";


const data=new Array(200)
.fill(null)
.map((v, i) => ({ key: i.toString(), value: `Item ${i}` }))


export default function Item(){
    return(
        <View style={styles.container}>
            <FlatList
            data={data}
            renderItem={({ item }) => <Text
            style={styles.item}>{item.value}</Text>}/>
        </View>
    )
}