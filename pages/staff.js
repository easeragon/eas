import Head from 'next/head'
import { SocialIcon } from 'react-social-icons'
import Collapsible from 'react-collapsible'
import { useEffect, useState, useRef } from 'react'
import Sidebar from "react-sidebar"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuIcon from '@material-ui/icons/Menu'

export default function Home() {

  const [sidebarOpen, onsetSidebarOpen] = useState(false)

  return (
    <div className="container">
      <Head>
        <title>Staff | EAS International</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Sidebar
          sidebar={
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ color: '#11144C' }}>EAS</h2>
            <a style={{ fontSize: '1.1rem', margin: '1em' }} href="/">Home</a>
            <a style={{ fontSize: '1.1rem', margin: '1em' }} href="/news">News</a>
            <a style={{ fontSize: '1.1rem', margin: '1em' }} href="/staff">Staff</a>
            <a style={{ fontSize: '1.1rem', margin: '1em' }} href="/contactus">Contact Us</a>
            </div>}
          open={sidebarOpen}
          onSetOpen={onsetSidebarOpen}
          styles={{ sidebar: { background: "white", padding: '0 4rem 0' } }}
          >
          <button style={{ background: 'white', border: 'none', margin: '1em' }} onClick={() => onsetSidebarOpen(true)}>
            <MenuIcon color="primary" fontSize="large" />
          </button>
        </Sidebar>
        <img className="dragon" src="./dragons.png"/> 
        <Tabs>
    <TabList>
      <Tab>Admins</Tab>
      <Tab>Script Writers</Tab>
      <Tab>Voice Actors</Tab>
    </TabList>

    <TabPanel>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', background: '#f3f3f3', paddingTop: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img className="profile" src="https://static.wixstatic.com/media/0222bf_aafef4a7171c42ccaa1272d00ec5d1f9~mv2.jpeg/v1/fill/w_227,h_227,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202021-05-03%20at%2009_45_36_jp.webp"/>
          <h3>Boris Li</h3>
              <h3>Asia Pacific and Oceania</h3>
              <p style={{ maxWidth: '600px', textAlign: 'center' }}>Hello.  My name is Boris Li.  I am from Hong Kong.  I am just a student.  I am interested in "Inheritance Cycle" one and a half years ago.  I am one of the managers and script writer in EAS.  I am also the owner of this website, EAS Facebook Page, EAS Instagram Page and Youtube.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2em' }}>
          <img className="profile" src="/profile.jpeg"/>
          <h3>Alec</h3>
              <h3>America</h3>
              <p style={{ maxWidth: '600px', textAlign: 'center' }}>Hi I'm Alec. Longtime fan and so happy to be apart of this project.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2em' }}>
          <img className="profile" src="/profile.jpeg"/>
          <h3>Gabe</h3>
              <h3>Europe and Africa</h3>
              <p style={{ maxWidth: '600px', textAlign: 'center' }}>Hello! My name is Gabi and I am a 18 old Romanian student. I like reading books, like The Inheritance Cycle and I joined this project to see the Eragon series animated.I also like hiking, volleyball and playing ukulele. I see myself as a relentless problem-solver and I'm always looking for a new challenge. I chose to voice act partly because of no other choices but I wanna gain experience in this domain too. People often says that I'm smart and that might be true because I easily adapt new situations and intuit what I'm doing.</p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', background: '#f3f3f3', paddingTop: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img className="profile" src="https://static.wixstatic.com/media/0222bf_aafef4a7171c42ccaa1272d00ec5d1f9~mv2.jpeg/v1/fill/w_227,h_227,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202021-05-03%20at%2009_45_36_jp.webp"/>
          <h3>Boris Li</h3>
              <p style={{ maxWidth: '600px', textAlign: 'center' }}>Hello.  My name is Boris Li.  I am from Hong Kong.  I am just a student.  I am interested in "Inheritance Cycle" one and a half years ago.  I am one of the managers and script writer in EAS.  I am also the owner of this website, EAS Facebook Page, EAS Instagram Page and Youtube.</p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', background: '#f3f3f3', paddingTop: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img className="profile" src="/profile.jpeg"/>
          <h3>Jason Chan</h3>
            <p style={{ maxWidth: '600px', textAlign: 'center', padding: '0px 2em 0px 2em' }}>My name is Jason Chan. I am from Hong Kong and I am the voice actor in EAS. I am a so kind and talkative. Enjoy everyday is my own interested. Nice to meet you:)</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2em' }}>
          <img className="profile" src="/profile.jpeg"/>
          <h3>Jo</h3>
              <p style={{ maxWidth: '600px', textAlign: 'center', padding: '0px 2em 0px 2em' }}>Heya. My name is Jo. I am from QC/Canada. I discovered the Inheritance cycle couples of years ago (2 or 3 i can't remember). I'm a voice actor (hopefully a good one, never tried doing any VA).</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2em' }}>
          <img className="profile" src="/profile.jpeg"/>
          <h3>Gabe</h3>
              <p style={{ maxWidth: '600px', textAlign: 'center', padding: '0px 2em 0px 2em' }}>Hello! My name is Gabi and I am a 18 old Romanian student. I like reading books, like The Inheritance Cycle and I joined this project to see the Eragon series animated.I also like hiking, volleyball and playing ukulele. I see myself as a relentless problem-solver and I'm always looking for a new challenge. I chose to voice act partly because of no other choices but I wanna gain experience in this domain too. People often says that I'm smart and that might be true because I easily adapt new situations and intuit what I'm doing.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2em' }}>
          <img className="profile" src="/profile.jpeg"/>
          <h3>Lenna Buckley</h3>
          <p style={{ maxWidth: '600px', textAlign: 'center', padding: '0px 2em 0px 2em' }}>Hi. my name Is Lenna, I'm 21 and I'm currently studying my 2nd year of biology and geology at uni. I'm a long time fan of the inheritance cycle, my main hobbies are working on cars and fursuiting. I've not done any professional voicework but I have done some voice training and can do both masculine and feminine sounding voices.</p>
        </div>
      </div>
    </TabPanel>
  </Tabs>       
        
      </main>

      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2021 by EAS International.  All rights reserved
        </a>
        <div style={{ marginTop: '10px' }}>
        <SocialIcon url="https://www.facebook.com/theeasinternational" style={{ margin: '10px' }}/>
        <SocialIcon url="https://www.youtube.com/channel/UCyfBCKO4B0xXaO8p-fh5JmQ"  style={{ margin: '10px' }}/>
        <SocialIcon url="https://www.instagram.com/the_eas_international/"  style={{ margin: '10px' }}/>
        <SocialIcon url="https://twitter.com/the_eas_int"  style={{ margin: '10px' }}/>
        </div>
      </footer>

      <style jsx>{`
        
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 5em;
        }
        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
          color: #11144C;
          margin-top: 15px;
        }

        .title,
        .description {
          text-align: center;
          max-width: 750px;
          margin-top: 1em;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
          max-width: 900px;
        }

        .card {
          margin: 1rem;
          display: flex;
          justify-content: space-between !important;
          align-items: center !important;
          width: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .dragon {
          width: 175px;
          height: 175px;
        }
        .profile {
          width: 100px;
          height: 100px;
          border-radius:100px;
          margin-bottom: 15px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .react-tabs__tab--selected{
          border: none !important;
          border-bottom: 2px solid black !important;
          font-size: 1.5rem !important;
        }
        .react-tabs__tab-list{
          border: none !important;
          margin-top: 1em;
        }
        .react-tabs__tab{
          font-size: 1.2rem;
        }
        .react-tabs{
          display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        }
      `}</style>
    </div>
  )
}
