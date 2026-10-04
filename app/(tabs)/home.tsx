import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BalanceHeader, GoalCard, HomeGreeting, SpendingProgress, TransactionList, UpcomingList } from '@/components/HomeDashboard';
import { GivaWordmark } from '@/components/GivaWordmark';
import { colors, spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.brandRow}><GivaWordmark /></View>
        <HomeGreeting />
        <BalanceHeader />
        <SpendingProgress />
        <GoalCard />
        <UpcomingList />
        <TransactionList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { flexGrow: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.sm, paddingBottom: spacing.xl },
  brandRow: { marginBottom: 17 },
});
