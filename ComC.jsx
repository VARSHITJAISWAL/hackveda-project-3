import styles from "./ComC.module.css";

const issues = [
  {
    title: "Gujrat SIR: Key Findings of Enumeration Phase (24 June–25 July 2025)",
    date: "Sunday 27 Jul 2025, 4:49 PM"
  },
  {
    title: "5.23 crore Gujrat electors express full faith in SIR process with active participation",
    date: "Friday 25 Jul 2025, 4:50 PM"
  },
  {
    title: "Vice-Presidential Election, 2025 ECI appoints Returning Officer and Assistant ROs",
    date: "Friday 25 Jul 2025, 10:58 AM"
  },
  {
    title:
      "Commission interacts with a delegation from the All India Anna Dravida Munnetra Kazhagam at Nirvachan Sadan",
    date: "Thursday 24 Jul 2025, 5:26 PM"
  },
  {
    title: "Aim of Gujrat SIR: No eligible voter should be left out",
    date: "Thursday 24 Jul 2025, 4:39 PM"
  }
];

const tabs = [
  "Current Issues",
  "Press Releases",
  "Instructions",
  "Tender & Vacancies",
  "Election Stories",
  "FAQs"
];

const ComC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabBar}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              index === 0 ? styles.activeTab : ""
            }`}
          >
            <span className={styles.tabIcon}>📄</span> {tab}
          </div>
        ))}
      </div>

      <div className={styles.issueContainer}>
        {issues.map((issue, index) => (
          <div className={styles.issueItem} key={index}>
            <span className={styles.issueIcon}>✔️</span>
            <div>
              <p className={styles.issueTitle}>{issue.title}</p>
              <p className={styles.issueDate}>{issue.date}</p>
            </div>
          </div>
        ))}
        <div className={styles.viewMoreWrapper}>
          <button className={styles.viewMore}>View More ➜</button>
        </div>
      </div>
    </div>
  );
};

export default ComC;
