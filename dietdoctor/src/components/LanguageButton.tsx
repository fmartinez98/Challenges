import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { colors, spacing } from '@/theme';
import { normalize } from '@/utils';
import { strings } from '@/localization';

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    paddingVertical: normalize(12),
    borderRadius: 50,
    marginBottom: spacing.s,
    marginTop: spacing.xl,
    marginHorizontal: normalize(120),
    backgroundColor: colors.transparentGray,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: normalize(16),
    color: colors.white,
    fontWeight: '500',
  },
  icon: {
    marginTop: normalize(2),
    height: normalize(18),
    tintColor: colors.white,
    transform: [{ rotate: '90deg' }],
  },
});

export const LanguageButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>{strings.languages.english}</Text>
      <Image source={require('@/assets/chevron.png')} resizeMode="contain" style={styles.icon} />
    </TouchableOpacity>
  );
};
