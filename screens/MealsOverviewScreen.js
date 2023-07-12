import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import  { MEALS } from '../data/dummy-data' 
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route}) {
    const catId = route.params.catagoryId; 

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    }); 

    const renderMealItem = (itemData) => {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,

        }
        return (
            <MealItem {...mealItemProps} />
        ) 
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id}  renderItem={renderMealItem} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

