import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../constants/styles";
import { Link } from "expo-router";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RectButton
        style={[styles.loginButton, { marginBottom: 10 }]}
      >
        <Link href="/profile/profilePage" style={styles.loginTxt}>Profile Page</Link>
      </RectButton>
      <RectButton
        style={styles.loginButton}
      >
        <Link href="/profile/profileService" style={styles.loginTxt}>Profile Service</Link>
      </RectButton>
    </View>
  );
};

export default Profile;
