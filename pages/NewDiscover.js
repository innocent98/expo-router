import { View, Text, ScrollView } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../constants/styles";

const NewDiscover = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("DiscoverChild")}
        >
          <Text style={styles.loginTxt}>Discover Child</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("OpportunityDiscover")}
        >
          <Text style={styles.loginTxt}>Opportunity Discover</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("AddOpportunity")}
        >
          <Text style={styles.loginTxt}>Add Opportunity</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("AddWorkOld")}
        >
          <Text style={styles.loginTxt}>Add Work Old</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("Conversation")}
        >
          <Text style={styles.loginTxt}>Conversation</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("CommunityGuideline")}
        >
          <Text style={styles.loginTxt}>Community Guideline</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("MyPeopleScreen")}
        >
          <Text style={styles.loginTxt}>My People Screen</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("AddWork")}
        >
          <Text style={styles.loginTxt}>Add Work</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("EditWork")}
        >
          <Text style={styles.loginTxt}>Edit Work</Text>
        </RectButton>
        <RectButton
          style={[styles.loginButton, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("AllProjects")}
        >
          <Text style={styles.loginTxt}>All Projects</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

export default NewDiscover;
