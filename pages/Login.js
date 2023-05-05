import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeBoard } from "../redux/onBoardRedux";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeBoard(true));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.feedText}>Go to Feed</Text>
      <RectButton style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginTxt}>Login</Text>
      </RectButton>
      <Text style={styles.registerTxt}>
        Not a member?{" "}
        <Text
          style={styles.registerTxtSpan}
          onPress={() => navigation.navigate("Register")}
        >
          register
        </Text>
      </Text>
    </View>
  );
};

export default Login;
