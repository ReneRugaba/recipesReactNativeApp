import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const InfosTask=({task})=> {
    
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>{`Nombre de tâches: ${task.length}`}</Text>
            <Text style={Styles.text}>{`Tâches validées: ${task?.filter(item=>item.isCompleted===true).length}`}</Text>
        </View>
    )
}
 export default InfosTask

 const Styles = StyleSheet.create({
     container:{
         flexDirection:"row",
         justifyContent: "space-between",
         paddingHorizontal:15,
         borderColor:"black",
         borderRadius:10,
         borderWidth:1,
         padding:20,
         margin:20,
     },
     text:{
        fontSize:15,
        fontWeight:"bold",
        color:"black"
     }
 })