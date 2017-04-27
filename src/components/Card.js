import React from 'react';
import { View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.containerStyle}>
      Hello World
    </View>
  );
};

// shadowOffset = height/width of shadow
// shadowRadius places a shadow on the border radius
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};

export default Card;