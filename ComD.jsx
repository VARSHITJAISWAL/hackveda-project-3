import styles from './ComD.module.css';

function ComD() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.electors}>
        <h3>Electors</h3>
        <ul>
          <li>Register Now To Vote <span>&#8594;</span></li>
          <li>Check Application Status <span>&#8594;</span></li>
          <li>Know Your Polling Booth <span>&#8594;</span></li>
          <li>Search Name in Voter list <span>&#8594;</span></li>
          <li>Register Complaint <span>&#8594;</span></li>
        </ul>
        <button className={styles.knowMore}>Know More</button>
      </div>

      <div className={styles.party}>
        <h3>POLITICAL PARTY</h3>
        <ul>
          <li>New Party Registration <span>&#8594;</span></li>
          <li>Election Symbol Allotment <span>&#8594;</span></li>
          <li>Nomination <span>&#8594;</span></li>
          <li>e-Affidavit <span>&#8594;</span></li>
          <li>Permission <span>&#8594;</span></li>
        </ul>
        <button className={styles.knowMore}>Know More</button>
      </div>

      <div className={styles.eci}>
        <h3>ECI OFFICIALS</h3>
        <ul>
          <li>Handbooks/Manuals<span>&#8594;</span></li>
          <li>Compendium of Instructions <span>&#8594;</span></li>
          <li>Postal Ballots <span>&#8594;</span></li>
          <li>Service Voter Portal <span>&#8594;</span></li>
          <li>Observer Portal <span>&#8594;</span></li>
        </ul>
        <button className={styles.knowMore}>Know More</button>
      </div>
    </div>
  );
}

export default ComD;
