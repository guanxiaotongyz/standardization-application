import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PressableButton from "../components/PressableButton";

const ScreenTwo = ({ navigation }) => {
  const [displayTextone, setDisplayTextone] = useState();
  const [displayTexttwo, setDisplayTexttwo] = useState();

  const [textColor, setTextColor] = useState("black");
  const [textColor2, setTextColor2] = useState("black");

  return (
    <View>
      <View style={Styles.header}>
        <Text style={Styles.headerfont}>“没有规矩 不成方圆”</Text>
      </View>

      <View style={Styles.buttonview}>
        <PressableButton
          style={Styles.button}
          pressHandler={() => {
            setDisplayTextone(
              "通过标准化活动，按照规定的程序经协商一致制定，为各种活动或其结果提供规则、指南或特性，供共同使用和重复使用的文件。"
            );
            setTextColor("#5a80b8");
          }}
        >
          <Text style={Styles.buttontext}>标准定义</Text>
        </PressableButton>

        <View style={Styles.comment}>
          <Text style={[Styles.commenttext]}>GB/T 20000.1-2014 5.3</Text>
        </View>

        <View style={Styles.commentkey1}>
          <Text style={[Styles.commenttext, { color: textColor }]}>
            {displayTextone}
          </Text>
        </View>
      </View>
      {/* ======= */}

      <View style={Styles.buttonview}>
        <PressableButton
          style={Styles.button}
          pressHandler={() => {
            setDisplayTexttwo("通俗地讲就是涉及标准的一系列活动");
            setTextColor2("#5a80b8");
          }}
        >
          <Text style={Styles.buttontext}>标准化</Text>
        </PressableButton>

        <View style={Styles.comment}>
          <Text style={[Styles.commenttext]}>按标准发布单位属性分</Text>
        </View>

        <View style={Styles.commentkey2}>
          <Text style={[Styles.commenttext, { color: textColor2 }]}>
            {displayTexttwo}
          </Text>
        </View>
      </View>
      {/* ========= */}

      <View style={Styles.buttonview}>
        <PressableButton
          style={Styles.buttontonextpage}
          pressHandler={() => navigation.navigate("ScreenThree")}
        >
          <Text style={Styles.buttonnexttext}>按我更精彩</Text>
        </PressableButton>
      </View>

      <View style={Styles.buttomtextview}>
        <Text style={Styles.buttomtext}>探讨</Text>
        <Text style={Styles.buttomtext}>学习</Text>
        <Text style={Styles.buttomtext}>宣传</Text>
        <Text style={Styles.buttomtext}>践行</Text>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  header: {
    marginTop: 15,
    marginBottom: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerfont: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
  },
  buttonview: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  button: {
    height: 60,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5a80b8",
    borderRadius: 10,
    borderWidth: 3, // Make the border thicker
    borderColor: "#49678d", // A darker shade for the border
    shadowColor: "#000", // Shadow color
  },
  buttontext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  comment: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 30,
    height: 20,
    width: 239,
  },
  commenttext: {
    fontSize: 19,
    fontWeight: "bold",
  },
  commentkey1: {
    marginTop: 10,
    marginLeft: 30,
    height: 135,
    width: 260,
  },





  buttomtextview: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  buttomtext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  buttontonextpage: {
    height: 80,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAD2D2", // The color from the image
    borderRadius: 60, // Adjust to match the image
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5, // Adjust the shadow blur radius as needed
  },
  buttonnexttext: {
    fontSize: 20, // Adjust the font size as needed
    fontWeight: "bold",
    color: "#000", // Adjust the text color as needed to match the image
    textAlign: "center",
  },
});

export default ScreenTwo;
