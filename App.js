import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
};

const App = () => {
  const [results, setResults] = useState({
    inputValue: "",
    resultValue: "0.0",
  });

  const buttonPressed = (currency) => {
    if (results.inputValue == "") {
      Alert.alert("Enter Some Value");
    }
    let result = parseFloat(results.inputValue) * currencyPerRupee[currency];

    setResults({ resultValue: result.toFixed(2) });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenView}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{results.resultValue}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            selectionColor="#ffffff"
            keyboardType="numeric"
            placeholder="Enter Value"
            value={results.inputValue}
            onChangeText={(inputValue) =>
              setResults({
                inputValue: inputValue,
              })
            }
          />
        </View>

        <View style={styles.converterButtonContainer}>
          <TouchableOpacity
            onPress={() => buttonPressed("DOLLAR")}
            style={styles.converterButton}
          >
            <Text style={styles.converterButtonText}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.converterButton}>
            <Text style={styles.converterButtonText}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.converterButton}>
            <Text style={styles.converterButtonText}>$</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  screenView: {
    flex: 1,
  },
  resultContainer: {
    height: 70,
    justifyContent: "center",
    marginTop: 20,
    borderColor: "#c1c1c1",
    alignItems: "center",
    backgroundColor: "#0A79DE",
    borderWidth: 2,
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  inputContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    color: "white",
    backgroundColor: "#0a79DE",
  },
  input: {
    color: "white",
    fontSize: 30,
  },
  converterButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
  },
  converterButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
