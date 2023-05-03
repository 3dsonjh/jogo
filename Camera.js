import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  const [permission, requestPermission] = Camera.useCameraPermissions();

  console.log(permission);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! TESTE</Text>

      <Button title="Abrir Camera" onPress={requestPermission}/>
      <Camera style={styles.camera} type={CameraType.back} />
      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera : {
    width: 300,
    height: 300
  }
});