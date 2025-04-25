import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.crawlContainer}>
        <div className={styles.crawl}>
          <p className={styles.crawlText}>
            A long time ago, in a galaxy far, far away...
            <br />
            <br />
            Episode XVII
            <br />
            The Arrival on Tatooine
            <br />
            <br />
            The planet Tatooine, a remote desert world on the Outer Rim, has
            long been a haven for smugglers, bounty hunters, and those seeking
            to escape the watchful eyes of the Galactic Empire. Its twin suns
            cast a relentless heat over the sandy dunes, where the hardy
            inhabitants eke out a living amidst the harsh conditions.
            <br />
            <br />
            In recent cycles, the Galactic Council has declared Tatooine a
            neutral territory, a place where travelers from all corners of the
            galaxy may seek refuge. However, with the rise of lawlessness and
            the ever-present threat of the Hutts’ criminal empire, new
            regulations have been put into place to maintain order.
            <br />
            <br />
            By the decree of the Council, all visitors arriving on Tatooine must
            register upon landing at Mos Eisley Spaceport. Each traveler is
            required to log their kin by name and holocomm ID, ensuring that the
            delicate balance of peace is preserved in this unforgiving world.
            Failure to comply may result in expulsion or worse—capture by the
            ruthless bounty hunters who roam the desert wastes.
            <br />
            <br />
            As ships descend through the hazy atmosphere, the spaceport buzzes
            with activity. Droids whir and beep, directing newcomers to the
            registration terminals, while Jawas scurry about, eager to trade
            their scavenged wares. The air is thick with the scent of bantha
            fodder and the hum of starship engines.
            <br />
            <br />
            You, a weary traveler, have just set foot on this arid planet.
            Whether you seek fortune, adventure, or simply a place to hide, your
            journey begins here. Proceed to the registration terminal to declare
            your presence and secure your place among the stars of Tatooine...
          </p>
        </div>
      </div>
      <h1 className={styles.title}>Welcome to Tatooine, Travelers!</h1>
      <p className={styles.description}>
        All visitors must register upon arrival and log their kin by name and
        holocomm ID.
      </p>
    </div>
  );
}

export default HomePage;
