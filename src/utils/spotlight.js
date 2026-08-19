// Cursor-follow glow for cards. Sets CSS custom properties directly on the
// hovered element (via currentTarget) instead of React state, so the glow
// tracks the mouse every frame without triggering re-renders.
export function handleSpotlightMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
  e.currentTarget.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
}
