import { View, Text, Button, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PressableButton from "../components/PressableButton";

const ScreenOne = ({ navigation }) => {
  const [displayTextone, setDisplayTextone] = useState("为什么越来越被重视?");
  const [displayTexttwo, setDisplayTexttwo] = useState("什么是标准化？");
  const [displayTextthree, setDisplayTextthree] = useState("什么是标准体系？");

  const [textColor, setTextColor] = useState("black");
  const [textColor2, setTextColor2] = useState("black");
  const [textColor3, setTextColor3] = useState("black");

  const [imageVisible, setImageVisible] = useState(true);
  const [imageVisible2, setImageVisible2] = useState(false);
  const [imageVisible3, setImageVisible3] = useState(false);

  const [firstPressed, setFirstPressed] = useState(false);
  const [secondPressed, setSecondPressed] = useState(false);
  const [thirdPressed, setThirdPressed] = useState(false);

  return (
    <View>
      <View style={Styles.header}>
        <Text style={Styles.headerfont}>“没有规矩 不成方圆”</Text>
      </View>

      <View style={Styles.buttonview}>
        <View style={Styles.presscontainer}>
          <PressableButton
            style={Styles.button}
            pressHandler={() => {
              if (!firstPressed) {
                setFirstPressed(true);
                // Do first button actions...
                setDisplayTextone("标准的实质是规矩、规则");
                setTextColor("#5a80b8");
                setImageVisible(false);
                setImageVisible2(true);
              }
            }}
            disabled={firstPressed}
          >
            <Text style={Styles.buttontext}>标准</Text>
          </PressableButton>
          {/* /add Image/ */}
          {imageVisible ? ( // Render the image only if imageVisible is true
            <Image
              source={require("../assets/icon2.png")} // Replace with your image path
              style={Styles.imageStyle} // Add a style for your image if necessary
            />
          ): (<View style={{height:50,width:50 }}></View>)}
        </View>

        <View style={Styles.comment}>
          <Text style={[Styles.commenttext, { color: textColor }]}>
            {displayTextone}
          </Text>
        </View>
      </View>

      <View style={Styles.buttonview}>
        <View style={Styles.presscontainer}>
          <PressableButton
            style={Styles.button}
            pressHandler={() => {
              if (firstPressed && !secondPressed) {
                setSecondPressed(true);
                // Do second button actions...
                setDisplayTexttwo("通俗地讲就是涉及标准的一系列活动");
                setTextColor2("#5a80b8");
                setImageVisible2(false);
                setImageVisible3(true);
              }
            }}
            disabled={!firstPressed || secondPressed}
          >
            <Text style={Styles.buttontext}>标准化</Text>
          </PressableButton>
          {imageVisible2 ? ( // Render the image only if imageVisible is true
            <Image
              source={require("../assets/icon2.png")} // Replace with your image path
              style={Styles.imageStyle} // Add a style for your image if necessary
            />
          ):(<View style={{height:50,width:50 }}></View>)}
        </View>

        <View style={Styles.comment}>
          <Text style={[Styles.commenttext, { color: textColor2 }]}>
            {displayTexttwo}
          </Text>
        </View>
      </View>

      <View style={Styles.buttonview}>
        <View style={Styles.presscontainer}>
          <PressableButton
            style={Styles.button}
            pressHandler={() => {
              if (secondPressed && !thirdPressed) {
                setThirdPressed(true); // Set the third button as pressed
                // Do third button actions...
                setDisplayTextthree("理论上可看作一定范围内的标准的集合");
                setTextColor3("#5a80b8");
                setImageVisible3(false);
              }
            }}
            disabled={!secondPressed || thirdPressed}
          >
            <Text style={Styles.buttontext}>标准体系</Text>
          </PressableButton>
          {imageVisible3 ? ( // Render the image only if imageVisible is true
            <Image
              source={require("../assets/icon2.png")} // Replace with your image path
              style={Styles.imageStyle} // Add a style for your image if necessary
            />
          ): (<View style={{height:50,width:50 }}></View>)}
        </View>

        <View style={Styles.comment}>
          <Text style={[Styles.commenttext, { color: textColor3 }]}>
            {displayTextthree}
          </Text>
        </View>
      </View>

      {thirdPressed && (
        <View style={Styles.buttonview}>
          <PressableButton
            style={Styles.buttontonextpage}
            pressHandler={() => navigation.navigate("ScreenTwo")}
          >
            <Text style={Styles.buttonnexttext}>按一下更精彩</Text>
          </PressableButton>
        </View>
      )}

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
    marginBottom: 15,
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
    marginTop: 5,
  },
  presscontainer: {
    flexDirection: "row",
  },
  button: {
    height: 60,
    width: 120,
    marginLeft: 23,
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
    marginTop: 19,
    marginBottom: 5,
    height: 60,
    flexDirection: "row",
  },
  commenttext: {
    fontSize: 19,
    fontWeight: "bold",
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
  imageStyle: {
    marginTop: 10,
    marginRight: 0,
    width: 50, // Set the width of your image
    height: 50, // Set the height of your image
    resizeMode: "contain", // Keep the image aspect ratio
  },
});

export default ScreenOne;
