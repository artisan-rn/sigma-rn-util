import {Dimensions, PixelRatio, Platform} from 'react-native';
type DeviceType = {
  width:number;
  height:number;
  dpr:number;
}
const dpr = parseInt(String(PixelRatio.get()), 10) || 1;
let {width, height} = Dimensions.get('window');
if (Platform.OS === 'android') {
  // TODO: Android平台部分机器width和height会取反
  if (width > height) {
    width = Dimensions.get('window').height;
    height = Dimensions.get('window').width;
  }
}
const ratioDeps750 = width / 750;

const Device:DeviceType = {
  width,
  height,
  dpr,
};
export default Device;

export function getRpx(value: number) {
  return Math.floor(value * ratioDeps750);
}

/**
 * 基于dpr获取px
 */
export function getDpx(value: number) {
  return value / dpr;
}

/**
 * 基于750屏幕宽度(iphone6)，计算字体大小
 */
export function getFontSize(value: number) {
  return value / 2;
}
