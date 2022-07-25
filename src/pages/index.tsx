import * as React from "react"
import logo from "../images/bark.svg";
import { StaticImage } from "gatsby-plugin-image"

// styles
const pageStyles = {
  color: "#232129",
  backgroundColor: "#000000",
  padding: 96,
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
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
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
  margin: 'auto',
  display: 'block'
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
    description:
      "Streamer på dansk",
    image: "/images/talent/wonderbai.jpg",
  },
  {
    text: "agge",
    url: "/agge/",
    description:
      "agge",
    image: "/images/talent/placeholder.jpg",
  },
  {
    text: "BRIANFROMDENMARK",
    url: "/BRIANFROMDENMARK/",
    description:
      "BRIANFROMDENMARK",
    image: "/images/talent/placeholder.jpg",

  },,
  {
    text: "Zrool",
    url: "/Zrool/",
    description:
      "Zrool",
    image: "/images/talent/placeholder.jpg",
  },
  {
    text: "JK",
    url: "/JK/",
    description:
      "JK",
    image: "/images/talent/placeholder.jpg",
  },
  {
    text: "MINNA MUMI",
    url: "/MINNAMUMI/",
    description:
      "MINNA MUMI",
    image: "/images/talent/placeholder.jpg",
    badge: true
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Bark Agency</title>
      
      <section style={viewZoneStyles}>
        <img style={logoStyles} src={logo} alt="Logo" />
      </section>

      <section style={{ ...viewZoneStyles, background: '#ffffff' }}>
         <h1 style={headingStyles}>
          Bark Agency giver dig en plads ved spisebordet hos præcist den målgruppe du gerne vil ramme.
          Ved at have influencere der fastholder deres publikum i gennemsnit 45 minutter ad gangen, med muligheden for konstant eksponering og dialog om netop dit budskab eller dit produkt, sikrer vi jer muligheden for succes. 
        </h1>
      </section>
    
      <ul style={doclistStyles}>
        {docLinks.map(doc => (
          <li style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul>

      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                <StaticImage src={link.image} alt={link.text}  />
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NY!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>

      <section style={{ ...viewZoneStyles, background: '#ffffff' }}>
        <p>Bark Agency<br />
        <a href="mailto:hello@barkagency.dk">hello@barkagency.dk</a><br />
        <a href="tel:+45 684491XX">+45 684491XX</a>
        <br /><br /></p>
        <p>
        CVR 386495XX<br />
        Dageløkkevej 13<br />
        Humlebæk, Danmark<br />
        </p>
      </section>

    </main>
  )
}

export default IndexPage
