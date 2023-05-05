import { View, Text } from 'react-native'
import React from 'react'
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";

const Settings = () => {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("SettingsPage")}
        >
          <Text style={styles.loginTxt}>Settings Page</Text>
        </RectButton>
        <RectButton
          style={styles.loginButton}
          onPress={() => navigation.navigate("SettingsService")}
        >
          <Text style={styles.loginTxt}>Settings Service</Text>
        </RectButton>
      </View>
    );
}

export default Settings