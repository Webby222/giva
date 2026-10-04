import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { GivaText } from '@/components/GivaText';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { colors, radii, spacing } from '@/constants/theme';

const slides = [
  { title: 'Your money.\nYour picture.', body: 'See the full picture of your money in one simple place.' },
  { title: 'Spend with\nintention.', body: 'Understand where your money goes and stay aware of your spending.' },
  { title: 'Build toward\nsomething.', body: "Set budgets, track savings goals and prepare for what's coming." },
];

export default function OnboardingScreen() {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const slide = slides[page];

  return (
    <Screen>
      <View style={styles.top}>
        <GivaText variant="label" style={styles.brand}>GIVA</GivaText>
        <GivaText variant="secondary">{String(page + 1).padStart(2, '0')} / 03</GivaText>
      </View>
      <View style={styles.visual} accessibilityElementsHidden>
        <View style={styles.orbit} />
        <View style={styles.core}><View style={styles.coreDot} /></View>
        <View style={styles.rule} />
      </View>
      <View style={styles.copy}>
        <GivaText variant="largeHeading" style={styles.title}>{slide.title}</GivaText>
        <GivaText variant="body" style={styles.body}>{slide.body}</GivaText>
      </View>
      <View style={styles.footer}>
        <View style={styles.dots}>{slides.map((item, index) => <View key={item.title} style={[styles.dot, index === page && styles.activeDot]} />)}</View>
        <PrimaryButton label={page === 2 ? 'Get started \u2192' : 'Continue \u2192'} onPress={() => page === 2 ? router.replace('/(auth)/authentication') : setPage(page + 1)} />
        <Pressable accessibilityRole="button" accessibilityLabel="Go back one screen" disabled={page === 0} onPress={() => setPage(page - 1)} style={styles.back}>
          <GivaText variant="secondary" style={[styles.backText, page === 0 && styles.hidden]}>{'\u2190  Back'}</GivaText>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: spacing.sm },
  brand: { color: colors.primary, letterSpacing: 2.5 },
  visual: { flex: 1, minHeight: 190, alignItems: 'center', justifyContent: 'center' },
  orbit: { width: 190, height: 190, borderRadius: 95, borderWidth: 1, borderColor: '#D9DED7', position: 'absolute' },
  core: { width: 112, height: 112, borderRadius: 56, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  coreDot: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#D6E2D9' },
  rule: { position: 'absolute', width: 250, height: 1, backgroundColor: '#E6E5DE', transform: [{ rotate: '-32deg' }] },
  copy: { paddingBottom: spacing.xl }, title: { fontSize: 38, lineHeight: 43 },
  body: { marginTop: spacing.md, maxWidth: 310, fontSize: 16 }, footer: { marginTop: 'auto' },
  dots: { flexDirection: 'row', gap: 8, marginBottom: spacing.lg },
  dot: { height: 4, width: 20, borderRadius: radii.pill, backgroundColor: '#D8D9D3' }, activeDot: { width: 36, backgroundColor: colors.primary },
  back: { height: 44, alignItems: 'center', justifyContent: 'center', marginTop: spacing.xs },
  backText: { color: colors.textSecondary }, hidden: { opacity: 0 },
});
