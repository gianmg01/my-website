import ProjectHeader from '../../components/ProjectHeader';
import Footer from '../../components/Footer';

export default function GeoApp() {
  return (
    <>
      <ProjectHeader title="Geolocation App" subtitle="Project Overview" />

      <main className="project-content">
        <section>
          <h2>About the App</h2>
          <p>
            This mobile app is a location-based scavenger hunt game built with Flutter and Firebase. Players select a set of locations—or create their own custom sets—by uploading photos and GPS coordinates, which are stored and managed using Firebase for seamless data persistence. The game challenges users to explore their surroundings by finding the real-world locations shown in the images. It also integrates Google Maps for navigation support, offering a rich, interactive experience that leverages real-world exploration.
          </p>
        </section>
        <p></p>

        <section className="section-row">
          <div className="section-image">
            <img src="/images/geo1.PNG" alt="Home Screen" />
          </div>
          <div className="section-text">
            <h2>Home Screen</h2>
            <p>
              The home screen is the central hub where players can choose from available location sets or create their own. They can add new locations by uploading photos and specifying their GPS coordinates, all saved to Firebase for reliable storage and retrieval across devices. This customization allows players to build unique scavenger hunts tailored to their campus or city, making the game flexible and endlessly replayable.
            </p>
          </div>
        </section>

        <section className="section-row">
          <div className="section-image">
            <img src="/images/geo2.PNG" alt="In-Game Screen" />
          </div>
          <div className="section-text">
            <h2>In-Game Screen</h2>
            <p>
              During gameplay, users are shown photos of specific locations they need to find in real life. The objective is to navigate to the correct spot and tap the "Submit" button to log their guess and move to the next challenge. Difficulty settings adjust the time limit per location and the number of available hints, adding a strategic layer to the experience. Notifications alert players when time is almost up, keeping the pace engaging and competitive.
            </p>
          </div>
        </section>

        <section className="section-row">
          <div className="section-image">
            <img src="/images/geo3.PNG" alt="Map Integration" />
          </div>
          <div className="section-text">
            <h2>Map Integration</h2>
            <p>
              The app features an integrated map powered by the Google Maps API. Players can open the map from the in-game screen to view their current position and any pins related to the hunt. This integration helps users navigate their environment and plan their route to the target location. The map-based hints system shows players how far they are from the correct spot, enhancing exploration and guiding them without giving away the exact answer.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
