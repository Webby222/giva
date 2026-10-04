import { WorkspacePage } from '@/components/WorkspacePage';

export default function ActivityScreen() {
  return (
    <WorkspacePage
      section="Your history"
      title="Activity"
      emptyTitle="Nothing to show yet"
      emptyDescription="Transactions you add will appear here, in one clear timeline."
    />
  );
}
