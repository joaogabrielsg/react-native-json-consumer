import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  contentWidth: width * 0.8,
  borderRadius: 12,
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  baseRadius: 3,
  iconSize: height < 600 ? 25 : 30,
  textInputHeight: height * 0.09 > 70 ? 70 : height * 0.09,
  alertHeight: 220
};

export default metrics;
