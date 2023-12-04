import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={660}
    height={250}
    viewBox="0 0 660 250"
    backgroundColor="#7e7e82"
    foregroundColor="#7e7e82be"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="250" height="250" /> 
    <rect x="260" y="0" rx="0" ry="0" width="285" height="30" /> 
    <rect x="260" y="50" rx="0" ry="0" width="50" height="25" /> 
    <rect x="260" y="90" rx="0" ry="0" width="50" height="25" /> 
    <rect x="330" y="50" rx="0" ry="0" width="28" height="28" /> 
    <rect x="370" y="50" rx="0" ry="0" width="28" height="28" /> 
    <rect x="400" y="50" rx="0" ry="0" width="28" height="28" /> 
    <rect x="470" y="50" rx="0" ry="0" width="28" height="28" /> 
    <rect x="440" y="50" rx="0" ry="0" width="28" height="28" /> 
    <rect x="500" y="50" rx="0" ry="0" width="28" height="28" /> 
    <rect x="325" y="95" rx="0" ry="0" width="50" height="95" /> 
    <rect x="385" y="95" rx="0" ry="0" width="50" height="95" /> 
    <rect x="445" y="95" rx="0" ry="0" width="50" height="95" /> 
    <rect x="505" y="95" rx="0" ry="0" width="50" height="95" />


  </ContentLoader>
)

export default MyLoader

