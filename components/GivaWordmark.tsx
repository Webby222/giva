import { StyleSheet, View } from 'react-native';
import { GivaText } from '@/components/GivaText';
import { colors } from '@/constants/theme';

export function GivaWordmark() {
  return (
    <View style={styles.row} accessibilityRole="image" accessibilityLabel="GIVA">
      <View style={styles.mark}><View style={styles.markCut} /></View>
      <GivaText variant="label" style={styles.wordmark} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">GIVA</GivaText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 9 },
  mark: { width: 23, height: 23, borderRadius: 7, borderWidth: 2.5, borderColor: colors.primary, alignItems: 'flex-end', justifyContent: 'flex-end', padding: 3 },
  markCut: { width: 8, height: 2.5, borderRadius: 2, backgroundColor: colors.primary },
  wordmark: { color: colors.text, fontSize: 13, letterSpacing: 2.3 },
});
