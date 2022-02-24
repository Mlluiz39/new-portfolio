var url = window.location.href
var parametrosDaUrl = url.split('?')[1]

if (!parametrosDaUrl) {
  window.location = 'https://new-portfolio-seven-psi.vercel.app/'
}
