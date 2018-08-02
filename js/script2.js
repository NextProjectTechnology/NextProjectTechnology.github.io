function limpar()
    {
      document.getElementById("nome").focus();
    }
    
function Enviar() {
 
    var nome = document.getElementById("nome");
 
    if (nome.value != "") {
        alert('Thank you, Mr(s). ' + nome.value + ' Your information has been sent successfully, we will contact you shortly.');
    }
 
}        

      var i=0;
      var Slide_Carregado = new Array();
          Slide_Carregado[0] ="img/destaque-home.jpg";
          Slide_Carregado[1] ="img/destaque-home2.jpg";
          Slide_Carregado[2] ="img/destaque-home 3.jpg";
      
      function Mostrar()
      {
         if (!document.images)
             {
              return;
             }
          document.images["Imagem_Pagina"].src = Slide_Carregado[i]; //Imagem_Pagina é o "name" do local onde a imagem vai ser exibida
          if (i < 2)
              i++;      
          else
              i=0;
        setTimeout("Mostrar()",3000);//looping definido por uma função timer do sistema - roda de 3 em 3 segundos a função "Mostrar"
       }
        Mostrar();
function pergunta1()
{document.getElementById('resposta1').innerHTML = 'Yes, it is included in our site development work to register your site on Google and the tracking mechanisms and optimize it for best practices. A website is not on the first page of Google if it does not follow certain parameters imposed by Google itself. And we study and follow it daily, to always stay within the best practices of positioning in Google searches.';}

function pergunta2()
{document.getElementById('resposta2').innerHTML = 'The one page site is a kind of layout designed to display all content on just one page, with well-defined sections and connecting with each other. Because it is light, dynamic and functional, the one page site is a very modern web development solution that has been highly sought after. You can even add other pages to the site, but the "core", that is, the main information, is displayed on a single page - the first page. In addition, each section should have an organized sequence, as if it were a story. The concept of One Page Layout is to show everything that has to be displayed to highlight a business, product or personal / professional information, on a single page (usually with strong visual appeal) and with vertical scrolling. In this type of layout, each menu link (for example, "who we are", "services", "products", etc.) points to a section of the page itself that the user is on. The links do not point to a new page, they just "descend" the page to display the content, using scrolling effects.'}

function pergunta3()
{document.getElementById('resposta3').innerHTML = 'It all depends on what the customer needs, after our analysts get in touch with the client, they will gather all the information obtained and move on to the programmers team to define which language will be used in the program.';}

function pergunta4()
{document.getElementById('resposta4').innerHTML = 'Yes, our team will do a tutorial teaching how to use each part of the system to make it easier for the client.';}