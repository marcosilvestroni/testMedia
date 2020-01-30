import { MediaMatcher, MediaServerRender } from "react-media-match"
import { isMobile } from "react-device-detect"

import React from "react"

const witchDevice = () => {
  return isMobile ? "mobile" : "desktop"
}

const mediaDevice = props => {
  return (
    <MediaServerRender predicted={witchDevice()}>
      <MediaMatcher {...props} />
    </MediaServerRender>
  )
}

export default mediaDevice
