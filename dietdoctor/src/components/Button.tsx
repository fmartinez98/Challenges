import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, spacing } from '@/theme';
import { normalize } from '@/utils';

interface Button {
  title: string;
  onPress: any;
  style?: any;
  icon?: any;
  isSocialButton?: boolean;
  testID?: string;
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.s,
    borderRadius: 30,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    verticalAlign: 'middle',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.transparentGray,
    padding: normalize(10),
    borderRadius: 30,
  },
  textSocialButton: {
    textAlign: 'center',
    fontSize: normalize(16),
    color: colors.black,
    fontWeight: '500',
  },
  text: {
    textAlign: 'center',
    fontSize: normalize(16),
    color: colors.white,
    fontWeight: '500',
  },
  icon: {
    marginTop: normalize(5),
  },
});

export const Button: React.FC<Button> = ({
  title,
  onPress,
  style,
  icon,
  isSocialButton = false,
  testID,
}) => {
  return (
    <TouchableOpacity
      style={[isSocialButton ? styles.socialContainer : styles.container, style]}
      onPress={onPress}
      testID={testID}
    >
      {isSocialButton && <Text style={styles.icon}>{icon}</Text>}
      <Text style={isSocialButton ? styles.textSocialButton : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
