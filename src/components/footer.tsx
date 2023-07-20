/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import { useWindowSize } from "../hooks/useWindowSize"


const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`
  const windowSize = useWindowSize()
  const { width } = windowSize

  const footerStyle = {
    paddingBottom: width < 600 ? "92.5px" : "0",
  }


  return (
    
    <Box style={footerStyle} as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={() => {
          const next = isDark ? `light` : `dark`
          setColorMode(next)
          document.documentElement.classList.value = `theme-ui-${next}`
        }}
        type="button"
        data-testid="color-mode-toggle"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {isDark ? (
          <img width="30" height="30" src="/fox.png" alt="yasu Logo" />
        ) : (
          <img width="30" height="30" src="/fox.png" alt="yasu Logo" />
        )}
        {` `}
        {/* <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `} */}
        <Link
          aria-label="Link to the theme author's website"
          href="/"
        >
          yasu's portfolio
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
