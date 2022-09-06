let articles = document.getElementsByTagName('article')


// hide all articles that are in local storage on page load
for (let i = 0; i < articles.length; i++) {
    if (localStorage.getItem(articles[i].id) === 'hidden') {
        Hide(articles[i])
    }
}

function Hide(article) {
  article.style.display = 'none'
  // add to local storage that this article is hidden
    localStorage.setItem(article.id, 'hidden')
}

function Reveal() {
   // remove last hidden article from local storage and reveal it
    let lastHidden = localStorage.key(localStorage.length - 1)
    localStorage.removeItem(lastHidden) 
    document.getElementById(lastHidden).style.display = 'block'

}

function Reset(){
    // remove all hidden articles from local storage and reveal them
    for (let i = 0; i < articles.length; i++) {
        localStorage.removeItem(articles[i].id)
        articles[i].style.display = 'block'
    }
}

