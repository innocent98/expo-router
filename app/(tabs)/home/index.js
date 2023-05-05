import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../constants/styles";
import { Link } from "expo-router";

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]}>
        <Link href="/home/homePage" style={styles.loginTxt}>Home Page</Link>
      </RectButton>
      <RectButton style={styles.loginButton}>
        <Link href="/home/homeService" style={styles.loginTxt}>Home Service</Link>
      </RectButton>
    </View>
  );
};

export default Home;
