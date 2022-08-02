console.log("news");

// api key=831c8891e5834531b1e714f19d1eb2d7
// GET https://newsapi.org/v2/everything?q=Apple&from=2022-06-19&sortBy=popularity&apiKey=API_KEY
// https://newsapi.org/v2/top-headlines?country=us&apiKey=831c8891e5834531b1e714f19d1eb2d7

let spinner=document.getElementById("spinner");
// spinner.style.display='none';
let btn = document.getElementById('mybtn');
btn.addEventListener('click', func1);
console.log(btn);

let source=`us`;
let apiKey1=`831c8891e5834531b1e714f19d1eb2d7`;

function func1() {
    console.log("click");
    // spinner.style.display='block';

    let con=document.getElementById("content");
   

    let xhr=new XMLHttpRequest();
    xhr.open("GET",`https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey1}`,true);
    xhr.onprogress=function(){
        console.log("onprogress");

      //   con.innerHTML=`<div class="spinner-border" style="width: 8rem; height: 8rem;" role="status">
      //   <span class="visually-hidden">Loading...</span>
      // </div>
      // `
    }


    xhr.onload=function(){
      
         

        

            if(this.status===200){
              // spinner.style.display='none';
                let json=JSON.parse(this.responseText);
                let articles=json.articles;
                console.log(articles);
                let newsHtml="";
    
                articles.forEach(function(element,index){
    
                  let news= 
                 ` <div class="accordion" id="content">
                  <div class="accordion-item">
                   <h2 class="accordion-header" id=heading${index}>
                     <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target=#collapse${index} aria-expanded="true" aria-controls=heading${index}>
    
                      <b> ${element.title}</b>
                     </button>
                   </h2>
     
     
                   
                   <div id="collapse${index}" class="accordion-collapse collapse " 
                   aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                     <div class="accordion-body">
                       ${element.content}
                     </div>
                   </div> 
                   </div>  `
    
        newsHtml=newsHtml+news;
                })
            
                con.innerHTML=newsHtml;
            }
            else{
                console.log("some error occured");
            }
    }
      

    
      xhr.send();
    
    
};