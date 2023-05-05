import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../constants/styles";
import { Link } from "expo-router";

const Support = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]}>
        <Link href="/support/supportPage" style={styles.loginTxt}>
          Support Page
        </Link>
      </RectButton>
      <RectButton style={styles.loginButton}>
        <Link href="/support/supportService" style={styles.loginTxt}>
          Support Service
        </Link>
      </RectButton>
    </View>
  );
};

export default Support;
