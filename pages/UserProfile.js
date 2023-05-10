import { View, Text, ScrollView } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("AccountSettings")}
        >
          <Text style={styles.loginTxt}>Account Settings</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("PrivacySettings")}
        >
          <Text style={styles.loginTxt}>Privacy Settings</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProfileEdit")}
        >
          <Text style={styles.loginTxt}>Profile Edit</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("AboutScreen")}
        >
          <Text style={styles.loginTxt}>About Screen</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("NotificationSettings")}
        >
          <Text style={styles.loginTxt}>Notification Settings</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("PrivacyPolicyScreen")}
        >
          <Text style={styles.loginTxt}>Privacy Policy Screen</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("TermsScreen")}
        >
          <Text style={styles.loginTxt}>Terms Screen</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("NotificationScreen")}
        >
          <Text style={styles.loginTxt}>Notification Screen</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

export default UserProfile;
