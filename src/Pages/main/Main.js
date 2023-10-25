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
import AddImageModalImage from "../../Components/AddImageModalImage/AddImageModalImage";
import Checkbox from "expo-checkbox";
import ImageItem from "../../Components/ImageItem/ImageItem";

const Main = () => {
  const [imageList, setImageList] = useState([]);
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

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
  const onPressImage = (uri)=>{
    setIsVisible(true)
    setCurrentImage(uri)
  }
  const [isChecked, setChecked] = useState(false)
 

  return (
    <SafeAreaView>
      <View style={styles.controls}>
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
      </View>
      <ImageViewer currentImage={currentImage} isVisible={isVisible} setIsVisible={setIsVisible} />
      <ScrollView contentContainerStyle={styles.container}>
        {imageList && imageList.map((imageUrl) => (
            <ImageItem isSelectSeveralActive={isChecked} imageUrl={imageUrl} onPressImage={onPressImage}/>
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
  controls:{
    alignItems:'flex-end'
  },
  checkbox:{
    marginRight:12,        
    marginVertical:8
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
