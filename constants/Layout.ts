import { Dimensions, ViewStyle } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CONTAINER: ViewStyle = {
  flex: 1
}

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
