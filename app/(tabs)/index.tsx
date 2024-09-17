import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

import Svg, { Path } from "react-native-svg";
import Button from "../../components/Button";
import InputSpinner from "react-native-input-spinner";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [total, setTotal] = useState("0");

  const onCalcular = () => {
    if (amount.length > 0 && percent.length > 0) {
      let cTotal = (parseFloat(amount) * (100 + parseFloat(percent))) / 100;
      setTotal(cTotal.toString());
    } else {
      setTotal("0");
    }

    Keyboard.dismiss();
  };

  const validateAndSet = (value: any, setValue: any) => {
    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(value)) {
      setValue(value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <View style={styles.box}>
            <Svg
              height={200}
              width={Dimensions.get("screen").width}
              viewBox="0 40 1440 320"
            >
              <Path
                fill="#00cba9"
                d="M0,224L60,234.7C120,245,240,267,360,229.3C480,192,600,96,720,96C840,96,960,192,1080,234.7C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              />
            </Svg>
          </View>

          <View style={styles.header}>
            <Image
              source={require("../../assets/images/hat.png")}
              style={styles.imageHeader}
            />
            <Text style={styles.textHeader}>TIPSr</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <View style={styles.textBoxGroup}>
              <Text style={styles.textBoxUnit}>$</Text>
              <TextInput
                style={styles.textBox}
                placeholder="Monto"
                keyboardType="decimal-pad"
                underlineColorAndroid="transparent"
                placeholderTextColor="#00cba9"
                value={amount}
                onChangeText={(value) => {
                  validateAndSet(value, setAmount);
                }}
              ></TextInput>
            </View>

            <View style={styles.textBoxGroup}>
              <Text style={styles.textBoxUnit}>%</Text>
              <TextInput
                style={styles.textBox}
                placeholder="Porcentaje"
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                placeholderTextColor="#00cba9"
                value={percent}
                onChangeText={(value) => {
                  validateAndSet(value, setPercent);
                }}
              ></TextInput>
            </View>
          </View>

          <View style={styles.spinnerContainer}>
            <Text style={styles.themeText}>Personas</Text>
            <InputSpinner
              rounded={false}
              max={10}
              min={1}
              step={1}
              color="#00cba9"
              textColor="#00cba9"
              fontSize={24}
              onChange={(num) => {
                console.log(num);
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button label="Calcular" onPress={onCalcular}></Button>
          </View>

          <View style={styles.panel}>
            <View style={styles.panelContent}>
              <Text style={styles.panelText}>Total: ${total}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  themeText: {
    color: "#00cba9",
    marginVertical: 2
  },
  container: {
    flex: 1,
  },
  panel: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  panelContent: {
    padding: 5,
    width: 300,
    height: 100,
    backgroundColor: "#00cba9",
  },
  panelText: {
    textAlign: "center",
    fontSize: 25,
    color: "#000",
  },
  header: {
    marginTop: -40,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    marginTop: -5,
    textAlign: "center",
    fontSize: 22,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    color: "#000000",
  },
  imageHeader: {
    width: 40,
    height: 40,
  },
  box: {
    backgroundColor: "#00cba9",
    height: 40,
  },
  textBoxContainer: {
    marginTop: 60,
  },
  textBoxGroup: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  textBox: {
    flex: 1,
    fontSize: 25,
    color: "#00cba9",
    borderColor: "#ccc",
    borderBottomWidth: 3,
  },
  textBoxUnit: {
    width: 25,
    fontSize: 25,
    color: "#00cba9",
  },
  spinnerContainer: {
    marginVertical: 10,
    marginHorizontal: 22
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textBoxContent: {},
});
