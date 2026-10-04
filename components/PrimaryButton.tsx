import { Pressable, StyleSheet, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import { GivaText } from '@/components/GivaText';
import { colors, radii, spacing } from '@/constants/theme';

type PrimaryButtonProps = PropsWithChildren<{
  label: string;
  onPress?: () => void;
  disabled?: boolean;
}>;

export function PrimaryButton({ label, onPress, disabled = false, children }: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && !disabled && styles.pressed, disabled && styles.disabled]}
    >
      <GivaText variant="button">{label}</GivaText>
      {children ? <View style={styles.trailing}>{children}</View> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 56,
    borderRadius: radii.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
  },
  pressed: {
    backgroundColor: colors.primaryPressed,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    opacity: 0.45,
  },
  trailing: {
    position: 'absolute',
    right: spacing.lg,
  },
});
