import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./pages/Feed";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects";
import Post from "./pages/PostScreen";
import NewDiscover from "./pages/NewDiscover";
import AddTasks from "./components/AddTasks";
import AddRole from "./components/AddRole";
import AccountSettings from "./components/AccountSettings";
import ProfileEdit from "./components/ProfileEdit";
import ProjectsDiscover from "./components/ProjectsDiscover";
import ProjectRoles from "./components/ProjectRoles";
import DiscoverChild from "./components/DiscoverChild";
import UserProfile from "./pages/UserProfile";
import ProjectsTasks from "./components/ProjectsTasks";
import ProjectsAgreement from "./components/ProjectsAgreement";
import ProjectsApplicants from "./components/ProjectsApplicants";
import ProjectsApplicant from "./components/ProjectsApplicant";
import UserEdit from "./components/UserEdit";
import CreatePost from "./components/CreatePost";
import AccountSetting from "./components/AccountSetting";
import EditRole from "./components/EditRole";
import EditTask from "./components/EditTask";
import EditPost from "./components/EditPost";
import ProjectJourney from "./components/ProjectJourney";
import OpportunityDiscover from "./components/OpportunityDiscover";
import AddOpportunity from "./components/AddOpportunity";
import AddOldWork from "./components/AddOldWork";
import CompletedProject from "./components/CompletedProject";
import Portfolio from "./components/Portfolio";
import PrivacySettings from "./components/PrivacySettings";
import AboutScreen from "./components/AboutScreen";
import NotificationSettings from "./components/NotificationSettings";
import PrivacyPolicyScreen from "./components/PrivacyPolicyScreen";
import ProjectReview from "./components/ProjectReview";
import TermsScreen from "./components/TermsScreen";
import NotificationScreen from "./components/NotificationScreen";
import Conversation from "./components/Conversation";
import CommunityGuideline from "./components/CommunityGuideline";
import MyPeopleScreen from "./components/MyPeopleScreen";
import AddWork from "./components/AddWork";
import EditWork from "./components/EditWork";
import AllProjects from "./components/AllProjects";

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

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="AddTasks" component={AddTasks} />
      <Stack.Screen name="AddRole" component={AddRole} />
      <Stack.Screen name="UserEdit" component={UserEdit} />
      <Stack.Screen name="AccountSetting" component={AccountSetting} />
      <Stack.Screen name="EditRole" component={EditRole} />
      <Stack.Screen name="EditTask" component={EditTask} />
      <Stack.Screen name="Portfolio" component={Portfolio} />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={UserProfile} />
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
      <Stack.Screen name="PrivacySettings" component={PrivacySettings} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="NotificationSettings" component={NotificationSettings} />
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsScreen" component={TermsScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

const PostNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Post"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="EditPost" component={EditPost} />
    </Stack.Navigator>
  );
};

const ProjectsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Project"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Project" component={Projects} />
      <Stack.Screen name="ProjectsDiscover" component={ProjectsDiscover} />
      <Stack.Screen name="ProjectRoles" component={ProjectRoles} />
      <Stack.Screen name="ProjectsTasks" component={ProjectsTasks} />
      <Stack.Screen name="ProjectsAgreement" component={ProjectsAgreement} />
      <Stack.Screen name="ProjectsApplicants" component={ProjectsApplicants} />
      <Stack.Screen name="ProjectsApplicant" component={ProjectsApplicant} />
      <Stack.Screen name="ProjectJourney" component={ProjectJourney} />
      <Stack.Screen name="CompletedProject" component={CompletedProject} />
      <Stack.Screen name="ProjectReview" component={ProjectReview} />
    </Stack.Navigator>
  );
};

const NewDiscoverNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="NewDiscover"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="NewDiscover" component={NewDiscover} />
      <Stack.Screen name="DiscoverChild" component={DiscoverChild} />
      <Stack.Screen name="OpportunityDiscover" component={OpportunityDiscover} />
      <Stack.Screen name="AddOpportunity" component={AddOpportunity} />
      <Stack.Screen name="AddWorkOld" component={AddOldWork} />
      <Stack.Screen name="Conversation" component={Conversation} />
      <Stack.Screen name="CommunityGuideline" component={CommunityGuideline} />
      <Stack.Screen name="MyPeopleScreen" component={MyPeopleScreen} />
      <Stack.Screen name="AddWork" component={AddWork} />
      <Stack.Screen name="EditWork" component={EditWork} />
      <Stack.Screen name="AllProjects" component={AllProjects} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedNavigator} />
      <Tab.Screen name="Profiles" component={ProfileNavigator} />
      <Tab.Screen name="Posts" component={PostNavigator} />
      <Tab.Screen name="Projects" component={ProjectsNavigator} />
      <Tab.Screen name="NewDiscovers" component={NewDiscoverNavigator} />
    </Tab.Navigator>
  );
};

const MainApp = () => {
  const isBoarded = useSelector((state) => state.onBoard.isBoarded);

  if (isBoarded) return <TabNavigator />;
  return <StackNavigator />;
};

export default MainApp;
