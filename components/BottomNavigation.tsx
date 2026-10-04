import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GivaText } from '@/components/GivaText';
import { colors, radii, spacing, typography } from '@/constants/theme';

const labels: Record<string, string> = { home: 'Home', activity: 'Activity', insights: 'Insights', plans: 'Plans' };

type BottomNavigationProps = {
  state: { routes: { key: string; name: string }[]; index: number };
  descriptors: Record<string, { options: { title?: string } }>;
  navigation: { navigate: (name: string) => void };
};

export function BottomNavigation({ state, descriptors, navigation }: BottomNavigationProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, spacing.sm) }]}>
      {state.routes.slice(0, 2).map((route) => {
        const focused = state.routes[state.index]?.key === route.key;
        const title = labels[route.name] ?? descriptors[route.key]?.options.title ?? route.name;
        return <Pressable key={route.key} accessibilityRole="tab" accessibilityLabel={title} accessibilityState={{ selected: focused }} onPress={() => navigation.navigate(route.name)} style={({ pressed }) => [styles.tab, pressed && styles.tabPressed]}>
          {focused && <Animated.View entering={FadeIn.duration(180)} style={[styles.activeMark, styles.activeMarkSelected]} />}
          {!focused && <View style={styles.activeMark} />}
          <GivaText variant="label" style={[styles.tabLabel, focused && styles.tabLabelSelected]}>{title}</GivaText>
        </Pressable>;
      })}
      <Pressable accessibilityRole="button" accessibilityLabel="Add transaction" onPress={() => router.push('/add-transaction')} style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}>
        <GivaText variant="body" style={styles.plus}>+</GivaText>
      </Pressable>
      {state.routes.slice(2).map((route) => {
        const focused = state.routes[state.index]?.key === route.key;
        const title = labels[route.name] ?? descriptors[route.key]?.options.title ?? route.name;
        return <Pressable key={route.key} accessibilityRole="tab" accessibilityLabel={title} accessibilityState={{ selected: focused }} onPress={() => navigation.navigate(route.name)} style={({ pressed }) => [styles.tab, pressed && styles.tabPressed]}>
          {focused && <Animated.View entering={FadeIn.duration(180)} style={[styles.activeMark, styles.activeMarkSelected]} />}
          {!focused && <View style={styles.activeMark} />}
          <GivaText variant="label" style={[styles.tabLabel, focused && styles.tabLabelSelected]}>{title}</GivaText>
        </Pressable>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { minHeight: 74, paddingTop: spacing.sm, paddingHorizontal: spacing.sm, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: colors.surface, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.border },
  tab: { flex: 1, minWidth: 0, height: 48, alignItems: 'center', justifyContent: 'center', gap: 5 },
  tabPressed: { opacity: 0.62 },
  activeMark: { width: 14, height: 2, borderRadius: radii.pill, backgroundColor: colors.transparent },
  activeMarkSelected: { backgroundColor: colors.primary },
  tabLabel: { color: colors.textMuted, fontSize: 10, letterSpacing: 0.6 },
  tabLabelSelected: { color: colors.primary },
  addButton: { width: 52, height: 52, borderRadius: radii.pill, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginHorizontal: spacing.xs },
  addButtonPressed: { backgroundColor: colors.primaryPressed, transform: [{ scale: 0.96 }] },
  plus: { color: colors.white, fontSize: typography.heading + 2, lineHeight: typography.heading + 4 },
});
