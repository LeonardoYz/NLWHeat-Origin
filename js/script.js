const socialMediaLinks = {
  github: 'LeonardoYz'
}

// Muda os links das redes sociais do usuário dinamicamente no html
/*
function changeSocialMediaLinks() {
  for (let li of social__links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
} */

// changeSocialMediaLinks()

// Pega as informações do usuário direto da API do github e altera no html
function getGithubProfileInfos() {
  const githubUserProfileLink = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(githubUserProfileLink)
    .then(response => response.json())
    .then(data => {
      username.textContent = data.name
      usernameLogin.textContent = data.login
      userLink.href = data.html_url
      userPicture.style.backgroundImage = `url(${data.avatar_url})`
    })
}

getGithubProfileInfos()
