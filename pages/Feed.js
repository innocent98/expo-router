import { View, Text } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Feed = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]}  onPress={()=>navigation.navigate("HomePage")}>
        <Text style={styles.loginTxt}>Add Task</Text>
      </RectButton>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]}  onPress={()=>navigation.navigate("EditTask")}>
        <Text style={styles.loginTxt}>Edit Task</Text>
      </RectButton>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]} onPress={()=>navigation.navigate("HomeService")}>
        <Text style={styles.loginTxt}>Add Role</Text>
      </RectButton>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]} onPress={()=>navigation.navigate("EditRole")}>
        <Text style={styles.loginTxt}>Edit Role</Text>
      </RectButton>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]} onPress={()=>navigation.navigate("UserEdit")}>
        <Text style={styles.loginTxt}>User Edit</Text>
      </RectButton>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]} onPress={()=>navigation.navigate("AccountSetting")}>
        <Text style={styles.loginTxt}>Account Setting</Text>
      </RectButton>
      <RectButton style={[styles.loginButton, { marginBottom: 10 }]} onPress={()=>navigation.navigate("Portfolio")}>
        <Text style={styles.loginTxt}>Portfolio</Text>
      </RectButton>
    </View>
  );
};

export default Feed;
