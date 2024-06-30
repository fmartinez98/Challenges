import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.s,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.grey,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    paddingVertical: spacing.xs,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
  },
});
