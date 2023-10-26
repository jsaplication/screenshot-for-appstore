# Redimensionador de Telas para iOS App Store (screenshot for IOS AppStore)

Este script Node.js permite redimensionar imagens para os tamanhos exigidos pela App Store da Apple para iPhones e iPads. O código utiliza a biblioteca `canvas` para manipular imagens e `fs` para operações de sistema de arquivos.

## Funcionalidades

- Redimensiona imagens para os tamanhos necessários para a App Store da Apple.
- Remove a transparência das imagens e aplica um fundo branco.
- Permite redimensionar imagens para diferentes tamanhos específicos.
- Gera nomes de arquivo únicos para as imagens redimensionadas.

## Como Usar

1. **Pré-requisitos:**
   - Certifique-se de ter o Node.js instalado no seu sistema.
   - Instale as dependências do projeto usando `npm install`.

2. **Execução:**
   - Para redimensionar uma imagem, execute o script `app.js` e forneça o nome do arquivo como argumento da linha de comando:

     ```bash
     node app.js
     FileName: exemplo.png
     ```

   - O script também pode solicitar o nome do arquivo durante a execução, se nenhum argumento for fornecido.

3. **Tamanhos Personalizados:**
   - Você pode editar a matriz `tamanhosPersonalizados` no código para adicionar tamanhos específicos para os quais deseja redimensionar as imagens.

## Exemplo de Uso

Redimensionar a imagem `exemplo.png` para os tamanhos da App Store:

```bash
node app.js
FileName: exemplo.png
```


[Link PlayStore gamer](https://play.google.com/store/apps/details?id=com.acerte.js&hl=pt_BR&gl=US)
