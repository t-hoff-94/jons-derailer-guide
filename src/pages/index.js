import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Follow these steps to adjust a rear derailer:</h2>
    <ol>
      <li>
        Check derailleur alignment and if bent, take to shop to straighten or
        replace.
      </li>
      <li>
        Shift into hightest gear (Chain on smallest cog in back and largest
        chain ring in front)
      </li>
      <li>Loosen cable bolt until cable is free</li>
      <li>
        Check for proper alignment of chain/pulley under smallest cog. If
        needed, turn high limit screw in or out until correct alignment is
        achieved.
      </li>
      <li>
        Turn barrel adjuster to the middle of its adjustment range. (If you see
        metal, turn clockwise just until the metal is hidden)
      </li>
      <li>Pull cable finger tight and re-tighten bolt.</li>
      <li>
        Push shifter into next gear. If deraillur moved the chain up to the next
        cog, continue shifting into each gear until you are at lowest gear. If
        derailleur did NOT move chain into next cog, then turn barrel adjuster
        counter clockwise until it does. Continue shifting into each gear until
        you are at lowest gear.
      </li>
      <li>
        Shift into lowest gear in back and front. ( Chain on largest cog in back
        and smallest chain ring in front.)
      </li>
      <li>
        Check for proper alignment of chain/pulley under largest cog. If needed,
        turn low limit screw in or out until correct alignnent is achieved.
      </li>
      <li>
        Check B tension adjustment while still in lowest gears. If pulley is too
        close to owest (largest) cog and rubbing/making noise, turn B tension
        screw clockwise to make bigger gap or vise versa.
      </li>
      <li>
        Check adjustment by shifting through all gears. If shifting is sluggish
        going into higher gears (towards smaller cogs), then turn barrel
        adjuster towards the smaller cogs. If shifting is sluggish going into
        lower gears (towards larger cogs), then turn barrel adjuster towards the
        larger cogs.
      </li>

      <p>
        Note: Limit screws are properly set when chain shifts easily onto
        smallest and largest cog with the deraillur as close to the chain
        without rubbing but not so far away as to potentially cause the chain to
        fall off the cassette. Limit screws should already be properly set when
        the bike was initially built and adjusted.
      </p>
    </ol>
  </Layout>
)

export default IndexPage
