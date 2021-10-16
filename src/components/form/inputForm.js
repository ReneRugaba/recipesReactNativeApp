import React, {useState} from 'react'
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/action/setRecipesAction';



const InputForm=()=> {
    const [text,setText] = useState("")
    const dispatch = useDispatch()

    const onChangeText =(valueInput)=>{
        setText(valueInput)
    }

    const onPresseButton = () =>{
        dispatch(addTask(text))
        // setArrayList(text)
        setText("")
    }
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Nouvelle tâche'
            />
            <Button
                title='Ajouter'
                onPress={onPresseButton}
                color="blue"
            />
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        marginBottom:20
    },
    input:{
        borderColor: "black",
        borderWidth: 1,
        width: "70%",
        height:40,
        borderRadius:10,
        paddingLeft:10
    },
   
})