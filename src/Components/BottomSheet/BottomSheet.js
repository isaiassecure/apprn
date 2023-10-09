import { View, StyleSheet, Dimensions, Button } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const BottomSheet = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={()=>{}}
        title="Take new Picture"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white'
  },
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT / 2,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default BottomSheet;
