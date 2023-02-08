
  

if(document.querySelector(".popUp-cookies")){

  window.onload = (event) => {
    
    if(!sessionStorage.getItem("cookies-appread-new")){
      document.querySelector(".popUp-cookies").style.display="block";
    
    }
}
  
  document.querySelector(".allCookies").addEventListener("click",()=>{
    document.querySelector(".popUp-cookies").style.display="none";
    document.body.style.overflow = "auto";
    sessionStorage.setItem("cookies-appread-new", "true");
    if(document.querySelector(".cc-compliance ")){
  document.querySelector("#ba-cookie-dismiss").click();
      document.querySelector("#ba-cookie-dismiss").style.display="none";
}
  })
  document.querySelector(".necessaryCookies").addEventListener("click",()=>{
    document.querySelector(".popUp-cookies").style.display="none";
    document.body.style.overflow = "auto";
    sessionStorage.setItem("cookies-appread-new", "true");
        if(document.querySelector(".cc-compliance ")){
  document.querySelector("#ba-cookie-dismiss").click();
      document.querySelector("#ba-cookie-dismiss").style.display="none";
}
  })
}
