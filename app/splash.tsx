import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/Screen';
import { colors, typography } from '@/constants/theme';

export default function SplashScreen() {
  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.wordmark}>GIVA</Text>
        <Text style={styles.caption}>MONEY, IN PERSPECTIVE.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordmark: {
    color: colors.primary,
    fontSize: typography.display,
    fontWeight: '800',
    letterSpacing: 5,
  },
  caption: {
    color: colors.textSecondary,
    fontSize: typography.eyebrow,
    fontWeight: '600',
    letterSpacing: 2.2,
    marginTop: 12,
  },
});
