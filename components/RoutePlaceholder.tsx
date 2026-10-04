import { StyleSheet, View } from 'react-native';
import { GivaText } from '@/components/GivaText';
import { Screen } from '@/components/Screen';
import { colors, spacing } from '@/constants/theme';

type RoutePlaceholderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function RoutePlaceholder({ eyebrow = 'GIVA', title, description }: RoutePlaceholderProps) {
  return (
    <Screen>
      <View style={styles.content}>
        <GivaText variant="label" style={styles.eyebrow}>{eyebrow}</GivaText>
        <GivaText variant="largeHeading" style={styles.title}>{title}</GivaText>
        <GivaText variant="body" style={styles.description}>{description}</GivaText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: spacing['2xl'],
  },
  eyebrow: {
    color: colors.primary,
    marginBottom: spacing.md,
  },
  title: {
    marginBottom: spacing.sm,
  },
  description: {
    maxWidth: 320,
    color: colors.textSecondary,
  },
});
