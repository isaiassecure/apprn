import {
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { useSelector } from "react-redux";
import ImageViewer from "../../Components/ImageViewer/ImageViewer";

const Main = () => {
  const [imageList, setImageList] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    console.log("recover image");
    const imagenes = await MediaLibrary.getAssetsAsync({ mediaType: "photo" });
    console.log("Imagenes: ",imagenes.assets );
    setImageList(imagenes.assets)
  };

  useEffect(() => {
    pickImage();
  }, []);
 
  // const images = useSelector((state) => {
  //   return state.images.image_list;
  // });
  console.log("******************************+")
  console.log("imageList: ",imageList)
  console.log("******************************+")
  const onPressImage = ()=>{
    setIsVisible(true)
  }
  const [isVisible, setIsVisible] = useState(false)
  return (
    <SafeAreaView>
      <ImageViewer isVisible={isVisible} setIsVisible={setIsVisible} />
      <ScrollView contentContainerStyle={styles.container}>
        {imageList && imageList.map((imageUrl, index) => (
            <TouchableOpacity style={styles.item} onPress={onPressImage}>
              <Image source={{ uri: imageUrl.uri }} style={styles.image} />
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
  button:{
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
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Main;
