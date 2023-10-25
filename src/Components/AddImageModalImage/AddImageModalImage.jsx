import {
  View,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
  Alert,
  Text,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { addImage, deleteImage } from "../../Redux/imagesSlice";
import { useState } from "react";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const AddImageModalImage = ({
  isCheckboxVisible = true,
  currentImage,
  isBackgroundVisible=false,
  children,
}) => {
  const dispatch = useDispatch();

  const handleSaveAsFood = () => dispatch(addImage({ image: currentImage }));
  const unSelectImage = () => dispatch(deleteImage(currentImage));

  const image_list = useSelector((state) => {
    return state.images.image_list;
  });
  const [isChecked, setChecked] = useState(false);
  const isSelected = image_list.some((image) => image.image === currentImage);
  return (
    <View style={styles.container}>
      {isBackgroundVisible&&<View style={styles.background}>
        <Button title="Add" />
      </View>}
      {children}
      {isCheckboxVisible && (
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    backgroundColor: "black",
    zIndex: 2,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: 150, // Tamaño de las imágenes
    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 1,
    position: "relative",
  },
  checkbox: {
    margin: 8,
    backgroundColor: "purple",
  },
  checkboxContainer: {
    position: "absolute",
    zIndex: 3,
    top: 0,
    right: 0,
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
export default AddImageModalImage;
