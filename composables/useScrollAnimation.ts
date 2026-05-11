import { ref, onMounted, onUnmounted } from 'vue'

export type AnimationType = 'fade-up' | 'slide-left' | 'slide-right' | 'fade'

interface ScrollAnimationOptions {
  animation?: AnimationType
  delay?: number
  threshold?: number
}

const initialStyles: Record<AnimationType, { opacity: string; transform: string }> = {
  'fade-up':     { opacity: '0', transform: 'translateY(30px)' },
  'slide-left':  { opacity: '0', transform: 'translateX(-40px)' },
  'slide-right': { opacity: '0', transform: 'translateX(40px)' },
  'fade':        { opacity: '0', transform: 'translateY(0)' },
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { animation = 'fade-up', delay = 0, threshold = 0.15 } = options
  const target = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    const el = target.value
    const { opacity, transform } = initialStyles[animation]

    el.style.opacity = opacity
    el.style.transform = transform
    el.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translate(0, 0)'
            observer?.unobserve(el)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { target }
}