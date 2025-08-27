import styles from './ComB.module.css';

const menu = {
  "Election": [
    "Municipal Corporation",
    "Municipality",
    "District Panchayat",
    "Taluka Panchayat",
    "FAQNew",
    "Village Panchayat",
    "Election Results",
    "Delimitation",
    "Rotation",
    "SVAP New"
  ],
  "Important Information": [
    "Total Seats & Breakup",
    "Parties & Symbols",
    "Election Symbol Book 2024-25",
    "Elected Members List",
    "Model Code of Conduct",
    "Important Judgments",
    "Important Orders/Circulars",
    "Compulsory Voting Bill",
    "Rules & SEC, Gujarat orders related to electoral rolls"
  ],
  "Statistics": [
    "Statistical Report 1997",
    "Statistical Report 1999-2000",
    "Statistical Report 2003",
    "Statistical Report 2004-06",
    "Statistical Report 2007-08",
    "Statistical Report 2009-11",
    "Statistical Report 2012-13",
    "Statistical Report 2014-16",
    "Statistical Report 2017-18",
    "Statistical Report 2019-21",
     "Statistical Report 2022-24"
      
  ],
  "Forms": [
    "Voters related forms",
    "Candidate related forms",
    "All other forms"
  ],
  "Certification": [],
  "GIG3.0": [],
  "Workshop": []
};

export default function ComB() {
  return (
    <div className={styles.strip}>
      {Object.entries(menu).map(([main, subs]) => (
        <div key={main} className={styles.menuItem}>
          <span className={styles.menuText}>
            {main}
            {subs.length > 0 && <span className={styles.arrow}>^</span>}
          </span>
          {subs.length > 0 && (
            <div className={styles.dropdown}>
              {subs.map((sub, idx) => (
                <div key={idx} className={styles.dropdownItem}>
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
