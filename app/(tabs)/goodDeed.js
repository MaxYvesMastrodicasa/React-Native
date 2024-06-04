import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function DonationsScreen() {
  const [value, setValue] = useState(0);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Ma liste</Text>
        <View style={styles.inputDeed}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder="Entrez une bonne action"
          keyboardType='ascii-capable'
          onChangeText={setValue}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputDeed: {
    flexDirection: 'row',
    
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },
  error: {
    marginTop: 5,
    fontSize: 14,
    color: "red",
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10,
    width: "80vw",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 15,
    textAlign: "justify",
    margin: 15,
  },
});
