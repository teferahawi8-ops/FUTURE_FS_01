import { useState, useEffect } from "react"

function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setVisible(window.scrollY > 300)
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="fixed bottom-10 right-10 bg-blue-500 px-4 py-3 rounded-full text-white"
      >
        ↑
      </button>
    )
  )
}

export default ScrollTop