import React, {useEffect} from 'react'
import { useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import { useSelector} from 'react-redux';
import CardRecipe from '../../components/cardRecipe';
import { UseFetchRecipes } from './../../api/recipes/useFetchRecipes';
import { selectAllRecipes } from './../../redux/celector/celectors';

export default function RecipesList({navigation}) {

    const listRecipes = useSelector(selectAllRecipes)
    const {getAllRecipes} = UseFetchRecipes()
    const [page, setPage] = useState(0)


    const renderItem = ({item})=> {
        return(<CardRecipe navigation={navigation} recipe={item}/>)
    }

    const onEndReached = ()=>{
        setPage(page + 1)
    }

    useEffect(() => {
        getAllRecipes(page)
        
    }, [page])
    return (
            <FlatList
                onEndReached={onEndReached}
                data={listRecipes}
                renderItem={renderItem}
                keyExtractor={(recipe,index)=>index}
                contentContainerStyle={{flexGrow:1}}
                ListFooterComponent={()=><View style={{padding:40}}><ActivityIndicator/></View>}
            />
    )
}
