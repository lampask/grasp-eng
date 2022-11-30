import { StyleSheet, View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function LoadingScreen() {
  return (
    <View style={styles.body}>
      <ActivityIndicator size='large' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f6",
    paddingHorizontal: 15,
  },
});
