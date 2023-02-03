import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 1000)
    }, [])
  return (
    <SafeAreaView className="pt-7 bg-white justify-center items-center flex-1">
      <Animatable.Image
      source={require('../assets/loadingGif.gif')}
      animation='slideInUp'
      iterationCount={1}
      className='h-96 w-96'
      />
      <Animatable.Text
      animation='slideInUp'
      iterationCount={1}
      className='text-lg my-10 text-[#00ccbb] font-bold text-center'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color='#00ccbb'/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen