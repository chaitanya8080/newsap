async function apiCall(url) {
   try {
       let res = await fetch(url);
       let data = await res.json();
       return data;
   } catch (error) {
       console.log("error : ",error);
   }

    //add api call logic here

}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach(el => {
        let div = document.createElement("div");
        div.setAttribute("id","content");
        let div1 = document.createElement("div");
        div1.setAttribute("id","img_div");
        let div2 = document.createElement("div");
        div2.setAttribute("id","flex_content");
        

        let img = document.createElement("img");
        img.setAttribute("id","img");
        img.src = el.urlToImage;


        let title = document.createElement("p");
        title.innerText = el.title;
        title.style.fontWeight = "bold";
        title.style.fontSize = "25px";
        let disc = document.createElement("p");
        disc.innerText = el.description;
        div1.append(img);
        div2.append(title,disc);

        div.append(div1,div2);

        div.onclick =()=>{

            let arr = [];
            arr.push(el);
            localStorage.setItem("article",JSON.stringify(arr));
            window.location.href = "news.html";
        }
        main.append(div);
    });

}

export { apiCall, appendArticles }