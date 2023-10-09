import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../Redux/imagesSlice";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

const Other = () => {
  const dispatch = useDispatch();

  const image_list = useSelector((state) => {
    return state.images.image_list;
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
   

  };


  const getImageFromGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(addImage({ image: result.assets[0].uri }));
    }

  };

  const getImageFromCamera = async () => {
    
    const image = await ImagePicker.launchCameraAsync()
    console.log("------------", {image},image.assets[0].uri,image.assets)
    MediaLibrary.createAssetAsync(image.assets[0].uri).then((something) => {
      console.log({something})
       dispatch(addImage({ image: something.uri }));

    });


  };

  return (
    <View style={styles.container}>
      <Text>{image_list.length}</Text>
      <Button
        onPress={getImageFromCamera}
        title="Take new Picture"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={getImageFromGalery}
        title="Load from galery"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Other;
