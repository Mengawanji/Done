import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './components/ImageInput';

function app(props) {
  return (
    <Screen>
        <button title="Select Image" onPress={}/>
        <Image source={{uri: imageUri}} style={styles.Image}/>
        <ImageInput imageUri={imageUri}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default app;