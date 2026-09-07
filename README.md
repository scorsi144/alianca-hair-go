# Aliança Barber Lounge

Crie um site profissional para uma barbearia utilizando apenas HTML, CSS e JavaScript puro.

O site deve ser uma landing page de uma única página, moderna, leve, rápida e totalmente responsiva para celular, tablet e desktop.

Não utilize React, Node.js, banco de dados, backend, APIs, login, cadastro, formulário ou qualquer funcionalidade que exija processamento no servidor.

O objetivo principal do site é apresentar a barbearia e direcionar o visitante para o WhatsApp. Todos os call to action levam para o Whatsapp

Antes da estrutura do site vou te passar as informacoes do cliente para posteriormente voce colocar

tambem estou enviado imagens para voce utilizar

Nome da empresa: Barbearia Aliança

Localização: Av. Ipanema, 738 - Vila Nova Sorocaba, Sorocaba - SP, 18070-671
Telefone: 15 99131-6832


Estrutura do site:



Header

Logo/nome da barbearia

Menu com:

Início

Serviços

Sobre

Galeria

Avaliações (110 avaliacoes, 4,9 estrelas)

Localização

Botão "Agendar pelo WhatsApp"

Menu responsivo no celular

Hero

Nome da barbearia

Frase de destaque

Pequeno texto comercial

Botão principal "Agendar pelo WhatsApp"

Botão secundário "Ver serviços"

Imagem de destaque

Serviços
Apresentar os principais serviços em cards:

Corte

Barba

Corte + Barba

Acabamento

Outros serviços

Cada serviço de ter o nome, sem preço

Sobre
Criar uma seção curta apresentando a história, experiência e diferencial da barbearia.

Galeria
Criar uma galeria responsiva com fotos da barbearia e dos cortes realizados.

As imagens devem ser otimizadas e utilizar atributo alt.

Avaliações
Criar uma seção visual com avaliações de clientes.

Exemplo:
★★★★★
"Excelente atendimento e profissionais muito bons."

Localização
Mostrar:

endereço

horário de funcionamento (09:00 as 20:00)

telefone 015991316832

botão "Como chegar" direcionando para Google Maps

Não incorporar mapas pesados se não for necessário.

CTA final
Criar uma seção convidando o visitante a agendar.

Botão:
"Agendar pelo WhatsApp"

Footer
Mostrar:

nome da empresa

WhatsApp

Instagram

endereço

copyright

Adicionar também um botão flutuante do WhatsApp durante toda a navegação.

Navegação:

O menu deve utilizar âncoras internas.

Exemplo:

#inicio
#servicos
#sobre
#galeria
#avaliacoes
#localizacao

Ao clicar nos itens do menu, utilizar scroll suave para navegar até a seção correspondente sem abrir outra página.

SEO:

Adicionar SEO técnico básico:

title otimizado

meta description

apenas um H1 principal

utilizar H2 corretamente nas principais seções

textos semanticamente estruturados

atributo alt nas imagens

canonical URL

Open Graph para compartilhamento no WhatsApp, Facebook e redes sociais

meta viewport

favicon preparado

sitemap.xml

robots.txt

Criar também dados estruturados Schema.org utilizando JSON-LD com LocalBusiness ou HairSalon/BarberShop quando apropriado, incluindo:

nome da empresa

telefone

endereço

horário de funcionamento

URL

Instagram

localização

Performance:

Priorizar carregamento rápido.

evitar bibliotecas desnecessárias

evitar frameworks

utilizar JavaScript apenas quando necessário

otimizar imagens

lazy loading nas imagens abaixo da primeira dobra

evitar animações pesadas

evitar vídeos automáticos

evitar elementos que prejudiquem o desempenho no celular

Design:

Criar um design moderno, elegante e profissional para uma barbearia.

Utilizar:

boa hierarquia visual

tipografia moderna

bastante espaço entre os elementos

animações sutis

efeitos hover discretos

transições suaves

aparência premium sem deixar o site pesado

O design deve priorizar principalmente a experiência no celular.

WhatsApp:

Todos os principais CTAs devem direcionar para:

https://wa.me/55NUMERO

Utilizar uma mensagem pré-definida como:

"Olá! Vim pelo site e gostaria de agendar um horário."

Não criar sistema próprio de agendamento.

Arquivos:

Organizar o projeto preferencialmente desta forma:

index.html
style.css
script.js
robots.txt
sitemap.xml
/assets

O código deve ser limpo, organizado e fácil de editar posteriormente.

Não adicionar funcionalidades que não tenham sido solicitadas.

Antes de finalizar, verifique se:

o site funciona corretamente no celular

todos os botões funcionam

o menu navega suavemente entre as seções

não existem links quebrados

não existe formulário

não existe banco de dados

não existe backend

o WhatsApp funciona corretamente

o site possui SEO básico configurado

o site continua leve e rápido

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://alianca-hair-go.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8d415439-2dd6-4d4a-8fa7-bcba437f751e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
