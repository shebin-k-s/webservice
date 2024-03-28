// pages/index.js

import ContributionPage from "./pages/contribution/contribution";
import ServicePage from "./pages/service/service";

export default function Home() {
  return (
    <main>
      <ServicePage />
      <ContributionPage />
    </main>
  );
}
