import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Modal,
  Pressable,
  Alert,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addImage, deleteImage } from "../../Redux/imagesSlice";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const ImageViewer = ({ isVisible, setIsVisible, currentImage }) => {
  const dispatch = useDispatch();

  const handleSaveAsFood = () => dispatch(addImage({ image: currentImage }));
  const unSelectImage = () => dispatch(deleteImage(currentImage));

  const image_list = useSelector((state) => {
    return state.images.image_list;
  });
  console.log({ image_list });

  const isSelected = image_list.some((image) => image.image === currentImage);
  console.log({ isSelected });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setIsVisible(!isVisible);
      }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centeredView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsVisible(!isVisible)}
          >
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
          <View style={styles.modalView}>
            <Image source={{ uri: currentImage }} style={styles.image} />
          </View>
          <View>
            {isSelected ? (
              <Button onPress={unSelectImage} title="Unselect" />
            ) : (
              <Button onPress={handleSaveAsFood} title="Save as food" />
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalView: {
    height: "60%",
    width: SCREEN_WIDTH,
    borderWidth: 2,
    overflow: "scroll",
  },
  button: {
    position: "absolute",
    top: 20,
    right: 20,
    borderRadius: 50,
    padding: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  image: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
});
export default ImageViewer;
