import React from "react"
import {SEO, Image} from "../components/elements"

import "../styles/common.scss"
import "../styles/index.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <main
    className="home-main">
      <Image
        className="logo"
        alt="Karuna 2020"
        src="https://cdn.karuna2020.org/logo-vertical.svg"
      />
      <p>
        While many of us will be able to comfortably sustain for 1 or even 2
        months at our houses, there will be millions of people—especially those
        with limited financial means, senior citizens, the differently abled,
        etc.—who may find it very difficult to even pull through 1 or 2 days
        without a basic three meals or essential medicines.
      </p>
      <p>
        While the Governments put all their efforts in making lives of its
        citizens comfortable, what can we do to help? In India, with a
        population of over 130 crores, even providing 3 meals is a difficult
        task.
      </p>
      <p>
        <strong>Karuna 2020</strong> is a small effort to try to bring together
        people and do our part. We need volunteers to take care of procurement,
        cooking management, distribution, fund raising, accounting, social
        media, technology and volunteer management.
      </p>
      <p>
        The coronavirus is spreading very fast, let us see if Karuna 2020 can
        catch up with it soon, and then defeat it!
      </p>
      <div className="buttons">
        <a href="https://www.facebook.com/Karuna2020.org" target="_blank"
          >Follow our progress on Facebook &rarr;</a
        >
        <a href="https://github.com/Karuna2020" target="_blank"
          >Contribute on GitHub &rarr;</a
        >
      </div>
    </main>
  </>
)

export default IndexPage
