// This component will be sent props for the image Source, alt text, and title. 
// It will return a HTML image tag (img) with the sourced image, some alt text
// with the name for the technology the image represents, and a title tag which adds
// a hover effect for people to identify the name of the technology by hovering 

function Skill({source, alt, title}) {
    return  <img src={source} alt={alt} title={title}/>
}

export default Skill