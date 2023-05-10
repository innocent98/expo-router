import { View, Text, ScrollView } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";

const Projects = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectsDiscover")}
        >
          <Text style={styles.loginTxt}>Projects Discover</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectRoles")}
        >
          <Text style={styles.loginTxt}>Project Roles</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectsTasks")}
        >
          <Text style={styles.loginTxt}>Projects Tasks</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectRoles")}
        >
          <Text style={styles.loginTxt}>Project Roles</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectsAgreement")}
        >
          <Text style={styles.loginTxt}>Projects Agreement</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectsApplicants")}
        >
          <Text style={styles.loginTxt}>Projects Applicants</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectsApplicant")}
        >
          <Text style={styles.loginTxt}>Projects Applicant</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectJourney")}
        >
          <Text style={styles.loginTxt}>Project Journey</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("CompletedProject")}
        >
          <Text style={styles.loginTxt}>Completed Project</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ProjectReview")}
        >
          <Text style={styles.loginTxt}>Project Review</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

export default Projects;
