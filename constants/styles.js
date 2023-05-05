import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background
  },
  feedText: { fontFamily: "Regular", fontSize: SIZES.font, marginBottom: 10 },
  loginButton: {
    backgroundColor: COLORS.link,
    padding: 10,
    width: "80%",
    borderRadius: 5,
  },
  loginTxt: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: "Medium",
    fontSize: SIZES.large,
  },
  registerTxt: { color: COLORS.gray, fontSize: SIZES.font, marginTop: 5 },
  registerTxtSpan: { color: COLORS.primary },
});
