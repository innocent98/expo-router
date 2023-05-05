import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerTitle: "Projects"}} />
    </Stack>
  );
};

export default StackLayout;
