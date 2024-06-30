import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { strings } from '@/localization';
import { colors, spacing } from '@/theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.l,
  },
  line: {
    width: '40%',
    borderBottomColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    marginHorizontal: spacing.m,
    fontSize: spacing.s,
    fontWeight: '300',
  },
});

export const Divider: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{strings.common.or}</Text>
      <View style={styles.line} />
    </View>
  );
};
