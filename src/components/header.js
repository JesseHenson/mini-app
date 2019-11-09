import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import palette from "../themes"
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled"

const Head = styled.header`
  background: ${palette.background.primary};
  padding: ${palette.spacing(0.5)};
  margin-bottom: ${palette.spacing(2)};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 86px;
  color: #333;
  transform: ${props => (props.hide ? "translateY(-110%)" : "translateY(0)")};
  transition: transform 0.3s ease;
  box-shadow: ${props =>
    props.shadow ? "0 9px 9px -9px rgba(0, 0, 0, 0.13)" : "none"};
`

const StyledLink = styled(Link)`
  color: ${palette.text.primary};
  text-decoration: none;
  font-size: ${palette.spacing(1)};
`

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 20
  const TIMEOUT_DELAY = 4

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? "shadow" : ""
  const hiddenStyle = shouldHideHeader ? "hidden" : ""
  return (
    <Head shadow={shouldShowShadow} hide={shouldHideHeader}>
      <StyledLink to="/">Holiday Mini's</StyledLink>
    </Head>
  )
}

export default Header
