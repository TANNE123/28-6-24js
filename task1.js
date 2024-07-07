    var heading=document.createElement("h1")
    var cen=document.createElement("center")
    var head_nm=document.createTextNode("INDIAN FOOD")
    heading.style.color="#3498DB"
    heading.appendChild(head_nm)
    cen.appendChild(heading)
    document.body.appendChild(cen)
    //hr line
    var hr=document.createElement("hr")
    hr.style.background="red"
    hr.style.height="3px"
    document.body.appendChild(hr)
    
    //marquee
    var marq=document.createElement("marquee")
    var marq_nm=document.createTextNode("INDIAN FOOD RESTAURANT")
    marq.appendChild(marq_nm)
    marq.style.fontSize="50px"
    marq.style.color="green"
    document.body.appendChild(marq)
    ///three div s create
    let div_1=document.createElement("div")
    let div_2=document.createElement("div")
    let div_3=document.createElement("div")


    //vag--table non vag table

    let table=[{item:"raci",price:"40Rs"},{item:"tamata",price:"50Rs"},{item:"veg biriyani",price:"140Rs"},{item:"vag raci",price:"40Rs"}]
    let table1=document.createElement("table")
    table1.style.border="2px solid black"
    table1.style.width="100%"

    let tr1=document.createElement("tr")
    let th1=document.createElement("th")
    th1.style.border="2px solid black"
    th1.innerText="Items"
    tr1.append(th1)

    let th2=document.createElement("th")
    th2.style.border="2px solid black"
    th2.innerText="Price"
    tr1.append(th2)
    table1.append(tr1)

    for(i=0;i<table.length;i++){
        let tr1=document.createElement("tr")
        let td1=document.createElement("td")
        td1.style.border="1px solid black"
        td1.style.color="red"
        td1.style.fontSize="20px"
        td1.innerText=table[i].item
        

        let td2=document.createElement("td")
        td2.style.border="1px solid black"
        td2.style.color="green"
        td2.style.fontSize="20px"
        td2.innerText=table[i].price
        tr1.append(td1,td2)
        table1.append(tr1)
    }
    div_2.append(table1)

    ////table non vag

    let table3=[{item:"biryani",price:"40Rs"},{item:"chickan",price:"50Rs"},{item:"fran biriyani",price:"140Rs"},{item:"matan",price:"100Rs"}]
   
    let table2=document.createElement("table")  
    table2.style.border="2px solid black"
    table2.style.width="100%"

    let tr3=document.createElement("tr")
    let th3=document.createElement("th")
    th3.style.border="2px solid black"
    th3.innerText="Items"
    tr3.append(th3)

    let th4=document.createElement("th")
    th4.style.border="2px solid black"
    th4.innerText="Price"
    tr3.append(th4)
    table2.append(tr3)

    for(i=0;i<table.length;i++){
        let tr1=document.createElement("tr")
        let td1=document.createElement("td")
        td1.style.border="1px solid black"
        td1.style.color="red"
        td1.style.fontSize="20px"
        td1.innerText=table3[i].item
        

        let td2=document.createElement("td")
        td2.style.border="1px solid black"
        td2.style.color="green"
        td2.style.fontSize="20px"
        td2.innerText=table3[i].price
        tr1.append(td1,td2)
        table2.append(tr1)
    }
    div_3.append(table2)
    div_1.append(div_2,div_3)
    document.body.append(div_1)
    div_1.style.display="flex" 
    div_2.style.width="48%"
    div_3.style.width="48%"
    div_1.style.justifyContent="space-evenly"
    table1.style.textAlign="center"
    table2.style.textAlign="center"

    ///details food images
    let del=document.createElement("details")
    let sum=document.createElement("summary")
    del.appendChild(sum)
    sum.innerText="Food images"
    sum.style.fontWeight="bold"
    let img=document.createElement("img")
    img.src="https://saihomefood.in/cdn/shop/products/meals.jpg?v=1571216142"
    img.width="200"
    img.height="200"
    img.style.padding="10px"
    img.style.borderRadius="30px"

    let img2=document.createElement("img")
    img2.src="https://5.imimg.com/data5/IM/KH/GLADMIN-21954819/south-indian-full-meals-250x250.jpg"
    img2.width="200"
    img2.height="200"
    img2.style.padding="10px"
    img2.style.borderRadius="30px"


    let img3=document.createElement("img")
    img3.src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-500x500.jpg"
    img3.width="200"
    img3.height="200"
    img3.style.padding="10px"
    img3.style.borderRadius="30px"

    del.append(img,img2,img3)
    document.body.appendChild(del)
/////address line
    let h2=document.createElement("h2")
    h2.innerText="Address :"
    h2.style.color="blue"
    document.body.append(h2)
    let address=document.createElement("p")
    address.innerText="road no-2;kphb colony ; hyderabad"
    address.style.fontSize="25px"
    document.body.append(address)

    