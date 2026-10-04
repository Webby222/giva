import { Tabs } from 'expo-router';
import { BottomNavigation } from '@/components/BottomNavigation';
import { colors } from '@/constants/theme';

export default function MainTabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: colors.background } }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="activity" options={{ title: 'Activity' }} />
      <Tabs.Screen name="insights" options={{ title: 'Insights' }} />
      <Tabs.Screen name="plans" options={{ title: 'Plans' }} />
    </Tabs>
  );
}
