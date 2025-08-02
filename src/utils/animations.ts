export const handleSmoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export const getAnimationClass = (isVisible: boolean, animationType = "fade-in-up", delay = 0) => {
  return `transition-all duration-1000 ${delay > 0 ? `delay-${delay}` : ""} ${
    isVisible ? `animate-${animationType}` : "opacity-0 translate-y-10"
  }`
}

export const getStaggeredDelay = (index: number, baseDelay = 100) => {
  return index * baseDelay
}
