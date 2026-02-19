import { Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>About</Text>
      <Text style={{ marginTop: 8 }}>
        This app demonstrates tab navigation using Expo Router.
      </Text>
    </View>
  );
}
