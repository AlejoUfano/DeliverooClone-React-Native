import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    
    >
        {/* CategoryCard */}
        <CategoryCard title='Testing 1' imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title='Testing 2' imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title='Testing 3' imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title='Testing 4' imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title='Testing 5' imgUrl='https://links.papareact.com/gn7'/>
        <CategoryCard title='Testing 6' imgUrl='https://links.papareact.com/gn7'/>
      <Text></Text>
    </ScrollView>
  )
}