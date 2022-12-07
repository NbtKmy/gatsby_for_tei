import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'



function modifyTEItoJSX(scene){
  
  let kids = scene.childNodes
  let jsx = ''
  for(let i = 0; i < kids.length; i++) {
    let child = kids[i]
    let tag = child.tagName
    
    if (tag === 'tei-stage'){
      let stage = '<p class="stage">' + child.textContent + '</p>'
      jsx += stage
    } else if (tag === 'tei-sp'){
      let speaker = '<p class="speaker">' + child.getElementsByTagName('tei-speaker')[0].textContent + '</p>'
      jsx += speaker
      let wordsArr = child.getElementsByTagName('tei-l')
      let words = ''
      for (let j = 0; j < wordsArr.length; j++){
        words += wordsArr[j].textContent + '<br>'
      }
      let wordsArrP = child.getElementsByTagName('tei-p')
      let wordsP = ''
      for (let k = 0; k < wordsArrP.length; k++){
        wordsP += wordsArrP[k].textContent + '<br>'
      }
      jsx += '<p class="words">' + words + wordsP + '</p>'
    }
  }
  return jsx
}

const SamplePage = ({data}) => {
    const tei = data.allCetei.edges[0].node.prefixed

    const { DOMParser } = require('xmldom')
    const parser = new DOMParser()
    const doc = parser.parseFromString(tei, "text/xml")
    const head1 = doc.getElementsByTagName('tei-head')[0]
    const head2 = doc.getElementsByTagName('tei-head')[1]
    const tit = head1.textContent
    const actNo = head2.textContent

    //const scene1 = doc.querySelector('tei-text tei-div[type="scene"]')
    //let jsx = modifyTEItoJSX(scene1)
    const body = doc.getElementsByTagName('tei-body')
    const divs = body[0].getElementsByTagName('tei-div')
    let jsx = ''
    let act1
    for (let x = 0; x < divs.length; x++) {
      if (divs[x].getAttribute('type') === "act" && divs[x].getAttribute('n') === "1") {
        console.log(divs[x])
        act1 = divs[x]
      }
    }
    const scenes = act1.getElementsByTagName('tei-div')
    for (let y = 0; y < scenes.length; y++){
      if (scenes[y].getAttribute('type') === "scene" && scenes[y].getAttribute('n') === "1") {
        jsx += modifyTEItoJSX(scenes[y])
      }
    }
    
    return (
        <div>
            <Layout>
              <div className="contents">
                <h3>Sample page for Gatsby + TEI</h3>
                <h1 className="title">{tit}</h1>
                <p className="actno">{actNo}</p>
                <div dangerouslySetInnerHTML={{__html: jsx}}/>
              </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
query teiQuery{
    allCetei {
      edges {
        node {
          prefixed
        }
      }
    }
  }  
`

export default SamplePage