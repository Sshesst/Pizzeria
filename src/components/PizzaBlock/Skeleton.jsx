import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="-1" y="291" rx="10" ry="10" width="280" height="40" /> 
    <rect x="0" y="353" rx="0" ry="0" width="280" height="62" /> 
    <rect x="0" y="434" rx="10" ry="10" width="113" height="21" /> 
    <rect x="53" y="460" rx="0" ry="0" width="2" height="0" /> 
    <rect x="125" y="421" rx="25" ry="25" width="155" height="45" />
  </ContentLoader>
)

export default Skeleton