import { View, Text } from 'react-native'
import React from 'react'
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";

const Projects = () => {
    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <RectButton style={[styles.loginButton, { marginBottom: 10 }]}  onPress={()=>navigation.navigate("ProjectsPage")}>
          <Text style={styles.loginTxt}>Project Page</Text>
        </RectButton>
        <RectButton style={styles.loginButton} onPress={()=>navigation.navigate("ProjectService")}>
          <Text style={styles.loginTxt}>Project Service</Text>
        </RectButton>
      </View>
    );
}

export default Projects