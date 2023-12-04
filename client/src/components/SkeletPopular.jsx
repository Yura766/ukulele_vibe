import React from "react"
import ContentLoader from "react-content-loader"

const SkeletPopular = (props) => (
  <ContentLoader 
    speed={2}
    width={90}  
    height={143}
    viewBox="0 20 174 234"
    backgroundColor="#7e7e82"
    foregroundColor="#7e7e82be"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="174" height="174" /> 
    <rect x="0" y="185" rx="0" ry="0" width="166" height="20" />
    <rect x="0" y="209" rx="0" ry="0" width="12 6" height="14" />
  </ContentLoader>
)

export default SkeletPopular

