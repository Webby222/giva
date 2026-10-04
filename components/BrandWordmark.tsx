import { StyleSheet, View } from 'react-native';
import { GivaText } from '@/components/GivaText';
import { colors, typography } from '@/constants/theme';

type BrandWordmarkProps = {
  compact?: boolean;
};

export function BrandWordmark({ compact = false }: BrandWordmarkProps) {
  return (
    <View style={styles.row} accessibilityRole="image" accessibilityLabel="GIVA">
      <GivaText
        variant="label"
        style={[styles.wordmark, compact && styles.wordmarkCompact]}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        GIVA
      </GivaText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wordmark: {
    color: colors.primary,
    fontSize: typography.subheading,
    letterSpacing: 3,
  },
  wordmarkCompact: {
    fontSize: typography.caption,
    letterSpacing: 2.2,
  },
});
