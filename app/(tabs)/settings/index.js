import { View, Text } from 'react-native'
import React from 'react'
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../constants/styles";
import { Link } from "expo-router";

const Settings = () => {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
        >
          <Link href="/settings/settingsPage" style={styles.loginTxt}>Settings Page</Link>
        </RectButton>
        <RectButton
          style={styles.loginButton}
        >
          <Link href="/settings/settingsService" style={styles.loginTxt}>Settings Service</Link>
        </RectButton>
      </View>
    );
}

export default Settings