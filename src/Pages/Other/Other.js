import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage, loadData } from "../../Redux/imagesSlice";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { getDataImages } from "../../Utils";

const Other = () => {
  const dispatch = useDispatch();

  const image_list = useSelector((state) => {
    return state.images.image_list;
  });



  const config = async ()=>{
    const data = await getDataImages()
    console.log("DATA: ",data)
    dispatch(loadData(data));
  }

  useEffect(() => {
    
    config()

  
  }, [])

  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    console.log("recover image");
    const media = await MediaLibrary.getAssetsAsync({ mediaType: "photo" });
    console.log({ media });
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
    const image = await ImagePicker.launchCameraAsync();
    console.log("------------", { image }, image.assets[0].uri, image.assets);
    MediaLibrary.createAssetAsync(image.assets[0].uri).then((something) => {
      console.log({ something });
      dispatch(addImage({ image: something.uri }));
    });
  };


  console.log("¨*****",image_list)
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        { image_list.map((imageUrl) => (
            <TouchableOpacity style={styles.item} >
              <Image source={{ uri: imageUrl.image }} style={styles.image} />
            </TouchableOpacity>
        ))}
      </ScrollView>
      <View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "33.3%", // Esto asegura un máximo de 3 imágenes por fila
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 2,
    alignItems:'center'
  },
  image: {
    width: "100%",
    height: 150, // Tamaño de las imágenes
  },
});

export default Other;
