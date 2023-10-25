import AsyncStorage from "@react-native-async-storage/async-storage";


const nameData = 'fat-photos'

export const getDataImages = async () => {
  try {
    const value = await AsyncStorage.getItem(nameData);
    console.log("Value: ",{value})
    console.log("TYPEOF:_", typeof value)
    if (value !== null) {
      // value previously stored
      console.log({value})
      return JSON.parse(value); 
    }
    return []
  } catch (e) {
    // error reading value
  }
};


export const storeData = async (value) => {
  try {
    console.log("Storing data",{value})
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(nameData, jsonValue);
  } catch (e) {
    // saving error
    console.log("error: ",e)
  }
};