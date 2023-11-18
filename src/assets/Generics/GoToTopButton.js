import React, { useEffect } from 'react'

const ScrollToTopButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      const goToTop = document.querySelector("#goto-top")
      const header = document.querySelector("header")

      if (window.scrollY > 60) {
        goToTop.classList.remove('hidden')
        header.classList.add('sticky')
      } else {
        goToTop.classList.add('hidden')
        header.classList.remove('sticky')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button id="goto-top" className="hidden" onClick={goToTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  )
}

export default ScrollToTopButton;
