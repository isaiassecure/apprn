import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import AddImageModalImage from "../AddImageModalImage/AddImageModalImage";

const ImageItem = ({ imageUrl, onPressImage,isSelectSeveralActive }) => {
  const [isBackgroundVisible, setisBackgroundVisible] = useState(false);

  const onLongPress = () => {
    setisBackgroundVisible(true);
    
};

const onShortPress = ()=>{
    setisBackgroundVisible(false);
    onPressImage(imageUrl.uri)
  }
  return (
    <TouchableOpacity
      style={styles.item}
      onLongPress={onLongPress}
      onPress={onShortPress}
    >
      <AddImageModalImage isCheckboxVisible={isSelectSeveralActive} isBackgroundVisible={isBackgroundVisible}>
        <Image source={{ uri: imageUrl.uri }} style={styles.image} />
      </AddImageModalImage>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "33.3%", // Esto asegura un máximo de 3 imágenes por fila
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
});

export default ImageItem;
