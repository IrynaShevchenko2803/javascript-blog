'use strict';

const optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleSelector = '.post',
  optArticleTagsSelector = '.post-tags .list', /*Теги окремих статей список ul* */
  optArticleAuthorSelector = '.post-author',
  optarticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags.list';


/*------------------------------------TITLE-CLICK-HANDLER----------------------------------------------------------------------- */
function titleClickHandler(event){
  event.preventDefault();

  const clickedElement = this;
  /*console.log(event);*/
  /*console.log('Link was clicked!');*/
   
  /* [DONE]remove class 'active' from all article links  */
   
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    /*console.log(activeLink);*/
  }


  /*[DONE] add class 'active' to the clicked link */

  
  clickedElement.classList.add('active');
  /*console.log(clickedElement);*/



  /* [DONE]remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('article.post');
  /*console.log(activeArticles)*/

  for ( let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }


  /* [DONE]get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  /*console.log(clickedElement.getAttribute('href'));*/


  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  /*console.log(targetArticle); */


  /* [DONE]add class 'active' to the correct article */

  targetArticle.classList.add('active'); 


  const list = document.querySelectorAll('.sidebar.left .list a');
  for (const l of list ){
    l.addEventListener('click', titleClickHandler);
}

 
  const listRight = document.querySelectorAll('.sidebar.right .list a');
  for (const l of listRight ){
    l.addEventListener('click', tagClickHandler);
}
}
/*------------------------------------TITLE-CLICK-HANDLER----------------------------------------------------------------------- ----*/

/*-------------------------------------GENERATE-TITLE-LINKS---------------------------------------------------------------------- *//* 
[DONE] remove contents of titleList */

