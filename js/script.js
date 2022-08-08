

let button_menu=document.querySelector(".button_menu")
let menu=document.querySelector(".menu")
let item=document.querySelectorAll("#item")
let item_span=document.querySelectorAll("#item span")



item[0].classList.add("selection")

function menuLateral(){

   
    
 for (let index = 0; index < item_span.length; index++) {
    
    button_menu.addEventListener("click", expandir_menu)


    function expandir_menu(){
       if(window.innerWidth < 1300){
        menu.style.width="25%"
        item[index].style.width="90%";
       }else{
        menu.style.width="18%"
        item[index].style.width="90%";
      }

       if(window.innerWidth < 850){
        menu.style.width="30%"
        item[index].style.width="90%";
       }

       if(window.innerWidth < 700){
        menu.style.transform="translatex(0%)"
        menu.style.width="50%"
        
      }

       

    


       
       

       button_menu.removeEventListener("click", expandir_menu)
       button_menu.addEventListener("click", diminuir_menu)
   }


   function diminuir_menu(){
    if(window.innerWidth < 1300){
      menu.style.width="4.5%"
      item[index].style.width="50%";
    }else{
      menu.style.width="3.5%"
      item[index].style.width="50%";
    }
    
    if(window.innerWidth < 950){
      menu.style.width="5%"
      item[index].style.width="50%";
    }

    if(window.innerWidth < 850){
      menu.style.width="6%"
      item[index].style.width="50%";
    }

    if(window.innerWidth < 700){
      menu.style.transform="translatex(-150%)"
    }
     

   
    

    

    

    
   
   button_menu.addEventListener("click", expandir_menu)
   button_menu.removeEventListener("click", diminuir_menu)
}

      
   
}



}
 


menuLateral()




function selection_item(){

  for (const iterator of item) {

       iterator.addEventListener("click",()=>{
              
        iterator.classList.add("selection")

        iterator.addEventListener("click", remove_selection(iterator))

       })
    
  }


}


   

selection_item()


function remove_selection(iterator){
  let selection=document.querySelectorAll("#item")

  if(selection){

    for (const select of selection) {
      select.classList.remove("selection")
      iterator.classList.add("selection")
      
}
  }
 
}
    