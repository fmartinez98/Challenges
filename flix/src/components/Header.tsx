import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { spacing } from '../theme/spacing';

interface Header {
  title: string;
}

const styles = StyleSheet.create({
  title: {
    fontSize: spacing.xl,
    paddingVertical: spacing.l,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const Header: React.FC<Header> = ({ title }) => <Text style={styles.title}>{title}</Text>;

export default Header;
