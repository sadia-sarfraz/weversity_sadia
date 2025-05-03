import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ImageComponent() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
  },
});
