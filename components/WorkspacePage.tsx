import { StyleSheet, View } from 'react-native';
import { EmptyState } from '@/components/EmptyState';
import { Screen } from '@/components/Screen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { spacing } from '@/constants/theme';

type WorkspacePageProps = {
  section: string;
  title: string;
  emptyTitle: string;
  emptyDescription: string;
};

export function WorkspacePage({ section, title, emptyTitle, emptyDescription }: WorkspacePageProps) {
  return (
    <Screen scroll>
      <ScreenHeader eyebrow={section.toUpperCase()} title={title} />
      <View style={styles.emptyState}>
        <EmptyState title={emptyTitle} description={emptyDescription} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    marginTop: spacing['2xl'],
  },
});
