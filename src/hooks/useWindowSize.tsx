import { useState, useLayoutEffect } from "react"

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize() // 初期化時にも実行

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}