function generateTitleLinks (customSelector=''){
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';



  /*[DONE]потім для кожної статті:
 /* for each article */

 const allArticles = document.querySelectorAll(optArticleSelector + customSelector);
 let html = '';
  for(let article of allArticles){

    /*-[DONE]прочитайте її id і збережіть його в константі
get the article id*/

    const articleId = article.getAttribute('id');

    /*-[DONE]знайдіть елемент із заголовком і збережіть його вміст у константі,
find the title element*/

    const articleTitle = article.querySelector(optTitleSelector).innerText;
    /*-на основі цієї інформації створіть код HTML посилання та збережіть його в константі, 
-вставте створений код HTML у список посилань у лівій колонці.*/
    /* [DONE]create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /*console.log(linkHTML);*/
    /* insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;

  

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks ();
/*-------------------------------------GENERATE-TITLE-LINKS---------------------------------------------------------------------- */
/*-------------------------------------GENERATE---TEGS-------------------------------------------------------------------------- */


function generateTags(){
  
  /*[DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /*console.log(articles);*/

  /* [DONE]START LOOP: for every article: */
  for (let article of articles){

    /* [DONE]find tags wrapper */
    const articleWrapperForTags = article.querySelector(optArticleTagsSelector);

    /* [DONE]make html variable with empty string */
    let html = '';

    /* [DONE]get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags'); /*Теги для кожної статті, бо в функції */
   // console.log(articleTags);
  
    /*[DONE]split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /*console.log(articleTagsArray);*/

  
    /* [DONE]START LOOP: for each tag */
    for (let tag of articleTagsArray){
      /*console.log(htmlTegs);*/
     
      /* [DONE]generate HTML of the link */
      const htmlTegs = '<li><a href="#tag-' + tag + '">' + tag +'</a></li>';
      /*console.log(htmlTegs);*/
      /* [DONE]add generated code to html variable */



      html = html+htmlTegs;
      /*console.log(html);*/

      /* [DONE]END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */
      articleWrapperForTags.innerHTML = html;
      /*console.log(articleWrapperForTags); */
      /* [DONE]END LOOP: for every article: */
    
      const articleWithAdedTags = articleWrapperForTags;
      /*console.log(articleWithAdedTags);*/
    }
  }
}
generateTags();
/*---------------------------------------------------------------GENERATE--TAGS--------------------------------------------------- */
/*---------------------------------------------------------------TAG-CLICK-HANDLER-------------------------------------------------- */

function tagClickHandler(event){
  /* [DONE]prevent default action for this event */
  event.preventDefault();
  /*console.log("TEST", this)*/
  /* [DONE]make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /*console.log('Link was clicked', clickedElement);/*+activeclass */

  /* [DONE]make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  /*console.log(href)*/

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /*console.log(tag);
  /* [DONE]find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  /*console.log(activeTags);*/

  /* [DONE]START LOOP: for each active tag link */
  for (let activeTag of activeTags){

    /* [DONE]remove class active */
    activeTag.classList.remove('active');

  /* [DONE]END LOOP: for each active tag link */
}
  /* [DONE]find all tag links with "href" attribute equal to the "href" constant */
  const allHrefLinks = document.querySelectorAll('a[href="' + href + '"]');
  /*console.log(allHrefLinks);*/

  /* [DONE]START LOOP: for each found tag link */
  for (let activeTag of allHrefLinks){
    
  
    /* [DONE]add class active */
    activeTag.classList.add('active');

  /* [DONE]END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');

}
/*---------------------------------------------------------------ADD-CLICK-LISTENERSTOTAGS------------------------------------------ */

function addClickListenersToTags(){
  /* find all links to tags
  знайти всі посилання на теги */
  const tagLinks = document.querySelectorAll('article .list a');
  // const tagLinks = document.querySelectorAll(optArticleTagsSelector);
  // console.log(tagLinks);
  /* START LOOP: for each link
  START LOOP: для кожного посилання */
  for(let tLink of tagLinks){
    /* add tagClickHandler as event listener for that link 
    додати tagClickHandler як слухач подій для цього посилання*/
    tLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link
    END LOOP: для кожної ланки */
  }
}

addClickListenersToTags();
/*---------------------------------------------------------------ADD-CLICK-LISTENERS-TO-TAGS------------------------------------------ */
/*-----------------------------------------------------------------GENERATE--AUTHOR---------------------------------------------------- */
function generateAuthors(){

  const articles = document.querySelectorAll(optArticleSelector);
  /*console.log(articles);*/
  for (let article of articles){
    const articleWrappers = article.querySelector(optarticleAuthorSelector);
    /*console.log(articleWrappers)*/
    let html = '';

    const author = article.getAttribute('data-author');
    /*console.log(author)(just name of author)*/

    const authorHtml = 'By ' + '<a href=#'+ author + '>' + author + '</a>';
    /*console.log(authorHtml);*/

    html = html+authorHtml;
    /*console.log(articleWrappers)*/
    articleWrappers.innerHTML = html;
    /*console.log(articleWrappers)/*"By <a href=\"George Tuxedo\">George Tuxedo</a>"*/

    
  }
}

generateAuthors();

/*---------------------------------------------------------------AUTHOR-CLICK-HANDLER------------------------------------------ */
function authorClickHandler(event){


  const allArticles = document.querySelectorAll(optArticleSelector)
  const clickedElement = this;
  console.log('link was clicked')
  
  for (let article of allArticles){
    const articleWrapper = article.querySelector(optArticleAuthorSelector);
    /*console.log(articleWrapper) post-author*/
  
  let html = '';
        const authorTags = article.getAttribute('data-author');
        const authorHTML = 'By ' + '<a href="'+ authorTags + '">' + authorTags + '</a>';
        console.log(authorHTML)
        html = html + authorHTML;
        articleWrapper.innerHTML = html;
        console.log(articleWrapper);
  }
  }
  generateAuthors();
  
  /*---------------------------------------------------------------ADD-CLICK-LISTENERS-TO-AUTHORS------------------------------------------ */
  function authorClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    /*console.log (href);//#Marion*/
  
  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#', '');
  /*console.log(tag)Marion*/
  /* [DONE]find all tag links with class active */
  const activeAuthorTags = document.querySelectorAll('.post-author a');
  /*console.log(activeAuthorTags);*/
  
  /* [DONE]START LOOP: for each active tag link */
  for (let activeTag of activeAuthorTags){
  
    /* [DONE]remove class active */
    activeTag.classList.remove('active');
  
  /* [DONE]END LOOP: for each active tag link */
  }
  /* [DONE]find all tag links with "href" attribute equal to the "href" constant */
  const targetArticles = document.querySelectorAll('a[href="' + href +'"]');/*'a[href=#Marion]' */
  /*console.log(targetArticles);*/
  
  /* [DONE]START LOOP: for each found tag link */
  for (let targetArticle of targetArticles){
    
  
    /* [DONE]add class active */
    targetArticle.classList.add('active');
  
  /* [DONE]END LOOP: for each found tag link */
  }
  
  /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-author~="' + tag + '"]');
  }
  
  /*---------------------------------------------------------------ADD-CLICK-LISTENERS-TO-AUTHORS------------------------------------------ */
  function addClickListenersToAuthors(){
    /* find all links to tags
    знайти всі посилання на теги */
    const tagLinks = document.querySelectorAll('.post-author a');
    // const tagLinks = document.querySelectorAll(optArticleTagsSelector);
    // console.log(tagLinks);
    /* START LOOP: for each link
    START LOOP: для кожного посилання */
    for(let tLink of tagLinks){
      /* add tagClickHandler as event listener for that link 
      додати tagClickHandler як слухач подій для цього посилання*/
      tLink.addEventListener('click', authorClickHandler);
      /* END LOOP: for each link
      END LOOP: для кожної ланки */
    }
  }

  addClickListenersToAuthors();
