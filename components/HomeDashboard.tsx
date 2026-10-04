import { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { GivaText } from '@/components/GivaText';
import { homeSnapshot, type Transaction } from '@/constants/homeData';
import { colors, radii } from '@/constants/theme';

export function BalanceHeader() {
  return (
    <Animated.View entering={FadeInDown.duration(420)} style={styles.balanceWrap}>
      <GivaText variant="label" style={styles.overline}>YOUR MONEY</GivaText>
      <GivaText variant="displayNumber" adjustsFontSizeToFit numberOfLines={1} style={styles.balance}>₦{homeSnapshot.balance}</GivaText>
      <View style={styles.balanceMeta}>
        <GivaText variant="secondary" style={styles.income}>+₦{homeSnapshot.income} income</GivaText>
        <View style={styles.dot} />
        <GivaText variant="secondary">−₦{homeSnapshot.spent} spent</GivaText>
      </View>
    </Animated.View>
  );
}

export function SpendingProgress() {
  const progress = useSharedValue(0);
  useEffect(() => { progress.value = withTiming(0.671, { duration: 850 }); }, [progress]);
  const barStyle = useAnimatedStyle(() => ({ width: `${progress.value * 100}%` }));
  return (
    <Animated.View entering={FadeInDown.delay(100).duration(420)} style={styles.section}>
      <SectionTitle title="THIS MONTH" />
      <GivaText variant="body" style={styles.spendingCopy}>You’ve spent <GivaText variant="body" style={styles.emphasis}>₦134,200</GivaText> of your <GivaText variant="body" style={styles.emphasis}>₦200,000</GivaText> spending plan</GivaText>
      <View style={styles.progressTrack}><Animated.View style={[styles.progressFill, barStyle]} /></View>
      <View style={styles.insightRow}><View style={styles.insightDot} /><GivaText variant="secondary" style={styles.insight}>You’re on track with your spending.</GivaText></View>
    </Animated.View>
  );
}

export function GoalCard() {
  return (
    <Animated.View entering={FadeInDown.delay(160).duration(420)} style={styles.section}>
      <SectionTitle title="YOUR GOALS" />
      <View style={styles.goalRow}>
        <View style={styles.goalMark}><GivaText variant="subheading" style={styles.goalMarkText}>N</GivaText></View>
        <View style={styles.goalContent}>
          <View style={styles.goalTitleRow}><GivaText variant="subheading">New Laptop</GivaText><GivaText variant="secondary" style={styles.percent}>36%</GivaText></View>
          <GivaText variant="secondary" style={styles.goalSaved}>₦180,000 saved of ₦500,000</GivaText>
          <View style={styles.goalTrack}><View style={styles.goalFill} /></View>
        </View>
      </View>
    </Animated.View>
  );
}

export function UpcomingList() {
  return (
    <Animated.View entering={FadeInDown.delay(220).duration(420)} style={styles.section}>
      <SectionTitle title="UPCOMING" />
      {homeSnapshot.upcoming.map((item, index) => <View key={item.name} style={[styles.upcomingRow, index > 0 && styles.rowBorder]}>
        <View style={styles.upcomingMark}><GivaText variant="secondary" style={styles.upcomingMarkText}>{item.mark}</GivaText></View>
        <View style={styles.listText}><GivaText variant="subheading" style={styles.compactTitle}>{item.name}</GivaText><GivaText variant="secondary">{item.due}</GivaText></View>
        <GivaText variant="secondary" style={styles.upcomingAmount}>₦{item.amount}</GivaText>
      </View>)}
    </Animated.View>
  );
}

export function TransactionList() {
  return (
    <Animated.View entering={FadeInUp.delay(260).duration(420)} style={styles.section}>
      <View style={styles.activityHeading}><SectionTitle title="RECENT ACTIVITY" /><Pressable accessibilityRole="button" hitSlop={8}><GivaText variant="secondary" style={styles.viewAll}>View all</GivaText></Pressable></View>
      {homeSnapshot.transactions.map((item, index) => <TransactionRow key={item.id} item={item} last={index === homeSnapshot.transactions.length - 1} />)}
    </Animated.View>
  );
}

function TransactionRow({ item, last }: { item: Transaction; last: boolean }) {
  const positive = item.kind === 'income';
  return <View style={[styles.transactionRow, !last && styles.rowBorder]}>
    <View style={[styles.transactionMark, positive && styles.incomeMark]}><GivaText variant="secondary" style={[styles.transactionMarkText, positive && styles.incomeMarkText]}>{item.mark}</GivaText></View>
    <View style={styles.listText}><GivaText variant="subheading" style={styles.compactTitle}>{item.name}</GivaText><GivaText variant="secondary">{item.detail}</GivaText></View>
    <GivaText variant="secondary" style={[styles.transactionAmount, positive && styles.positiveAmount]}>{item.amount}</GivaText>
  </View>;
}

function SectionTitle({ title }: { title: string }) {
  return <GivaText variant="label" style={styles.sectionTitle}>{title}</GivaText>;
}

export function HomeGreeting() {
  return <View style={styles.header}>
    <View><GivaText variant="secondary" style={styles.greeting}>Good morning, GT</GivaText><GivaText variant="label" style={styles.greetingSub}>YOUR FINANCIAL SPACE</GivaText></View>
    <Pressable accessibilityRole="button" accessibilityLabel="Profile" style={({ pressed }) => [styles.avatar, pressed && styles.pressed]}><GivaText variant="secondary" style={styles.avatarText}>GT</GivaText></Pressable>
  </View>;
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 },
  greeting: { color: colors.text, fontSize: 17, fontWeight: '600', lineHeight: 23 },
  greetingSub: { color: colors.textMuted, fontSize: 9, letterSpacing: 1.25, marginTop: 3 },
  avatar: { width: 42, height: 42, borderRadius: radii.pill, backgroundColor: colors.surfaceMuted, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.border },
  avatarText: { color: colors.primary, fontWeight: '700', fontSize: 12 },
  pressed: { opacity: 0.65, transform: [{ scale: 0.96 }] },
  balanceWrap: { marginTop: 29, marginBottom: 32 },
  overline: { color: colors.textMuted, fontSize: 10, letterSpacing: 1.7, marginBottom: 8 },
  balance: { fontSize: 47, lineHeight: 56, letterSpacing: -2.1 },
  balanceMeta: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 9, gap: 8 },
  income: { color: colors.positive },
  dot: { width: 3, height: 3, borderRadius: 3, backgroundColor: colors.textMuted },
  section: { marginTop: 27 },
  sectionTitle: { color: colors.textMuted, fontSize: 10, letterSpacing: 1.5, marginBottom: 14 },
  spendingCopy: { fontSize: 14, lineHeight: 22, color: colors.textSecondary },
  emphasis: { fontSize: 14, lineHeight: 22, fontWeight: '600', color: colors.text },
  progressTrack: { height: 5, overflow: 'hidden', backgroundColor: colors.surfaceMuted, borderRadius: radii.pill, marginTop: 15 },
  progressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: radii.pill },
  insightRow: { flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 11 },
  insightDot: { width: 6, height: 6, borderRadius: 6, backgroundColor: colors.positive },
  insight: { color: colors.positive, fontSize: 12 },
  goalRow: { flexDirection: 'row', alignItems: 'center', gap: 13, paddingVertical: 4 },
  goalMark: { width: 43, height: 43, borderRadius: 13, backgroundColor: '#E8EEE9', alignItems: 'center', justifyContent: 'center' },
  goalMarkText: { color: colors.primary },
  goalContent: { flex: 1, minWidth: 0 },
  goalTitleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  percent: { color: colors.primary, fontWeight: '700' },
  goalSaved: { fontSize: 12, marginTop: 3 },
  goalTrack: { height: 3, backgroundColor: colors.surfaceMuted, borderRadius: 3, marginTop: 9 },
  goalFill: { width: '36%', height: 3, backgroundColor: colors.primary, borderRadius: 3 },
  upcomingRow: { minHeight: 57, flexDirection: 'row', alignItems: 'center', gap: 11 },
  rowBorder: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.border },
  upcomingMark: { width: 34, height: 34, borderRadius: 11, backgroundColor: colors.surfaceMuted, alignItems: 'center', justifyContent: 'center' },
  upcomingMarkText: { color: colors.textSecondary, fontWeight: '700' },
  listText: { flex: 1, minWidth: 0 },
  compactTitle: { fontSize: 14, lineHeight: 20 },
  upcomingAmount: { color: colors.text, fontWeight: '600', fontSize: 13 },
  activityHeading: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  viewAll: { color: colors.primary, fontSize: 12, marginBottom: 14 },
  transactionRow: { minHeight: 63, flexDirection: 'row', alignItems: 'center', gap: 11 },
  transactionMark: { width: 37, height: 37, borderRadius: 12, backgroundColor: colors.surfaceMuted, alignItems: 'center', justifyContent: 'center' },
  transactionMarkText: { color: colors.textSecondary, fontWeight: '700' },
  incomeMark: { backgroundColor: '#E7EFE9' },
  incomeMarkText: { color: colors.positive },
  transactionAmount: { color: colors.text, fontWeight: '600', fontSize: 13 },
  positiveAmount: { color: colors.positive },
});
