```
SSR -> Server Side Rendering
As coisas estão sendo geradas do lado do servidor

CSR -> Client Side Rendering
É renderizado do lado do cliente, no navegador

Static / SSG <- Tenho o HTML pronto, então não busca nada no servidor
Significa que você tem uma página estática, mas pode se tornar um problema
porque ela não atualiza se estiver mal configurada. Por isso o uso do cash

Dynamic <- Não tenho nada pronto
Busca no servidor, base de dados, html, renderiza as partes necessárias e
monta a página no cliente.

ISR <- Incremental Static Regeneration
É a combinação de SSG com Dynamic. É possível ter uma página que na build,
você gere a página de forma estática, mas depois de um determinado tempo,
ela tenha o contéudo atualizado, salvar no cash, e entregar para os próximos
clientes a página do cash.

Outro caso: depois que for atualizado algum conteúdo, ela atualiza.

Rotas
/ (Pública)
/post/[slug] (Pública)

/admin/post (Privado - Dynamic) - Ler (R) Lista de posts / (D) Delete
/admin/post/[id] (Privado - Dynamic) - Atualizar um post (U)
/admin/post/new (Privado - Dynamic) - Criar um post (C)

/admin/login (Dynamic) - Fazer login do usuário
```
