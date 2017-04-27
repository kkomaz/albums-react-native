import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => (
  <View>
    <Text>{props.album.title}</Text>
  </View>
);

AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumDetail;
