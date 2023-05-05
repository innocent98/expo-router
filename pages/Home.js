import { View, Text } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]}  onPress={()=>navigation.navigate("HomePage")}>
        <Text style={styles.loginTxt}>Home Page</Text>
      </RectButton>
      <RectButton style={styles.loginButton} onPress={()=>navigation.navigate("HomeService")}>
        <Text style={styles.loginTxt}>Home Service</Text>
      </RectButton>
    </View>
  );
};

export default Home;
