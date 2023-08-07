const main=document.querySelector("main");
const article=document.createElement("article");
const header=document.createElement("header");
const h2=document.createElement("h2");
 h2.textContent="Article header";
 const p=document.createElement("p");
 p.textContent="Here is some text. Here is some text. Here is some text. Here is some text.";
 const figcaption=document.createElement("figcaption");
 figcaption.textContent="Caption";
 const figure=document.createElement("figure");
 const img=document.createElement("img");
 img.src="http://placekitten.com/320/160";
article.appendChild(header);
header.appendChild(h2);
figure.appendChild(img);
article.appendChild(figure);
article.appendChild(figcaption)
article.appendChild(p);
main.appendChild(article);
