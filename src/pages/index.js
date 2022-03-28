import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NewArrivals from "../components/NewArrivals"
import Seo from "../components/seo"
import SubHero from "../components/SubHero"

const IndexPage = (props) => {
    return (
        <Layout location={props.location}>
            <Seo title="Home" />
            <Hero />
            <SubHero />
            <NewArrivals />
            <section>
                
                <h1>Home Page</h1>
                <p>
                    Inter is a variable font family carefully crafted & designed for computer screens.
    
                    Inter features a tall x-height to aid in readability of mixed-case and lower-case text. Several OpenType features are provided as well, like contextual alternates that adjusts punctuation depending on the shape of surrounding glyphs, slashed zero for when you need to disambiguate "0" from "o", tabular numbers, etc.
    
                    The Inter project is led by Rasmus Andersson, a Swedish maker–of–software living in San Francisco. To contribute, see github.com/rsms/inter
                </p>
            </section>
        </Layout>
        )
}

export default IndexPage
