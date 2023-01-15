'use strict';

const optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleSelector = '.post',
  optArticleTagsSelector = '.post-tags .list';


function titleClickHandler(event){
  event.preventDefault();

  const clickedElement = this;
  console.log(event);
  console.log('Link was clicked!');
   
  /* [DONE]remove class 'active' from all article links  */
   
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }


  /*[DONE] add class 'active' to the clicked link */

  
  clickedElement.classList.add('active');
  console.log(clickedElement);



  /* [DONE]remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('article.post');

  for ( let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }


  /* [DONE]get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(clickedElement.getAttribute('href'));


  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);


  /* [DONE]add class 'active' to the correct article */

  targetArticle.classList.add('active');
}


 
const list = document.querySelectorAll('.list a');
for (const l of list ){
  l.addEventListener('click', titleClickHandler);
}


/* ---------------------------------------------THE SECOND FUNCTION------------------------------------------------------------- */
/* [DONE] remove contents of titleList */

function generateTitleLinks (customSelector=''){

  const titleList = document.querySelectorAll(optTitleListSelector);
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

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

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

/*-------------------------------------TEGS------------------------------------------------------ */

function generateTags(){
  
  
  /* [DONE]find all articles */
  const allArticles = document.querySelectorAll('.post'); /*Всі статті */
  /*console.log(allArticles);*/

  
  
  /* [DONE]START LOOP: for every article: */
  for (let article of allArticles){
  


    /* [DONE]find tags wrapper */
    const allTegs = article.querySelector('.post-tags'); 
    /*console.log(allTegs);*/



    /* [DONE]make html variable with empty string */
    
    let html = '';


    /* [DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tegs'); 
    /*console.log(articleTags); */

    /* [DONE]split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /*console.log(articleTagsArray);*/




    /* [DONE]START LOOP: for each tag */

    for (let tag of articleTagsArray){

      /*console.log(tag);/*

      /* generate HTML of the link */
      const htmlLinks = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>'; 
      /*console.log(htmlLinks);*/
      /* add generated code to html variable */

      const articleWithTegs = article.querySelector('.list');
      console.log(articleWithTegs);

      html = html + htmlLinks;

      articleWithTegs.innerHTML = html;  /*Why can't insert into the tags wrapper?????????????????????????????It's work in console */    
    
    }
  }


  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */

}
generateTags();


function tagClickHandler(event){

  /* [DONE] prevent default action for this event */
  event.preventDefault();


  /* [DONE]make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* [DONE]make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* [DONE]make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* [DONE] find all tag links with class active */
  const tagsActive = tag.querySelectorAll('a.active[href^="#tag-"]');

  /* [DONE]START LOOP: for each active tag link */

  for (let tag of tagsActive){
    tag.classList.remove('a.active[href^="#tag-"]');
  
    /* [DONE]remove class active */

    /* [DONE]END LOOP: for each active tag link */
  }
  /* [DONE]find all tag links with "href" attribute equal to the "href" constant */

  const allHrefLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */

  for (let hrefLink of allHrefLinks){
    hrefLink.classList.add('active');
  }

  /* [DONE]add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

  /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();

/*----------------------------------AUTHORS----------------------------- */

function generateAuthors(){


}



