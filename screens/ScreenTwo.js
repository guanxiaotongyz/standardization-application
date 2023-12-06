import { View, Text, Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ScreenTwo = ({navigation}) => {
  return (
    <View>
      <Text>ScreenTwo</Text>
      <Button
        title="Go to ScreenThree"
        onPress={() => navigation.navigate('ScreenThree')}
      />
    </View>
  )
}

export default ScreenTwo