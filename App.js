import Main from "./src/Pages/main/Main";
import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Other from "./src/Pages/Other/Other";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";
import rootReducer from "./src/Redux/reducers";
import { app } from "./firebaseConfig";
import { getDataImages } from "./src/Utils";
import { useEffect } from "react";
import { loadData } from "./src/Redux/imagesSlice";

const Tab = createBottomTabNavigator();
const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
  
  


  return (
    <Provider store={store}>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Options">
            <Tab.Screen name="Options" component={Other} />
            <Tab.Screen name="Home" component={Main} />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Button title="Pick an image from camera roll" onPress={pickImage} />
    //   {image && (
    //     <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
    //   )}
    // </View>
  );
}
