import React from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'; // import ImagePicker for selecting images/videos

const Footer = ({ onPressUpload, onPressCamera, onPressGallery, onPressSettings }) => {
  
  // Function to handle image and video upload
  const handleUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Media library access is required.');
      return;
    }

    // Open the media library to pick images and videos
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Allow images and videos
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets);
      // You can process the selected media here (images or videos)
      // For example, update your gallery or state based on the result
    } else {
      Alert.alert('No media', 'You did not select any media.');
    }
  };

  return (
    <View style={styles.footer}>
      {/* Update this TouchableOpacity to trigger the image/video upload functionality */}
      <TouchableOpacity onPress={handleUpload}>
        <Icon name="cloud-upload-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCamera}>
        <Icon name="camera-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressGallery}>
        <Icon name="images-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSettings}>
        <Icon name="settings-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 20,
  },
});

export default Footer;
