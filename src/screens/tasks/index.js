import React, { useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Headers from '../../components/header'
import InfosTask from '../../components/infosTask';
import TaskItem from '../../components/taskItem';
import { getTask } from '../../redux/celector/celectors';
import InputForm from './../../components/form/inputForm';
import { toggleTask,deleteTask } from './../../redux/action/setRecipesAction';



export default function TaskScreen() {


    const arrayList = useSelector(getTask)
    const dispatch = useDispatch()

    const [isVisible,setIsVisible] = useState(false)
    
    const validateTask = (id) =>{

        dispatch(toggleTask(id))

    }

    const changeFormStatus = () => {
        setIsVisible(!isVisible)
    }

    const removeTask = async (id) =>{
        dispatch(deleteTask(id))
    }

    const renderItem = ({item}) => {
         return(<TaskItem validateTask={validateTask} removeTask={removeTask}  task={item}/>)
    }

    

    return (
        <>
            
            <FlatList
                ListHeaderComponent={
                    <>
                        <Headers/>
                        {isVisible && <InputForm />}
                        <InfosTask task={arrayList} />
                    </>
                }
                data={arrayList}
                renderItem={renderItem}
                keyExtractor={(item) =>item.id}
                contentContainerStyle={{flexGrow:1,}}
            />
            <Pressable style={styles.positionButton} onPress={changeFormStatus}>
               <Image
                source={isVisible ? 
                    require("../../../assets/icons/remove.png") : 
                    require("../../../assets/icons/add.png")}
               />
                
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    positionButton:{
        position:"absolute",
        right:20,
        padding:15,
        backgroundColor:"orange",
        bottom:20,
        borderRadius:50,
    }
})