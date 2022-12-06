import * as React from "react"
import Layout from "../components/layout"


export default function Home() {
  return <div>
    <Layout>
      <div className="contents">
        <h1 className="title">TEI mit Gatsby</h1>
        <p>Text aus "<a href="https://teipublisher.com/exist/apps/shakespeare-pm/index.html">Shakespeare's Plays (TEI Publisher Edition)
        </a>". <br />TEI-XML-Daten sind auf dem <a href="https://github.com/eeditiones/shakespeare">Github-Repo eeditiones/shakespeare</a> zu finden.
        <br />
        <br />
        TEI-Datei wird mit Hilfe von <a href="https://www.gatsbyjs.com/plugins/gatsby-transformer-ceteicean/">gatsby-transformer-ceteicean</a> durch GraphQL als XML-String geholt.<br />
        Danach können beliebige TEI-Elemente herausgefiltert und auf der Webseite dargestellt werden.
        </p>
      </div>
    </Layout>
    </div>
}
