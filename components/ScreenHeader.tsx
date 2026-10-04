import { StyleSheet, View } from 'react-native';
import { BrandWordmark } from '@/components/BrandWordmark';
import { GivaText } from '@/components/GivaText';
import { colors, spacing } from '@/constants/theme';

type ScreenHeaderProps = {
  eyebrow?: string;
  title?: string;
};

export function ScreenHeader({ eyebrow, title }: ScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <BrandWordmark compact />
      {eyebrow ? <GivaText variant="label" style={styles.eyebrow}>{eyebrow}</GivaText> : null}
      {title ? <GivaText variant="largeHeading" style={styles.title}>{title}</GivaText> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  eyebrow: {
    color: colors.primary,
    marginTop: spacing.lg,
  },
  title: {
    maxWidth: 340,
  },
});
