import {
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

import { useSelector } from "react-redux";

const Main = () => {
  const [image, setImage] = useState(null);

 
  const images = useSelector((state) => {
    return state.images.image_list;
  });
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {images.map((imageUrl, index) => (
          <View style={styles.item} key={index}>
            <Text style={{color:'white'}}>{index} </Text>
            <Image source={{ uri: imageUrl.image }} style={styles.image} />
          </View>
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
    backgroundColor: "red",
    height: "100%",
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
