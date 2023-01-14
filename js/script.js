'use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


function titleClickHandler(event){
  event.preventDefault();

  const clickedElement = this
  console.log(event)
    console.log('Link was clicked!');
  
   /* [DONE]remove class 'active' from all article links  */

   const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /*[DONE] add class 'active' to the clicked link */

  
  clickedElement.classList.add('active')
  console.log(clickedElement)



  /* [DONE]remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('article.post')

  for ( let activeArticle of activeArticles){
    activeArticle.classList.remove('active')
  }


  /* [DONE]get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(clickedElement.getAttribute('href'))


  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector)
  console.log(targetArticle)


  /* [DONE]add class 'active' to the correct article */

   targetArticle.classList.add('active')

}


 
const list = document.querySelectorAll(".list a")
for (const l of list ){
 l.addEventListener('click', titleClickHandler)
}


/* ---------------------------------------------THE SECOND FUNCTION------------------------------------------------------------- */
/* [DONE] remove contents of titleList */

function generateTitleLinks (customSelector=''){

const titleList = document.querySelectorAll(optTitleListSelector)
titleList.innerHTML = ''



/*[DONE]потім для кожної статті:
 /* for each article */

const allArticles = document.querySelectorAll('.post' + customSelector);
  let html = '';
  for(let article of allArticles){

/*-[DONE]прочитайте її id і збережіть його в константі
get the article id*/

  const articleId = article.getAttribute('id')

/*-[DONE]знайдіть елемент із заголовком і збережіть його вміст у константі,
find the title element*/

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

/*-на основі цієї інформації створіть код HTML посилання та збережіть його в константі, 
-вставте створений код HTML у список посилань у лівій колонці.*/
 /* [DONE]create HTML of the link */

 const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
 console.log(linkHTML)
    /* insert link into titleList */
    html = html + linkHTML;
  }
    titleList.innerHTML = html;

  

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks ()

/*------------------------------------------------------------------------------------------- */



