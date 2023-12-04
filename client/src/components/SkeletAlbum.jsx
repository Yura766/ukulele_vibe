import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={174}
    height={214}
    viewBox="0 0 174 234"
    backgroundColor="#7e7e82"
    foregroundColor="#7e7e826c"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="174" height="174" /> 
    <rect x="0" y="185" rx="0" ry="0" width="174" height="14" />
  </ContentLoader>
)

export default MyLoader

