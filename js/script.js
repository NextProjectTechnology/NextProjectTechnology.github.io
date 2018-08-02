function limpar()
    {
      document.getElementById("nome").focus();
    }
function Enviar() {
 
    var nome = document.getElementById("nome");
 
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso, entraremos em contato em breve.');
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
{document.getElementById('resposta1').innerHTML = 'Sim, está incluso em nosso trabalho de <b>desenvolvimento de sites</b> cadastrar seu site no Google e nos mecanismos de rastreamento e otimizar ele para as boas práticas. Um site não fica na primeira página do Google se não seguir alguns parâmetros impostos pelo próprio Google. E nós estudamos e acompanhamos isso diariamente, para sempre ficar por dentro das melhores práticas de posicionamento nas buscas do Google.';}

function pergunta2()
{document.getElementById('resposta2').innerHTML = 'O site one page é um tipo de layout feito para exibir todo o conteúdo em apenas uma página, com seções bem definidas e conectando uma com a outra. Por ser leve, dinâmico e funcional o site one page é uma solução de desenvolvimento web muito moderna que vem sendo bastante procurada. Você pode até adicionar outras páginas ao site, mas o “núcleo”, isto é, as principais informações, são exibidas em uma única página – a primeira. Além disso, cada seção deve ter uma sequência organizada, como se fosse uma história. O conceito de One Page Layout é mostrar tudo o que deve ser exibido para destacar um negócio, um produto ou informações pessoais/profissionais, em uma única página (normalmente, com apelo visual bem forte) e com rolagem vertical. Nesse tipo de layout, cada link do menu (por exemplo, "quem somos", "serviços", "produtos" etc) aponta para uma seção da própria página em que o usuário está. Os links não direcionam para uma nova página, apenas “descem” a página para exibir o conteúdo, usando efeitos de rolagem.';}

function pergunta3()
{document.getElementById('resposta3').innerHTML = 'Tudo depende do que o cliente necessita, após nossos analistas entrarem em contato com o cliente, eles irão reunir todas as informações obtidas e passar para a equipe de programadores para definir qual linguagem será usada no programa.';}

function pergunta4()
{document.getElementById('resposta4').innerHTML = 'Sim, nossa equipe fará um tutorial ensinando como usar cada parte do sistema para facilitar o trabalho do cliente.';}