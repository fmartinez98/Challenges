import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');

/**
 * Based on iPhone 12 resolution
 * @param {number} value
 */
export function normalize(value: number) {
  const ratio = 390;
  const scale = width / ratio;

  return PixelRatio.roundToNearestPixel(value * scale);
}
