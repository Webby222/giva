import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { GivaText } from '@/components/GivaText';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { colors, spacing } from '@/constants/theme';

export default function SetupScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState('0');
  return (
    <Screen>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <Pressable onPress={() => router.replace('/(auth)/authentication')} accessibilityRole="button" style={styles.back}><GivaText variant="secondary">Back</GivaText></Pressable>
          <GivaText variant="label" style={styles.eyebrow}>A FRESH START</GivaText>
          <GivaText variant="largeHeading">Let&apos;s set up your money.</GivaText>
          <View style={styles.amountBlock}>
            <GivaText variant="body" style={styles.question}>What&apos;s your current balance?</GivaText>
            <View style={styles.amountRow}>
              <GivaText variant="sectionHeading" style={styles.currency}>{'\u20a6'}</GivaText>
              <TextInput value={amount} onChangeText={(value) => setAmount(value.replace(/[^0-9.,]/g, ''))}
                keyboardType="decimal-pad" accessibilityLabel="Current balance in Nigerian Naira" style={styles.amountInput} selectTextOnFocus />
            </View>
            <GivaText variant="secondary" style={styles.currencyLabel}>Nigerian Naira ({'\u20a6'} NGN)</GivaText>
          </View>
          <View style={styles.bottom}>
            <PrimaryButton label={'Start GIVA \u2192'} onPress={() => router.replace({ pathname: '/(tabs)/home', params: { initialBalance: amount || '0' } })} />
            <GivaText variant="secondary" style={styles.note}>You can change this anytime.</GivaText>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 }, content: { flexGrow: 1, paddingTop: spacing.sm, paddingBottom: spacing.lg },
  back: { marginBottom: spacing.xl, alignSelf: 'flex-start', paddingVertical: spacing.xs },
  eyebrow: { color: colors.primary, marginBottom: spacing.md }, amountBlock: { marginTop: spacing['2xl'] },
  question: { color: colors.textSecondary }, amountRow: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.border, marginTop: spacing.lg, paddingBottom: spacing.md },
  currency: { color: colors.primary, fontSize: 30, marginRight: spacing.sm },
  amountInput: { flex: 1, minWidth: 0, color: colors.text, fontSize: 52, fontWeight: '700', letterSpacing: -2, padding: 0 },
  currencyLabel: { marginTop: spacing.md }, bottom: { marginTop: 'auto', paddingTop: spacing.xl }, note: { textAlign: 'center', marginTop: spacing.md },
});
