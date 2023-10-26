
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');




  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function gerarIdUnico() {
    const dataHoraAtual = new Date();
    const timestamp = dataHoraAtual.getTime(); // Obtém o timestamp (milissegundos desde 1º de janeiro de 1970)

    // Concatena o timestamp com um número aleatório de 6 dígitos
    const idUnico = `${timestamp}-${Math.floor(100000 + Math.random() * 900000)}`;

    return idUnico;
  }


  // Função para redimensionar a imagem para tamanhos específicos com nomes personalizados e salvar em pastas
  async function redimensionarImagem(urlImagem, tamanhos) {

        try{


            // Carrega a imagem original usando canvas.loadImage
            const imagemOriginal = await loadImage(urlImagem);

            for (let i = 0; i < tamanhos.length; i++) {
              const { largura, altura, nome, pasta } = tamanhos[i];

              // Cria a pasta se não existir
              if (!fs.existsSync(pasta)) {
                fs.mkdirSync(pasta, { recursive: true });
              }

              // Cria um novo canvas para a nova imagem redimensionada
              const canvasRedimensionado = createCanvas(largura, altura);
              const contextoRedimensionado = canvasRedimensionado.getContext('2d');

               // Preenche o canvas com uma cor branca (hexadecimal #FFFFFF)
              contextoRedimensionado.fillStyle = '#FFFFFF';
              contextoRedimensionado.fillRect(0, 0, largura, altura);

              // Redimensiona a imagem no novo canvas
              contextoRedimensionado.drawImage(imagemOriginal, 0, 0, largura, altura);

              // Exporta o novo canvas como uma imagem PNG
              const stream = canvasRedimensionado.createPNGStream();
              const out = fs.createWriteStream(`${pasta}/${gerarIdUnico()}-${largura}x${altura}.png`);

              stream.pipe(out);

              await new Promise((resolve) => {
                out.on('finish', resolve);
              });

              console.log(`Image ${gerarIdUnico()}-${largura}x${altura}.png resized and saved in ${pasta}`);
            }


        }catch(e){
            console.log(e.message);
        }



  }

  // Tamanhos personalizados para redimensionar a imagem (definidos no array)
  const tamanhosPersonalizados = [
    { largura: 1290, altura: 2796, nome: 'iphone6.7', pasta: 'iphone6.7' },
    { largura: 1284, altura: 2778, nome: 'iphone6.5', pasta: 'iphone6.5' },
    { largura: 1242, altura: 2208, nome: 'iphone5.5', pasta: 'iphone5.5' },
    { largura: 2048, altura: 2732, nome: 'ipad-pro12.9 6°ger', pasta: 'ipad-pro12.9 6°ger'},
    { largura: 2048, altura: 2732, nome: 'ipad-pro12.9 2°ger', pasta: 'ipad-pro12.9 2°ger'}
  ];

  // Chama a função para carregar a imagem e redimensioná-la para os tamanhos especificados
  // redimensionarImagem('print3.png', tamanhosPersonalizados);


  readline.question('FileName: ', async (nomeArquivo) => {
    // Chama a função para carregar a imagem e redimensioná-la para os tamanhos especificados
    await redimensionarImagem(nomeArquivo, tamanhosPersonalizados);

    // Fecha a interface readline após a entrada do usuário ser processada
    readline.close();
  });

