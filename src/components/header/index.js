import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Headers =()=> {
    const day = [
        "Dimanche", "lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi","Samedi"
    ]

    const mounth = [
        "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ]

    const date = new Date()

    return (
        <Text style={styles.container} >
            <Text style={styles.day}>
                {`${day[date.getDay()]}`}
            </Text> 
            {`  ${date.getDate()} ${mounth[date.getMonth()]}`}
        </Text>
    )
}
export default Headers

const styles = StyleSheet.create({
    container:{
        marginLeft:25,
        marginBottom:26,
        marginTop:10,
        fontSize: 36,
        color:"black"
       
    },
    day:{
        
        fontWeight: 'bold',
        marginRight:15,
        fontSize: 56,
    }
})