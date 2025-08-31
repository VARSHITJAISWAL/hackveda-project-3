import style from "./App.module.css";
import ComA from "./ComA.jsx";
import ComB from "./ComB.jsx";
import ComC from "./ComC.jsx";
import ComD from "./ComD.jsx";
import ComE from "./ComE.jsx";
import ComF from "./ComF.jsx";

function App() {
  return (
    <div className={style.mainBox}>
      <div className={style.bgHead}>
        <div className={style.header}>
          <img
            src="https://images.seeklogo.com/logo-png/25/2/ashok-stambh-logo-png_seeklogo-259375.png"
            alt="Ashok Stambh"
            className={style.logo}
          />
          <h1 className={style.title}>State Election Commission, Gujarat</h1>
          <select style={{ borderColor: "#003865", color: "#003865" }} className={style.languageDropdown}>
            <option value="en">English</option>
            <option value="gu">ગુજરાતી</option>
            <option value="hi">हिन्दी</option>
          </select>
          <input
            style={{ borderColor: "#003865" }}
            type="text"
            className={style.searchBar}
            placeholder="🔎"
          />
          <div className={style.navLinks}>
            <h4>Home</h4>
            <h4>Feedback</h4>
            <h4>SiteMap</h4>
          </div>
        </div>
      </div>

      <div className={style.tickerWrapper} role="marquee" aria-label="Latest updates from SEC Gujarat">
        <div className={style.tickerLabel}>📢 Latest</div>
        <div className={style.tickerScrollArea}>
          <div className={style.tickerContent}>
            State Election Commission Gujarat announces voter awareness drive —
            EVM demo centers set up in all talukas —
            Next phase of election training starts from August 5th —
            Helpline 1950 is now active —
            Candidate nominations deadline extended till July 31 —
          </div>
        </div>
      </div>

      <div>
        <ComA />
      </div>
      <div>
         <ComB />
      </div>
      <div>
        <ComC />
      </div>
      <div>
        <ComD />
      </div>
      <div>
        <ComE />
      </div>
        <div>
        <ComF />
      </div>

    </div>
  );
}

export default App;
