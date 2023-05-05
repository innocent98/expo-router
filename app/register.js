import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
// import { useDispatch } from "react-redux";
// import { changeBoard } from "../redux/onBoardRedux";

const Register = () => {
  const navigation = useNavigation();
  const router = useRouter();
  // const dispatch = useDispatch();

  // const handleLogin = () => {
  //   dispatch(changeBoard(true));
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.feedText}>Go to Feed</Text>
      <RectButton style={styles.loginButton}>
        <Text
          onPress={() => {
            router.push("/home");
          }}
          style={styles.loginTxt}
        >
          Register
        </Text>
      </RectButton>
      <Text style={styles.registerTxt}>
        Already a member?{" "}
        <Link href="/" style={styles.registerTxtSpan}>
          login
        </Link>
      </Text>
    </View>
  );
};

export default Register;
