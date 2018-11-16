import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'



const IndexPage = ({ data }) => {

  debugger


  let blog = data.allStrapiPost.edges[0].node.data
  return (
    <div>
      <Navigation />
      <Header title={blog.title.text} description={'How to Lose Weight'} image={blog.image.url} />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div dangerouslySetInnerHTML={{ __html: blog.description.html }} />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>


  )

}
export default IndexPage

export const query = graphql`
query {
  allStrapiPost{
   edges {
     node {
       id
       title

     }
   }
 }
}



`

