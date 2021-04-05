let main_courses = document.getElementsByClassName('main_course')
let selected_main_course = document.getElementsByClassName('selected_main_course')

let drinks = document.getElementsByClassName('drink')
let selected_drink = document.getElementsByClassName('selected_drink')

let desserts = document.getElementsByClassName('dessert')
let selected_dessert = document.getElementsByClassName('selected_dessert')

let bottom_text = document.querySelector('.bottom_text')
let confirm_box_button = document.querySelector('.confirm_box_button')
var confirm_box_total = document.querySelector('.confirm_box_total')
let confirm_box  = document.querySelector('.confirm_box')

let confirm_box_main_course = document.getElementById('confirm_main_course')
let confirm_box_drink = document.getElementById('confirm_drink')
let confirm_box_dessert = document.getElementById('confirm_dessert')

let body = document.querySelector('body')

for (var i = 0; i < main_courses.length; i++){
    main_courses[i].addEventListener('click', function(){
        if (selected_main_course.length > 0){
            selected_main_course[0].classList.remove('selected_main_course')
        }
        this.classList.add('selected_main_course')
        if (selected_main_course.length + selected_drink.length + selected_dessert.length == 3){
            bottom_text.classList.add('finished_order')
            bottom_text.innerHTML = 'Fechar pedido'
        }
    })
}

for (var i = 0; i < drinks.length; i++){
    drinks[i].addEventListener('click', function(){
        if (selected_drink.length > 0){
            selected_drink[0].classList.remove('selected_drink')
        }
        this.classList.add('selected_drink')
        if (selected_main_course.length + selected_drink.length + selected_dessert.length == 3){
            bottom_text.classList.add('finished_order')
            bottom_text.innerHTML = 'Fechar pedido'
        }
    })
}

for (var i = 0; i < desserts.length; i++){
    desserts[i].addEventListener('click', function(){
        if (selected_dessert.length > 0){
            selected_dessert[0].classList.remove('selected_dessert')
        }
        this.classList.add('selected_dessert')
        if (selected_main_course.length + selected_drink.length + selected_dessert.length == 3){
            bottom_text.classList.add('finished_order')
            bottom_text.innerHTML = 'Fechar pedido'
        }
    })
}

bottom_text.addEventListener('click', function(){
    if ('finished_order' == this.classList[1]){
        body.style.opacity = 0.9
        confirm_box.style.display = 'flex'
        var main_course_name = selected_main_course[0].getElementsByClassName('product_title')[0].innerText;
        var main_course_price = parseFloat(selected_main_course[0].getElementsByClassName('product_price')[0].innerText.replace(',','.').slice(3));

        var drink_name = selected_drink[0].getElementsByClassName('product_title')[0].innerText;
        var drink_price = parseFloat(selected_drink[0].getElementsByClassName('product_price')[0].innerText.replace(',','.').slice(3));

        var dessert_name = selected_dessert[0].getElementsByClassName('product_title')[0].innerText;
        var dessert_price = parseFloat(selected_dessert[0].getElementsByClassName('product_price')[0].innerText.replace(',','.').slice(3));

        let total_price = main_course_price + drink_price + dessert_price;
        total_price = total_price.toFixed(2);

        confirm_box_main_course.getElementsByClassName('confirm_box_item_text')[0].innerHTML = main_course_name;
        confirm_box_main_course.getElementsByClassName('confirm_box_item_text')[1].innerHTML = main_course_price.toFixed(2);
        confirm_box_drink.getElementsByClassName('confirm_box_item_text')[0].innerHTML = drink_name;
        confirm_box_drink.getElementsByClassName('confirm_box_item_text')[1].innerHTML = drink_price.toFixed(2);
        confirm_box_dessert.getElementsByClassName('confirm_box_item_text')[0].innerHTML = dessert_name;
        confirm_box_dessert.getElementsByClassName('confirm_box_item_text')[1].innerHTML = dessert_price.toFixed(2);
        
        confirm_box_total.getElementsByClassName('confirm_box_item_text')[1].innerHTML = "R$ " + total_price
    }
})


confirm_box_button.addEventListener('click', function(text){
    var main_course_name = selected_main_course[0].getElementsByClassName('product_title')[0].innerText;
    var main_course_price = parseFloat(selected_main_course[0].getElementsByClassName('product_price')[0].innerText.replace(',','.').slice(3));

    var drink_name = selected_drink[0].getElementsByClassName('product_title')[0].innerText;
    var drink_price = parseFloat(selected_drink[0].getElementsByClassName('product_price')[0].innerText.replace(',','.').slice(3));

    var dessert_name = selected_dessert[0].getElementsByClassName('product_title')[0].innerText;
    var dessert_price = parseFloat(selected_dessert[0].getElementsByClassName('product_price')[0].innerText.replace(',','.').slice(3));
        
    var total_price = main_course_price + drink_price + dessert_price;
    total_price = total_price.toFixed(2);
    
    let nome = prompt("Como podemos te chamar?", "Um cliente querido");
    let endereço = prompt("Onde vamos entregar amor e carinho em forma dos nossos pratos?", "Onde mora a felidade");
    var text =`
    Olá, gostaria de fazer o pedido: \n
    - Prato: ${main_course_name} \n
    - Bebida: ${drink_name} \n
    - Sobremesa: ${dessert_name} \n
    Total: R$ ${total_price} \n
    \n
    Nome: ${nome}\n
    Endereço: ${endereço}
    `
    text = encodeURIComponent(text)
    window.open(`https://wa.me/?text=${text}`)
})


