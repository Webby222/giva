import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { GivaText } from '@/components/GivaText';
import { Screen } from '@/components/Screen';
import { colors, radii, spacing, typography } from '@/constants/theme';

const transactionTypes = ['Expense', 'Income', 'Transfer'] as const;
type TransactionType = (typeof transactionTypes)[number];

export default function AddTransactionScreen() {
  const [selectedType, setSelectedType] = useState<TransactionType>('Expense');
  const [amount, setAmount] = useState('');

  const close = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)/home');
    }
  };

  return (
    <Screen scroll bottomInset>
      <View style={styles.header}>
        <View>
          <GivaText variant="label" style={styles.eyebrow}>YOUR MONEY, YOUR WAY</GivaText>
          <GivaText variant="largeHeading">Add transaction</GivaText>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close"
          onPress={close}
          hitSlop={12}
          style={({ pressed }) => [styles.closeButton, pressed && styles.closePressed]}
        >
          <GivaText variant="body" style={styles.closeGlyph}>×</GivaText>
        </Pressable>
      </View>

      <View style={styles.segment} accessibilityRole="tablist">
        {transactionTypes.map((type) => {
          const selected = selectedType === type;

          return (
            <Pressable
              key={type}
              accessibilityRole="tab"
              accessibilityState={{ selected }}
              onPress={() => setSelectedType(type)}
              style={({ pressed }) => [
                styles.segmentButton,
                selected && styles.segmentSelected,
                pressed && styles.segmentPressed,
              ]}
            >
              <GivaText
                variant="secondary"
                style={[styles.segmentText, selected && styles.segmentTextSelected]}
              >
                {type}
              </GivaText>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.amountSection}>
        <GivaText variant="label" style={styles.amountLabel}>AMOUNT</GivaText>
        <View style={styles.amountRow}>
          <GivaText variant="displayNumber" style={styles.currency}>₦</GivaText>
          <TextInput
            accessibilityLabel="Transaction amount in naira"
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
            placeholder="0"
            placeholderTextColor={colors.textMuted}
            style={styles.amountInput}
            maxLength={14}
            returnKeyType="done"
          />
        </View>
      </View>

      <View style={styles.field}>
        <GivaText variant="label" style={styles.fieldLabel}>NOTE</GivaText>
        <TextInput
          accessibilityLabel="Optional note"
          placeholder="Add a note"
          placeholderTextColor={colors.textMuted}
          style={styles.noteInput}
          maxLength={80}
          returnKeyType="done"
        />
      </View>

      <GivaText variant="secondary" style={styles.disclaimer}>
        This is a preview. Transactions are not saved yet.
      </GivaText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.md,
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
  eyebrow: {
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  closeButton: {
    width: 38,
    height: 38,
    borderRadius: radii.pill,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closePressed: {
    opacity: 0.65,
  },
  closeGlyph: {
    fontSize: 28,
    lineHeight: 32,
    color: colors.textSecondary,
  },
  segment: {
    minHeight: 48,
    padding: spacing.xs,
    flexDirection: 'row',
    backgroundColor: colors.surfaceMuted,
    borderRadius: radii.md,
  },
  segmentButton: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.sm,
    paddingHorizontal: spacing.xs,
  },
  segmentSelected: {
    backgroundColor: colors.surface,
  },
  segmentPressed: {
    opacity: 0.72,
  },
  segmentText: {
    fontSize: typography.caption,
    textAlign: 'center',
  },
  segmentTextSelected: {
    color: colors.primary,
    fontWeight: '700',
  },
  amountSection: {
    alignItems: 'center',
    marginTop: spacing['2xl'],
    marginBottom: spacing.xl,
  },
  amountLabel: {
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  amountRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingBottom: spacing.md,
  },
  currency: {
    fontSize: typography.title,
    letterSpacing: -0.5,
    lineHeight: 43,
    marginRight: spacing.xs,
  },
  amountInput: {
    minWidth: 100,
    maxWidth: '78%',
    color: colors.text,
    fontSize: typography.amount,
    fontWeight: '700',
    letterSpacing: -2.5,
    lineHeight: 62,
    padding: 0,
    textAlign: 'left',
    fontVariant: ['tabular-nums'],
  },
  field: {
    marginTop: spacing.md,
  },
  fieldLabel: {
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  noteInput: {
    minHeight: 54,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    color: colors.text,
    fontSize: typography.body,
    paddingVertical: spacing.md,
  },
  disclaimer: {
    marginTop: spacing.xl,
    textAlign: 'center',
  },
});
