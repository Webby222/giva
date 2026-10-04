import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen } from '@/components/Screen';
import { colors, typography } from '@/constants/theme';

export default function SplashRoute() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => router.replace('/(onboarding)/onboarding'), 1200);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.wordmark}>GIVA</Text>
        <Text style={styles.caption}>Know your money.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  wordmark: { color: colors.primary, fontSize: typography.display, fontWeight: '800', letterSpacing: 5 },
  caption: { color: colors.textSecondary, fontSize: typography.caption, marginTop: 8, letterSpacing: 0.3 },
});
