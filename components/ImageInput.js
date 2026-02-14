import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImageInput({imageUri}) {
  return (
    <View style={styles.container}>
        {!imageUri && (
            <MaterialCommunityIcons color ={Colors.medium} name="camera" size={40}/>
        )}
        {imageUri && <Image source={{uri:imageUri}} style={styles.Image}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width:100
  },
  Image: {
    width: '100%',
    height: '100%',
  }
});

export default ImageInput;