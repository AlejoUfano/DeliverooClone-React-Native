import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)
  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity disabled={!items.length} onPress={()=>items.length && navigation.navigate('Basket')} className='bg-[#00ccbb] p-4 mx-5 flex-row items-center space-x-1 rounded-lg'>
        <Text className='text-white font-extrabold rounded text-lg bg-[#01a296] px-2'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'><Currency quantity={basketTotal} currency='USD'/></Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon