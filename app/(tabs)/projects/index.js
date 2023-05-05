import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../constants/styles";
import { Link } from "expo-router";

const Projects = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RectButton
        style={[styles.loginButton, { marginBottom: 10 }]}
      >
        <Link href="/projects/projectsPage" style={styles.loginTxt}>Project Page</Link>
      </RectButton>
      <RectButton
        style={styles.loginButton}
      >
        <Link href="/projects/projectService" style={styles.loginTxt}>Project Service</Link>
      </RectButton>
    </View>
  );
};

export default Projects;
