import type { TextStyle } from 'react-native';

export const colors = {
  background: '#F7F5F0',
  surface: '#FFFEFB',
  surfaceMuted: '#EFEEE8',
  text: '#171A18',
  textSecondary: '#686D69',
  textMuted: '#969B96',
  border: '#E7E5DE',
  primary: '#174B3A',
  primaryPressed: '#10382B',
  positive: '#387A54',
  warning: '#B9782D',
  negative: '#A64B45',
  white: '#FFFFFF',
  transparent: 'transparent',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const radii = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

export const typography = {
  display: 48,
  amount: 56,
  title: 34,
  heading: 25,
  subheading: 18,
  body: 16,
  caption: 13,
  eyebrow: 11,
  button: 15,
} as const;

export const shadows = {
  subtle: {
    shadowColor: '#171A18',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  raised: {
    shadowColor: '#171A18',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
} as const;

export const typeStyles = {
  displayNumber: {
    color: colors.text,
    fontSize: typography.amount,
    fontWeight: '700' as const,
    letterSpacing: -2.5,
    fontVariant: ['tabular-nums'],
    lineHeight: 62,
  },
  largeHeading: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '700' as const,
    letterSpacing: -1.4,
    lineHeight: 39,
  },
  sectionHeading: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '600' as const,
    letterSpacing: -0.65,
    lineHeight: 31,
  },
  subheading: {
    color: colors.text,
    fontSize: typography.subheading,
    fontWeight: '600',
    letterSpacing: -0.2,
    lineHeight: 25,
  },
  body: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  secondary: {
    color: colors.textSecondary,
    fontSize: typography.caption,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  label: {
    color: colors.textSecondary,
    fontSize: typography.eyebrow,
    fontWeight: '700' as const,
    letterSpacing: 1.8,
    lineHeight: 16,
  },
  button: {
    color: colors.white,
    fontSize: typography.button,
    fontWeight: '600' as const,
    letterSpacing: 0.1,
  },
} satisfies Record<string, TextStyle>;

