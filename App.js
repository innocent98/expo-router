import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { v4 as uuid } from "uuid";
import Popover from "react-native-popover-view";
import * as Progress from "react-native-progress";
import RBSheet from "react-native-raw-bottom-sheet";
import SkeletonContent from 'react-native-skeleton-content';
// import Carousel from 'react-native-snap-carousel';
var converter = require('number-to-words');

console.log(uuid());
console.log(converter.toOrdinal(21))

export default function App() {
  const refRBSheet = useRef();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      {/* flash message */}
      <Button
        onPress={() => {
          /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
          showMessage({
            message: "Simple message with id",
            description: "This is our second message",
            type: "success",
          });
        }}
        title="Request Details"
        color="#841584"
      />

      {/* popover */}
      <Popover
        from={
          <TouchableOpacity>
            <Text>Press here to open popover!</Text>
          </TouchableOpacity>
        }
      >
        <Text>This is the contents of the popover</Text>
      </Popover>

      {/* progress */}
      <Progress.Bar progress={0.3} width={200} />

      {/* bottom sheet */}

      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      ></RBSheet>

      {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
      <FlashMessage position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
