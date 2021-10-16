import React from 'react'
import { Image, View, Text, StyleSheet, Pressable } from 'react-native'

const TaskItem=({task, removeTask, validateTask})=> {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Pressable onPress={()=>validateTask(task.id)}>
                    {!task.isCompleted?
                        <Image
                        source={require('../../assets/icons/circle.png')}
                        />
                        :
                        <Image
                        source={require('../../assets/icons/circleWithValidation.png')}
                         />
                    }
                </Pressable>
                <Text style={{marginLeft:16, fontSize:18, color:!task.isCompleted?"black":"green"}}>{task.title}</Text>
            </View>
            <Pressable onPress={()=>removeTask(task.id)}>
                <Image
                    source={require('../../assets/icons/bin.png')}
                />
            </Pressable>
            
        </View>
    )
}
export default TaskItem

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom:10,
            marginHorizontal:35
            
        },
        subContainer:{
            flexDirection: "row",

        }
    }
)