const linksSocialMedia = {
  github: 'decapitaneo',
  youtube: 'channel/UCj_MLDR9037n9yshbj-nKwA',
  facebook: 'denise.capitaneo',
  instagram: 'decapitaneo',
  twitter: 'decapitaneo'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //alert(social)

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//arrow functions
/* function name(params/argumentos) {
  //code
}
arrow function = função anônima 
pode receber dois argumentos (argumento1, argumento2)
se for um argumento, não precisa de parenteses
*/
