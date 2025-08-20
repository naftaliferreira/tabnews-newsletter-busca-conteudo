# TabNews Newsletter

Este projeto é uma aplicação web construída com **Next.js** e **Tailwind CSS** que atua como uma newsletter dinâmica, consumindo a API pública do TabNews para exibir e filtrar conteúdos.

A aplicação foi desenvolvida como um MVP (Mínimo Produto Viável) para demonstrar a busca de dados do lado do servidor (Server Components) e a interatividade do lado do cliente (Client Components) com React.

## Tecnologias

- **Next.js 14+**: Framework React para aplicações com renderização do lado do servidor e estática.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **TypeScript**: Linguagem para tipagem estática.

## Como Executar o Projeto

Para rodar a aplicação localmente, siga os seguintes passos:

1.  Clone este repositório:
    ```bash
    git clone [https://www.dio.me/articles/enviando-seu-projeto-para-o-github](https://www.dio.me/articles/enviando-seu-projeto-para-o-github)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd tabnews-newsletter
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:3000`.

## Funcionalidades Atuais

- **Busca Dinâmica**: Uma barra de pesquisa permite ao usuário filtrar posts em tempo real por palavra-chave, procurando tanto no título quanto no corpo do conteúdo.
- **Consumo de API**: A aplicação faz uma requisição eficiente à API do TabNews para obter os posts mais recentes.
- **Design Responsivo**: O layout se adapta a diferentes tamanhos de tela (desktop, tablet, celular) graças ao Tailwind CSS.

---

## Features Futuras

Para que a aplicação se torne uma newsletter completa e robusta, as seguintes funcionalidades estão planejadas para futuras iterações:

### 1. Paginação e Carregamento Infinito
Adicionar um sistema de paginação ou `infinite scroll` para permitir que o usuário explore todos os posts disponíveis, carregando mais conteúdos da API conforme avança na página.

### 2. Filtro e Ordenação Avançada
Adicionar opções de filtro por categoria (`Relevantes`, `Recentes`) e ordenação por critérios como número de visualizações, comentários ou data de publicação.

### 3. Exibição de Conteúdo
Em vez de redirecionar o usuário, criar uma rota dinâmica (`/posts/[slug]`) que exiba o conteúdo completo de um post dentro da própria aplicação.

### 4. Salvar Posts Favoritos
Permitir que os usuários salvem posts de interesse. Essa funcionalidade poderia utilizar o `localStorage` para persistência de dados.

### 5. Formulário de Inscrição
Implementar um formulário para coletar endereços de e-mail e integrá-lo a um serviço de newsletter (como o Mailchimp ou Mailjet), permitindo que os usuários recebam atualizações por e-mail.

---

Ao clonar o projeto para o seu repositório, não se esqueça de substituir o `https://www.dio.me/articles/enviando-seu-projeto-para-o-github` pelo endereço correto do GitHub.

Com esta documentação, o seu projeto fica mais profissional e fácil para outros desenvolvedores (ou para você mesmo no futuro) entenderem rapidamente o seu propósito e as próximas etapas.

Podemos considerar este projeto finalizado, ou você gostaria de começar a implementar alguma das "Features Futuras"?