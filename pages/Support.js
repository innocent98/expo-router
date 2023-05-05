import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";

const Support = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RectButton
        style={[styles.loginButton, { marginBottom: 10 }]}
        onPress={() => navigation.navigate("SupportPage")}
      >
        <Text style={styles.loginTxt}>Support Page</Text>
      </RectButton>
      <RectButton
        style={styles.loginButton}
        onPress={() => navigation.navigate("SupportService")}
      >
        <Text style={styles.loginTxt}>Support Service</Text>
      </RectButton>
    </View>
  );
};

export default Support;
