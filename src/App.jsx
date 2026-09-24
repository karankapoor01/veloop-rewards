import LeaderboardBanner from "./commponents/LeaderboardBanner/LeaderboardBanner.jsx";
import WatchAdBanner from "./commponents/WatchAdBanner/WatchAdBanner.jsx";
import ContactBanner from "./commponents/ContactBanner/ContactBanner.jsx";
import FollowEarnBanner from "./commponents/FollowEarnBanner/FollowEarnBanner.jsx";
import DailyBonusBanner from "./commponents/DailyBonusBanner/DailyBonusBanner.jsx";

function App() {
  return (
    <main className="app">
      <LeaderboardBanner />
      <WatchAdBanner />
      <ContactBanner />
      <FollowEarnBanner />
      <DailyBonusBanner />
    </main>
  );
}

export default App;