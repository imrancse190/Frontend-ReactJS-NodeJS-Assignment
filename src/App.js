import "./App.css";
import { ApartmentBedImageOffersContainer } from "./component/ApartmentBedImageOffersContainer";
import { ApartmentRulesSafetyPolicyContainer } from "./component/ApartmentRulesSafetyPolicyContainer";
import { CheckAvailabilitySidebarContainer } from "./component/CheckAvailabilitySidebarContainer";
import { ExploreOtherOptionsContainer } from "./component/ExploreOtherOptionsContainer";
import HeaderTitleSaveShare from "./component/HeaderTitleSaveShare";
import { HostedApartmentInformationContainer } from "./component/HostedApartmentInformationContainer";
import { HostInformationContainer } from "./component/HostInformationContainer";
import ImagesContainer from "./component/ImagesContainer";
import { LocationContainer } from "./component/LocationContainer";
import NavbarDesktop from "./component/NavbarDesktop";
import { ReviewsContainer } from "./component/ReviewsContainer";
import { TravelCheckInDateContainer } from "./component/TravelCheckInDateContainer";

function App() {
  return (
    <div className="App">
      <NavbarDesktop />
      <HeaderTitleSaveShare />
      <ImagesContainer />
      <div class="container-size details-information">
        <div class="rental-listing">
          <HostedApartmentInformationContainer />
          <ApartmentBedImageOffersContainer />
          <TravelCheckInDateContainer />
        </div>
        <div>
          <CheckAvailabilitySidebarContainer />
        </div>
      </div>
      <ReviewsContainer />
      <LocationContainer />
      <HostInformationContainer />
      <ApartmentRulesSafetyPolicyContainer />
      <ExploreOtherOptionsContainer />
    </div>
  );
}

export default App;
