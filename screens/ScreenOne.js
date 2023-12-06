import { View, Text, Button ,StyleSheet} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PressableButton from "../components/PressableButton";

const ScreenOne = ({ navigation }) => {
  return (
    <View>

      <View>
        <Text>“没有规矩 不成方圆”</Text>
      </View>

      <Button
        title="Go to ScreenTwo"
        onPress={() => navigation.navigate("ScreenTwo")}
      />
      <PressableButton></PressableButton>
    </View>
  );
};
const Styles = StyleSheet.create({
 
});


export default ScreenOne;
