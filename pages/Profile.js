import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RectButton
        style={[styles.loginButton, { marginBottom: 10 }]}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <Text style={styles.loginTxt}>Profile Page</Text>
      </RectButton>
      <RectButton
        style={styles.loginButton}
        onPress={() => navigation.navigate("ProfileService")}
      >
        <Text style={styles.loginTxt}>Profile Service</Text>
      </RectButton>
    </View>
  );
};

export default Profile;
