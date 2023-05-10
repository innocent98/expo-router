import { View, Text } from 'react-native'
import React from 'react'
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";

const Post = () => {
    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <RectButton style={[styles.loginButton, { marginBottom: 10 }]}  onPress={()=>navigation.navigate("CreatePost")}>
          <Text style={styles.loginTxt}>Create Post</Text>
        </RectButton>
        <RectButton style={styles.loginButton} onPress={()=>navigation.navigate("EditPost")}>
          <Text style={styles.loginTxt}>Edit Post</Text>
        </RectButton>
      </View>
    );
}

export default Post