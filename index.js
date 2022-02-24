let reload = setTimeout(() => {
  document.location.reload()
  return false
}, 500)

clearTimeout(reload)
