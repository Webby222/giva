import type { ComponentProps } from 'react';
import { Text } from 'react-native';
import { typeStyles } from '@/constants/theme';

type Variant = keyof typeof typeStyles;
type GivaTextProps = Omit<ComponentProps<typeof Text>, 'style'> & {
  variant: Variant;
  style?: ComponentProps<typeof Text>['style'];
};

export function GivaText({ variant, style, ...props }: GivaTextProps) {
  return <Text {...props} style={[typeStyles[variant], style]} />;
}
