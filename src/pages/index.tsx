import * as React from "react"
import logo from "../images/bark.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#232129",
  backgroundColor: "#000000",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  display: 'flex',
  flexDirection: 'row',
  //justifyContent: 'center',
  alignItems: 'center'
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  //maxWidth: 560,
  maxWidth: '20%',
  marginBottom: 30,
  listStyleType: "none",
  display: `inline-block`,
  padding: '.5rem',
}

const linkStyle = {
  color: "rgba(255, 255, 255, 0.85)",
  fontWeight: "bold",
  fontSize: 16,
  textTransform: 'uppercase',
  verticalAlign: "5%",
  textDecoration: 'none'
}
const linkImgStyle = {
  maxWidth: '100%',
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const logoStyles = {
  width: "35%",
  margin: 'auto',
  display: 'block'
}

const viewZoneStyles = {
  width: "100vw",
  height: "100vh",
  //padding: 40,
  margin: 'auto',
  display: 'block',
  fontSize: '3.5rem'
}

const docLinks = [
  {
    text: "Talent",
    url: "/talent",
    color: "#8954A8",
  },
  {
    text: "Cases",
    url: "/cases",
    color: "#8954A8",
  },
  {
    text: "Kontakt",
    url: "/kontakt",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Wonderbai",
    url: "/wonderbai/",
    image: "/talent/wonderbai.jpg",
    name: "JENS SÆTTER-LASSEN",
    stream: "https://twitch.tv/wonderbai"
    instagram: "https://www.instagram.com/jenssaetterlassen/"
    presskit: ""
  },
  {
    text: "agge",
    url: "/agge/",
    image: "/talent/placeholder.jpg",
    name: "AGGE KAADT TRANDUM",
    stream: "https://twitch.tv/agge"
    instagram: "https://www.instagram.com/hakkeagge/"
    presskit: ""
  },
  {
    text: "BRIANFROMDENMARK",
    url: "/BRIANFROMDENMARK/",
    image: "/talent/placeholder.jpg",
    name: "BRIAN IKAST SØRENSEN",
    stream: "https://twitch.tv/brianfromdenmark"
    instagram: "https://www.instagram.com/brianowitsz/"
    presskit: ""

  },
  {
    text: "Zrool",
    url: "/Zrool/",
    image: "/talent/placeholder.jpg",
    name: "MIKKEL ULDAHL NIELSEN",
    stream: "https://www.twitch.tv/zrool"
    instagram: "https://www.instagram.com/therealzrool/"
    youtube: "https://www.youtube.com/c/Zrool"
    presskit: ""
  },
  {
    text: "JK",
    url: "/JK/",
    image: "/talent/placeholder.jpg",
    name: "JAKOB KRISTENSEN",
    stream: "https://www.twitch.tv/jkfifa"
    instagram: "https://www.instagram.com/jakob_kristensen97/"
    youtube: "https://www.youtube.com/c/JKFIFA/"
    presskit: ""
  },
]

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Bark Agency</title>
        
        <section style={{
          ...viewZoneStyles,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img style={logoStyles} src={logo} alt="Logo" />
        </section>

        <section style={{ ...viewZoneStyles, background: '#ffffff' }}>
          <ul style={doclistStyles}>
            {docLinks.map(doc => (
              <li style={docLinkStyle} key={doc.url}>
                <a
                  style={linkStyle}
                  href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
                >
                  {doc.text}
                </a>
              </li>
            ))}
          </ul>

          <h1 style={headingStyles}>
            Bark Agency giver dig en plads ved spisebordet hos præcist den målgruppe du gerne vil ramme.
            Ved at have influencere der fastholder deres publikum i gennemsnit 45 minutter ad gangen, med muligheden for konstant eksponering og dialog om netop dit budskab eller dit produkt, sikrer vi jer muligheden for succes. 
          </h1>
        </section>
    
        <section style={{
          width: '70%',
          margin: 'auto'
        }}>
          <ul style={listStyles}>
            {links.map(link => (
              <li key={link.url} style={{ ...listItemStyles }}>
                <span>
                  <a
                    style={linkStyle}
                    href={`#${link.url}`}
                  >
                    <img style={linkImgStyle}  src={link.image}  alt={link.text}/>
                    {link.text}
                  </a>
                  {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                      NY!
                    </span>
                  )}
                  
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ ...viewZoneStyles, background: '#ffffff' }}>
        <section style={{
          width: '70%',
          margin: 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          height: '100%'
        }}>
          <div>
            <p>Bark Agency<br />
              <a style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.85)' }} href="mailto:hello@barkagency.dk">hello@barkagency.dk</a><br />
              <a style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.85)' }} href="tel:+4522909399">+45 22 90 93 99</a>
            </p>
            <br />
            <p>
              CVR 43380273<br />
              Vilhelmsro 670<br />
              3480 Fredensborg, Danmark<br />
            </p>
          </div>
  
          </section>
        </section>

      </main>
    </Layout>
  )
}

export default IndexPage
