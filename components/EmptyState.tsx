import { StyleSheet, View } from 'react-native';
import { GivaText } from '@/components/GivaText';
import { colors, radii, spacing } from '@/constants/theme';

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.rule} />
      <GivaText variant="subheading" style={styles.title}>{title}</GivaText>
      <GivaText variant="secondary" style={styles.description}>{description}</GivaText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    paddingTop: spacing.lg,
  },
  rule: {
    width: 28,
    height: 3,
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
    marginBottom: spacing.md,
  },
  title: {
    marginBottom: spacing.xs,
  },
  description: {
    maxWidth: 300,
  },
});
