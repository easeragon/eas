import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import { SocialIcon } from 'react-social-icons'
import MenuIcon from '@material-ui/icons/Menu'
import Sidebar from "react-sidebar"

export default function Home() {

  const [sidebarOpen, onSetSidebarOpen] = useState(false)

  return (
    <div className="container">
      <Head>
        <title>News | EAS International</title>
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
          onSetOpen={onSetSidebarOpen}
          styles={{ sidebar: { background: "white", padding: '0 4rem 0' } }}
          >
          <button style={{ background: 'white', border: 'none', margin: '1em' }} onClick={() => onSetSidebarOpen(true)}>
            <MenuIcon color="primary" fontSize="large" />
          </button>
        </Sidebar>
        <img className="dragon" src="./dragons.png"/>

        <p className="description">
          Here's what we have been upto
        </p>

        <div className="grid">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEx1ZZJ0_iHKep8xAOzUb1KT9bCzLowlE_zXrvp-I_s9xxxw/viewform" className="card">
            <h3>WhatsApp! &rarr;</h3>
            <p>Dear all,<br /> We have an exciting news. It is that you can ask us through WhatsApp! Here is the phone number.<br /> +852 36999678</p>
          </a>

          <a href="/news" className="card">
            <h3>Why There Aren't Any Episode Out &rarr;</h3>
            <p>Hello all,
<br />
  There is not much progress for the project.  The reason is that we don't have enough animators.  We need more urgently.  Please fill in the form below and introduce your friends to join it too.  Thank you very much!  


<br />
Regards, 
<br />
The EAS International Team
<br />
29/6/2021
<br />

Email: easint@protonmail.com</p>
          </a>          
        </div>
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
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
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
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .dragon {
          width: 175px;
          height: 175px;
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
      `}</style>
    </div>
  )
}
