import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { GivaText } from '@/components/GivaText';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { colors, radii, spacing } from '@/constants/theme';

const fields = [
  { label: 'Full name', placeholder: 'Your name', key: 'name' },
  { label: 'Email', placeholder: 'you@example.com', key: 'email', keyboardType: 'email-address' as const },
  { label: 'Password', placeholder: 'At least 8 characters', key: 'password', secureTextEntry: true },
];

export default function AuthenticationScreen() {
  const router = useRouter();
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [loginMode, setLoginMode] = useState(false);

  return (
    <Screen>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <Pressable onPress={() => router.replace('/(onboarding)/onboarding')} style={styles.back} accessibilityRole="button"><GivaText variant="secondary">Back</GivaText></Pressable>
          <GivaText variant="label" style={styles.eyebrow}>A CLEARER VIEW STARTS HERE</GivaText>
          <GivaText variant="largeHeading" style={styles.heading}>{loginMode ? 'Welcome back.' : 'Create your GIVA account'}</GivaText>
          <GivaText variant="secondary" style={styles.intro}>A little about you, and we’ll make this space yours.</GivaText>
          {!loginMode && fields.map((field) => (
            <View key={field.key} style={styles.fieldGroup}>
              <GivaText variant="label" style={styles.fieldLabel}>{field.label.toUpperCase()}</GivaText>
              <TextInput
                value={values[field.key as keyof typeof values]}
                onChangeText={(value) => setValues((current) => ({ ...current, [field.key]: value }))}
                placeholder={field.placeholder} placeholderTextColor={colors.textMuted}
                autoCapitalize={field.key === 'name' ? 'words' : 'none'}
                keyboardType={field.keyboardType ?? 'default'} secureTextEntry={field.secureTextEntry}
                style={styles.input} returnKeyType={field.key === 'password' ? 'done' : 'next'}
              />
            </View>
          ))}
          {loginMode && <View style={styles.fieldGroup}><GivaText variant="label" style={styles.fieldLabel}>EMAIL</GivaText><TextInput placeholder="you@example.com" placeholderTextColor={colors.textMuted} keyboardType="email-address" autoCapitalize="none" style={styles.input} /></View>}
          {loginMode && <View style={styles.fieldGroup}><GivaText variant="label" style={styles.fieldLabel}>PASSWORD</GivaText><TextInput placeholder="Your password" placeholderTextColor={colors.textMuted} secureTextEntry style={styles.input} /></View>}
          <PrimaryButton label={loginMode ? 'Log in' : 'Create account'} onPress={() => router.replace('/(setup)/setup')} />
          {!loginMode && <Pressable style={styles.google} accessibilityRole="button" onPress={() => router.replace('/(setup)/setup')}><GivaText variant="body" style={styles.googleText}>Continue with Google</GivaText></Pressable>}
          <Pressable style={styles.switch} onPress={() => setLoginMode((mode) => !mode)} accessibilityRole="button">
            <GivaText variant="secondary">{loginMode ? 'New to GIVA? ' : 'Already have an account? '}<GivaText variant="secondary" style={styles.link}>{loginMode ? 'Create account' : 'Log in'}</GivaText></GivaText>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 }, content: { flexGrow: 1, paddingTop: spacing.sm, paddingBottom: spacing.lg },
  back: { marginBottom: spacing.xl, alignSelf: 'flex-start', paddingVertical: spacing.xs },
  eyebrow: { color: colors.primary, marginBottom: spacing.md }, heading: { fontSize: 34, lineHeight: 40, maxWidth: 320 },
  intro: { marginTop: spacing.sm, marginBottom: spacing.xl, maxWidth: 300 },
  fieldGroup: { marginBottom: spacing.md }, fieldLabel: { fontSize: 10, color: colors.textSecondary, marginBottom: spacing.xs },
  input: { minHeight: 54, borderBottomWidth: 1, borderColor: colors.border, color: colors.text, fontSize: 16, paddingVertical: spacing.sm },
  google: { minHeight: 54, marginTop: spacing.sm, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.border, borderRadius: radii.md },
  googleText: { fontWeight: '600' }, switch: { alignItems: 'center', paddingVertical: spacing.lg }, link: { color: colors.primary, fontWeight: '600' },
});
