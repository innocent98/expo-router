import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{headerShown: false}} />
      <Tabs.Screen name="profile" options={{headerShown: false}} />
      <Tabs.Screen name="projects" options={{headerShown: false}} />
      <Tabs.Screen name="settings" options={{headerShown: false}} />
      <Tabs.Screen name="support" options={{headerShown: false}} />
    </Tabs>
  );
};
