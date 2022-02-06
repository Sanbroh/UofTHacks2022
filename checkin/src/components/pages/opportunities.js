import React from 'react';
import ProfileCard from '../individual/profileCard'
import OppoButton from '../individual/oppoButton'
import GoogleMap from '../individual/googleMap'
import MapTimeLine from '../individual/mapTimeLine'
import CurrentTime from '../individual/currentTime'
import OpportunityCard from '../individual/opportunityCard'
import Footer from '../individual/footer'
import './resources/opportunities.css'
import { NavLink as Link } from 'react-router-dom';

const Opportunities = () => {
  return (
    <div
      style={{
        marginTop: '2em',
        backgroundColor: '#f4f1de',
        width: '100vw',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
        padding: '6vh 4vw'
      }}
    >
      <div class="title">
        <h1>Browse Opportunities</h1>
      </div>
      <div id="force-move-profile" style={{ display: 'inline-block' }}>
        <ProfileCard
          name="Thomas Tesselaar"
          email="tthomas2@gmail.com"
          status="Volunteer"
          volunteerNum="32"
          followerNum="1"
          followingNum="2"
          profileImage="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        />
        <div class="profile-mask">
          <h1>You're not logged in!</h1>
          <h2>Sign in now to access your records.</h2>
          <Link to="/sign-in"><button>Sign In</button></Link>
        </div>
        <div style={{ marginTop: '1em' }}>
          <Link to="/check-in"><OppoButton name="Check In Now"/></Link>
        </div>
        <div style={{ marginTop: '1em' }}>
          <OppoButton name="Volunteer History"/>
        </div>
      </div>
      <div class="google-map outlined">
        <div class="map-container">
          <GoogleMap />
        </div>
      </div>
      <div class="google-map-timeline outlined">
        <CurrentTime />
        <MapTimeLine />
      </div>
      <div class="requests outlined">
        <div class="requests-nav">
          <img class="btn-sort" src="https://cdn-icons-png.flaticon.com/512/25/25612.png" />
          <div class="requests-nav-title">
            <h1>Opportunities</h1>
          </div>
          <img class="btn-search" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" />
        </div>
        <OpportunityCard
          number={1}
          spots={5}
          max={8}
          categories="Cleaning, Chatting"
          locationName="Eastern Estate Care Centre"
          locationType="Senior Care"
          locationAddress="19 York Street East, Toronto, L7T J8A"
          locationEmail="eecc@easternecc.ca"
          locationPhone="647-677-8271"
          locationTime="8AM - 8PM (9AM - 5PM Sundays)"
          image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/103_Hanover.jpg/1200px-103_Hanover.jpg'}
        />
        <OpportunityCard
          number={1}
          spots={2}
          max={4}
          categories="Cleaning, Daycaring"
          locationName="Toronto Chinese Alliance Church"
          locationType="Religious Service"
          locationAddress="24 Yonge Street, Toronto, L4Q U7O"
          locationEmail="pastorjohn@cac.ca"
          locationPhone="647-577-8686"
          locationTime="9AM - 5PM (11AM - 3PM Sundays)"
          image={'https://upload.wikimedia.org/wikipedia/commons/1/10/Ulstein-Church-2020.jpg'}
        />
        <OpportunityCard
          number={1}
          spots={5}
          max={20}
          categories="Religious"
          locationName="St. John the Compassionate Mission"
          locationType="Religious Service"
          locationAddress="155 Broadview Ave, Toronto, ON M4M 2E9"
          locationEmail="info@stjohnsmission.org"
          locationPhone="416-466-1357"
          locationTime="6AM - 4PM (Closed Mondays)"
          image={'https://www.orthodoxchurchtoronto.ca/sites/default/files/styles/directory/public/serviceprojects/stjohnthecompassionate.jpg?itok=b4mrKbSv'}
        />
        <OpportunityCard
          number={1}
          spots={43}
          max={60}
          categories="Health, Safety"
          locationName="Reconnect Health Services"
          locationType="Health Services"
          locationAddress="1281 St Clair Ave W, Toronto, ON M6E 1B8"
          locationEmail="contact@reconnect.on.ca"
          locationPhone="416-248-2050"
          locationTime="9AM - 5PM (Closed Weekends)"
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSoVId7j_eghQyOeCZoYy1PjYeTvWwXrd6A&usqp=CAU'}
        />
        <OpportunityCard
          number={1}
          spots={1}
          max={3}
          categories="Giving, Donations"
          locationName="The Shoebox Project for Women"
          locationType="Homeless Aid"
          locationAddress="300 Campbell Ave #213, Toronto, ON M6P 3V6"
          locationEmail="info@shoeboxproject.com"
          locationPhone="647-577-8686"
          locationTime="8AM - 4PM (Closed Weekends)"
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUluXxvlX0sTQcCrRv0aAmj7i7UPkjnjHMA&usqp=CAU'}
        />
        <OpportunityCard
          number={1}
          spots={4}
          max={10}
          categories="Immigration, Teaching"
          locationName="Culture Shock Canada"
          locationType="Assistance for Immigrants"
          locationAddress="2508-15 Viking Lane Toronto, ON M9B 0A4"
          locationEmail="marcandre.clement@gmail.com"
          locationPhone="613-868-1263"
          locationTime="9AM - 5PM (Closed Weekends)"
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTG5nTnsbjaZYL7oEEiGA6AU69mXueJxs7aQ&usqp=CAU'}
        />
        <OpportunityCard
          number={1}
          spots={1}
          max={2}
          categories="Fundraising"
          locationName="Rotary Club of Toronto"
          locationType="Community Organization"
          locationAddress="100 Front St W, Toronto, ON M5J 1E4"
          locationEmail="office@rotarytoronto.com"
          locationPhone="416-363-0604"
          locationTime="12PM - 1:30PM Friday"
          image={'https://clubrunner.blob.core.windows.net/00000001153/ThemeLogos/en-ca/LightBG_rct-logo-new.jpeg'}
        />
        <OpportunityCard
          number={1}
          spots={6}
          max={12}
          categories="Outreach, Youth Aid"
          locationName="Toronto Kiwanis Clubs"
          locationType="Community Organization"
          locationAddress="935 Dundas St E, Toronto, ON M4M 1R4"
          locationEmail="info@torontokiwanis.ca"
          locationPhone="416-925-2243"
          locationTime="9AM - 5PM (Closed Weekends)"
          image={'https://www.torontokiwanis.ca/Areas/Default/Views/Page/Templates/Blue8MobileReady/images/Logo_Kiwanis_horizontal_Rev.png'}
        />
        <OpportunityCard
          number={1}
          spots={31}
          max={80}
          categories="Learning"
          locationName="Toronto Public Library"
          locationType="Library"
          locationAddress="Various"
          locationEmail="volunteer@tpl.ca"
          locationPhone="416-397-5981"
          locationTime="9AM - 8PM (1:30PM - 4:30PM Sundays)"
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NxC1IY2TEPMiEMOHebWAUU8h5L7dz_HNWA&usqp=CAU'}
        />
        <OpportunityCard
          number={1}
          spots={8}
          max={9}
          last={true}
          categories="Anti-Poverty, Giving"
          locationName="United Way Greater"
          locationType="Community Service"
          locationAddress="26 Wellington St E 12th floor, Toronto, ON M5E 1S2"
          locationEmail="aaraniy@ryerson.ca"
          locationPhone="416-777-2001"
          locationTime="8:45AM - 4:45PM (Closed Weekends)"
          image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXoJURxtZMf9cnqfBLkZ1cZ_xkO7igC0tPg&usqp=CAU'}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Opportunities;
