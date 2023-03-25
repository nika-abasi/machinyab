import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function  useScreen ()  {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1439px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 890px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return [isDesktopOrLaptop,isMobile,isTablet,isPortrait ,isRetina]
}