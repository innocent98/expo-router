import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Support from "./pages/Support";
import HomePage from "./components/HomePage";
import HomeService from "./components/HomeService";
import ProfilePage from "./components/ProfilePage";
import ProfileService from "./components/ProfileService";
import ProjectsPage from "./components/ProjectsPage";
import ProjectService from "./components/ProjectService";
import SettingsPage from "./components/SettingsPage";
import SettingsService from "./components/SettingsService";
import SupportPage from "./components/SupportPage";
import SupportService from "./components/SupportService";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="HomeService" component={HomeService} />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="ProfileService" component={ProfileService} />
    </Stack.Navigator>
  );
};

const ProjectNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Project"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Project" component={Projects} />
      <Stack.Screen name="ProjectsPage" component={ProjectsPage} />
      <Stack.Screen name="ProjectService" component={ProjectService} />
    </Stack.Navigator>
  );
};

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Setting" component={Settings} />
      <Stack.Screen name="SettingsPage" component={SettingsPage} />
      <Stack.Screen name="SettingsService" component={SettingsService} />
    </Stack.Navigator>
  );
};

const SupportNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Support"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="SupportPage" component={SupportPage} />
      <Stack.Screen name="SupportService" component={SupportService} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Homes" component={HomeNavigator} />
      <Tab.Screen name="Profiles" component={ProfileNavigator} />
      <Tab.Screen name="Projects" component={ProjectNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
      <Tab.Screen name="Supports" component={SupportNavigator} />
    </Tab.Navigator>
  );
};

const MainApp = () => {
  const isBoarded = useSelector((state) => state.onBoard.isBoarded);

  if (isBoarded) return <TabNavigator />;
  return <StackNavigator />;
};

export default MainApp;
