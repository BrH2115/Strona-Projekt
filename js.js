document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        var my_element = document.getElementById("test");

        my_element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });

    }, "200");
});  

// document.querySelector(".kontakt-nazwa").addEventListener("mouseover", (event) => {
//     event.target.innerHTML = "THE FUTURE IS NOW";
//     event.target.style.color = "red";
// })


 // Rozdziel tekst na pojedyncze litery
 const textElement = document.querySelector('.kontakt-nazwa');
 const text = textElement.textContent;
 textElement.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');

 // Animacja kolorowania tekstu
 anime.timeline({
     loop: true // Powtarzanie animacji w nieskończoność
 })
 .add({
     targets: '.kontakt-nazwa span',
     color: ['#333', '#999797'], // Zmiana koloru z domyślnego na czerwony
     easing: 'easeInOutQuad',
     duration: 1000,
     delay: anime.stagger(100), // Opóźnienie między literami
 })
 .add({
     targets: '.kontakt-nazwa span',
     color: ['#999797', '#333'], // Powrót do domyślnego koloru
     easing: 'easeInOutQuad',
     duration: 1000,
     delay: anime.stagger(100, { from: 'last' }), // Cofanie animacji od końca
 });