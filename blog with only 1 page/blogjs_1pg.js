let arr=[];
let i=0;
let j=100;
let x=0;

function hidepage(input){
    var homeblock, newblock;
    homeblock=document.getElementById("home")
    newblock=document.getElementById("newblog")
    
    if(input=='1'){
        newblock.style.display='none'
        homeblock.style.display='block'
        // document.getElementById("blogitem").style.display='none'
        // document.getElementById("editblogid").style.display='none'
        // document.getElementById("blogentryid").style.display='none'
        document.getElementById("blogentrynew").style.display='none'
        document.getElementById("editblogid").style.display='none'
       
    }
   else {
        homeblock.style.display='none'
        newblock.style.display='block'
        // document.getElementById("blogitem").style.display='none'
        // document.getElementById("editblogid").style.display='none'
        // document.getElementById("blogentryid").style.display='none'
        document.getElementById("blogentrynew").style.display='none'
        document.getElementById("editblogid").style.display='none'
   }
}


function func_addnew(){

    
    var title1= document.getElementById("titleid").value;
    var body1= document.getElementById("bodyid").value;
    var author1= document.getElementById("authorid").value;
    i++;
    j++;

    //arr.push(title1)
    let blogentry={
        id: i,
        id2: j,
        title: title1,
        author: author1,
        body: body1
    }
    arr.push(blogentry)
    

    const btn= document.createElement("button");
    btn.className += "pinkfont1 buttonsimple";
    btn.setAttribute("id",i)
    // console.log(arr[i].id)

    

    btn.setAttribute("onclick","func_blogshow('1') ; blogdetails(id) ; passid(this.id)")
    
    
    const node1= document.createElement("dt");
    const textnode1 = document.createTextNode(title1);
    node1.appendChild(btn)
    btn.appendChild(textnode1)
    const node2= document.createElement("dd");
    const textnode2 = document.createTextNode(author1);

    node2.setAttribute("id",j)
    

    node2.appendChild(textnode2);
    document.getElementById("mylist").appendChild(node1).className="pinkfont1 buttonsimple";
    document.getElementById("mylist").appendChild(node2); 
    
    

}

function func_toggle(input){
    if(input==1){
        document.getElementById("homeid").classList.add("buttonstyle");
        document.getElementById("newblogid").classList.remove("buttonstyle")
        
    }
    else{
        document.getElementById("newblogid").classList.add("buttonstyle");
        document.getElementById("homeid").classList.remove("buttonstyle")

    }
}


function func_blogshow(input) {
    if(input==1){
        document.getElementById("editblogid").style.display='none'
        document.getElementById("home").style.display='none'
        document.getElementById("newblog").style.display='none'
        // document.getElementById("blogentryid").style.display='none'
        document.getElementById("blogentrynew").style.display='block'   
    }

}

function blogdetails(idpassed){
    
    heading_element=document.getElementById("headingid")
    author_element=document.getElementById("authornameid")
    body_element=document.getElementById("bodydetailsid")
    
    
    heading_element.innerHTML=arr[idpassed-1].title;
    author_element.innerHTML="written by " + arr[idpassed-1].author;
    body_element.innerHTML= arr[idpassed-1].body;
    
}

function func_edit_hiderest(input){
    if(input==1){
        document.getElementById("editblogid").style.display='block'
        document.getElementById("home").style.display='none'
        document.getElementById("newblog").style.display='none'
        document.getElementById("blogentrynew").style.display='none'
    }
    
}
function passid(currentid){
    x=currentid-1
    console.log(currentid)
}

function placeholder(){
    element=document.getElementById("edittitleid")
    element2=document.getElementById("editauthorid")
    element3=document.getElementById("editbodyid")

    element.value=arr[x].title
    element2.value=arr[x].author
    element3.value=arr[x].body   
    
    
}

function edit(){

    element4=document.getElementById("edittitleid").value
    element5=document.getElementById("editauthorid").value
    element6=document.getElementById("editbodyid").value

    let blogentry={
        id: x,
        id2: 100+x,
        title: element4,
        author: element5,
        body: element6
    }
    arr[x]=blogentry
    
    console.log(x)
    console.log(100+x+1)
    element7=document.getElementById(x+1)
    element8=document.getElementById(100+x+1)
    
    
    console.log(arr[x].title)
    console.log(arr[x].author)
    element7.innerHTML=arr[x].title
    element8.innerHTML=arr[x].author

}

function save(){     
    console.log("saved")
}
function deleted(){

    item=document.getElementById(x+1)
    item2=document.getElementById(100+x+1)
    item.parentNode.removeChild(item)
    item2.parentNode.removeChild(item2)

}

