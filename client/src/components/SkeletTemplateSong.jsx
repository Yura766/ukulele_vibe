import React from "react"
import ContentLoader from "react-content-loader"

const SkeletTemplateSong = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={50}
    viewBox="0 0 320 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="50" height="50" /> 
    <rect x="20" y="201" rx="0" ry="0" width="166" height="14" /> 
    <rect x="62" y="0" rx="0" ry="0" width="110" height="10" /> 
    <rect x="62" y="20" rx="0" ry="0" width="66" height="10" />
  </ContentLoader>
)

export default SkeletTemplateSong

