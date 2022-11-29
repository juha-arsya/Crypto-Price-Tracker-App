import LinkPrimary from "../components/ButtonPrimary";
import Gap from "../components/Gap";

import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="contentWelcome">
      <h2 className="contentWelcomeTitle">Welcome!</h2>
      <h2 className="contentWelcomeTitle">to Crypto Tracker</h2>
      <p className="contentWelcomeBody">Cek harga koin dengan mudah, klik Mulai untuk melihat list koin .</p>
      <Gap
        height={25}
      />
      <LinkPrimary
        url="./coin"
        text="Mulai"
      />
    </div>
  )
}