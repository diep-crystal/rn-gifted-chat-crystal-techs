/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, View, ViewPropTypes, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Lightbox from 'react-native-lightbox';

export default function MessageImage({
  containerStyle,
  lightboxProps,
  imageProps,
  imageStyle,
  currentMessage,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Lightbox
        activeProps={{
          style: styles.imageActive,
          resizeMode: FastImage.resizeMode.contain
        }}
        {...lightboxProps}
      >
        <FastImage
          {...imageProps}
          style={[styles.image, imageStyle]}
          source={{ uri: currentMessage.image }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </Lightbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 2.5,
    borderRadius: 4,
    // margin: 3,
//     resizeMode: 'cover',
  },
  imageActive: {
    flex: 1,
//     resizeMode: 'contain',
  },
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

MessageImage.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: PropTypes.object,
  lightboxProps: PropTypes.object,
};
