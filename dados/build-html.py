import base64, shutil

# Copia o logo para o mesmo diretório com nome amigável
logo_src = "Eleicoes-2020-Veja-a-proposta-dos-candidatos-a-prefeitura-de-Manaus-1024x362.jpg"

html = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Certidão Nº 4789/2021</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #888;
    font-family: "Courier New", Courier, monospace;
    font-size: 12px;
    color: #000;
  }

  .page {
    width: 210mm;
    min-height: 297mm;
    background: #fff;
    margin: 24px auto;
    padding: 11mm 12mm 50mm 12mm;
    position: relative;
    box-shadow: 0 2px 10px rgba(0,0,0,0.4);
    page-break-after: always;
  }

  .page-ref {
    text-align: right;
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-bottom: 14px;
  }

  .logo-img {
    height: 90px;
    width: auto;
  }

  .certidao-block {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    padding-top: 4px;
    margin-left: 18px;
  }

  .certidao-title {
    font-family: "Courier New", Courier, monospace;
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #111;
    line-height: 1;
  }

  .certidao-sup {
    font-family: "Courier New", Courier, monospace;
    font-size: 16px;
    font-weight: 700;
    margin-top: 2px;
    color: #111;
  }

  .certidao-num-box {
    background: transparent;
    color: #f00000;
    font-family: "Courier New", Courier, monospace;
    font-size: 28px;
    font-weight: 700;
    padding: 10px 22px;
    border: 2px solid #000;
    line-height: 1;
    display: flex;
    align-items: center;
  }

  .body {
    font-family: "Courier New", Courier, monospace;
    font-size: 11.5px;
    line-height: 1.38;
    text-align: justify;
  }

  .body p {
    margin-bottom: 7px;
  }

  .section-title {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 2px;
    display: block;
    font-family: "Courier New", Courier, monospace;
    font-size: 11.5px;
  }

  .sub-title {
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 1px;
    display: block;
    font-family: "Courier New", Courier, monospace;
    font-size: 11.5px;
  }

  .assinatura {
    margin-top: 40px;
    line-height: 1.25;
    font-family: "Courier New", Courier, monospace;
    font-size: 11.5px;
  }

  .sig-line {
    display: flex;
    align-items: flex-end;
    line-height: 1;
    margin-bottom: 3px;
    margin-top: 3px;
  }

  .sig-underline {
    flex: 1;
    border-bottom: 1px solid #000;
    padding-bottom: 0;
    line-height: 1;
  }

  .sig-underline-short {
    border-bottom: 1px solid #000;
    padding-right: 100px;
    padding-bottom: 0;
    line-height: 1;
  }

  .fim {
    font-weight: bold;
    text-align: center;
    margin: 12px 0;
    font-family: "Courier New", Courier, monospace;
    font-size: 11.5px;
  }

  .footer-bar {
    position: absolute;
    bottom: 32mm;
    left: 0;
    right: 0;
    background: #1a4080;
    color: #fff;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 9px;
    padding: 5px 10px;
    line-height: 1.6;
  }

  .footer-notes {
    position: absolute;
    bottom: 5mm;
    left: 18mm;
    right: 18mm;
    background: #fff;
    font-family: "Courier New", Courier, monospace;
    font-size: 7.5px;
    font-style: italic;
    line-height: 1.5;
    color: #000;
    border-top: 0.5px solid #999;
    padding-top: 3px;
  }

  @media print {
    body { background: #fff; }
    .page { margin: 0; box-shadow: none; }
    .page:last-child { page-break-after: avoid; }
  }
</style>
</head>
<body>

<!-- PAGINA 1 -->
<div class="page">
  <div class="page-ref">PAG CER: 4789/2021 PÁGINA 59/60</div>

  <div class="header">
    <img class="logo-img" src="Eleicoes-2020-Veja-a-proposta-dos-candidatos-a-prefeitura-de-Manaus-1024x362.jpg" alt="Prefeitura de Manaus">
    <div class="certidao-block">
      <span class="certidao-title">CERTIDÃO</span>
      <span class="certidao-sup">N°</span>
      <span class="certidao-num-box">4789/2021</span>
    </div>
  </div>

  <div class="body">
    <p>
      <b>TIPO DE CERTIDÃO:</b> CERTIDÃO DE INFORMAÇÃO TÉCNICA PARA USO DO SOLO<br>
      <b>EU,</b> ISLANE RODRIGUES DE SOUZA, Gerente - GIT<br>
      <b>CERTIFICO, TENDO EM VISTA AS ATRIBUIÇÕES QUE POR LEI A MIM SÃO CONFERIDAS E DE ACORDO COM
      O PROCESSO PROTOCOLADO N°</b> 4789/2021 DE 25 de maio de 2021<br>
      <b>REQUERIDO POR</b> PETROMOR ALUGUEL DE SALAS E EQUIPAMENTOS LIMITADA<br>
      <b>SITO À</b> AVENIDA ANDRÉ ARAÚJO, nº 2721, ALEIXO, LOTEAMENTO PARQUE, MORADA DO SOL,<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;69060000,<br>
      <b>DE PROPRIEDADE DE</b> RODRIGO DOMENICO PETROSINO
    </p>

    <p>O(a) Interessado(a) solicita CERTIDÃO DE INFORMAÇÃO TÉCNICA PARA USO DO SOLO para o
    endereço acima descrito e conforme preceitua o Plano Diretor Urbano e Ambiental do
    Município de Manaus de 16/01/2014, informamos que:</p>

    <p>
      <b>MATRÍCULA DO IPTU:</b> 129069<br>
      <b>ZONA:</b> SETOR 11 (bairro Aleixo), FAIXA LINDEIRA DO CORREDOR URBANO ALEIXO, &nbsp;SEGMENTO ANDRÉ ARAÚJO.
    </p>

    <span class="section-title">PARÂMETROS PERMITIDOS:</span>
    <p>
      <b>DIRETRIZES:</b> Reforço do centro de comércio e serviços existente; integração &nbsp;de &nbsp;atividades
      comerciais e de serviços ao uso residencial.<br>
      <b>USOS PERMITIDOS:</b> Residencial unifamiliar e multifamiliar; comercial; de serviços;
      industrial.<br>
      <b>ATIVIDADES PERMITIDAS:</b> Tipo 1, Tipo 2, Tipo 3* e Tipo 4* (*exceto para o uso industrial).
    </p>

    <span class="section-title">ATIVIDADE(S) SOLICITADA(S):</span>
    <span class="sub-title">ATIVIDADE PRINCIPAL</span>
    <p>
      CNAE/ATIVIDADE: 821130000 - Serviços combinados de escritório e apoio administrativo<br>
      USO/CLASSIFICAÇÃO: SERVIÇO TIPO 1
    </p>

    <span class="section-title">ATIVIDADE(S) SECUNDÁRIA(S):</span>
    <p>
      ATIVIDADE/CNAE:<br>
      631190001 - Tratamento de dados, provedores de serviços de aplicação e serviços de
      hospedagem na internet<br>
      USO/CLASSIFICAÇÃO: SERVIÇO TIPO 1
    </p>
    <p>
      829970701 - Salas de acesso à internet<br>
      859960400 - Treinamento em desenvolvimento profissional e gerencial<br>
      773310001 - Aluguel de máquinas e equipamentos para escritório<br>
      USO/CLASSIFICAÇÃO: SERVIÇO TIPO 2
    </p>

    <p>ANÁLISE: Permitido</p>

    <p>Observações gerais:</p>
    <p>1. O lote foi definido para USO RESIDENCIAL, estando o mesmo inserido no LOTEAMENTO PARQUE
    MORADA DO SOL, o qual obteve &nbsp;aprovação &nbsp;perante &nbsp;o &nbsp;Município &nbsp;em &nbsp;24 &nbsp;de &nbsp;março &nbsp;de &nbsp;1980,
    conforme demonstrado no base de dados da planta cadastral no ArqGIS;</p>

    <div class="assinatura">
      <div class="sig-line">E PARA CONSTAR EU, <span class="sig-underline">ISLANE RODRIGUES DE SOUZA, Gerente - GIT</span></div>
      DO INSTITUTO MUNICIPAL DE PLANEJAMENTO URBANO &nbsp;- IMPLURB, LAVREI PRESENTE CERTIDÃO, QUE<br>
      <div class="sig-line">VAI POR MIM ASSINADA E PELO(A) FUNCIONÁRIO(A) &nbsp;<span class="sig-underline">RADJA PEREIRA MAR</span></div>
      AOS DIAS DO MÊS DE <span class="sig-underline-short">10 de junho de 2021</span>
    </div>
  </div>

  <div class="footer-bar">
    Instituto Municipal de Planejamento Urbano – IMPLURB<br>
    Av. Brasil, nº 2971 - Compensa (anexo da Prefeitura de Manaus) - CEP 69035-110 - Manaus - Amazonas
  </div>

  <div class="footer-notes">
    Este documento foi assinado digitalmente. Qualquer alteração invalidará o documento.<br>
    Esta(s) assinatura(s) pode(m) ser verificada(s) em: https://fiscal.manaus.am.gov.br/fiscal/servlet/hwpvalidardocassinado (utilize a(s) chave(s) abaixo)<br>
    1 - RADJA PEREIRA MAR. Em: Qui 10/06/2021 13:27:38. Chave para validação: B14M9P.894KDK.W984CG.FGGVK6.FW24A7<br>
    2 - ISLANE RODRIGUES DE SOUZA. Em: Qui 10/06/2021 13:49:55. Chave para validação: EABMJZ.5RWZ5P.4D5JMT.U7XNI7.8JH18Z
  </div>
</div>


<!-- PAGINA 2 -->
<div class="page">
  <div class="page-ref">PAG CER: 4789/2021 PÁGINA 60/60</div>

  <div class="header">
    <img class="logo-img" src="Eleicoes-2020-Veja-a-proposta-dos-candidatos-a-prefeitura-de-Manaus-1024x362.jpg" alt="Prefeitura de Manaus">
    <div class="certidao-block">
      <span class="certidao-title">CERTIDÃO</span>
      <span class="certidao-sup">N°</span>
      <span class="certidao-num-box">4789/2021</span>
    </div>
  </div>

  <div class="body">
    <p>2. Nos termos da nova Lei Complementar de N° 012, de 17 de janeiro de 2019, § 4.° que diz:
    Nos casos de alterações de uso para as atividades Tipo 1 e 2, localizadas &nbsp;em &nbsp;loteamentos
    aprovados, necessitarão somente dos requisitos previstos no artigo 91 da LC 002, de &nbsp;14 &nbsp;de
    janeiro de 2014, não sendo necessário &nbsp;aprovação &nbsp;prévia &nbsp;pelo &nbsp;CMDU &nbsp;e &nbsp;CTPCU, &nbsp;o &nbsp;pleito
    torna-se VIÁVEL;</p>

    <p>3. De acordo com o Art. 96 § 4° da LC n° 014, de 17 de janeiro de 2019, por se &nbsp;tratar &nbsp;de
    um imóvel limítrofe a uma via caracterizada como CORREDOR URBANO, não cabendo &nbsp;a &nbsp;aplicação
    da cobrança da Outorga Onerosa de Alteração de Uso &nbsp;do &nbsp;Solo &nbsp;uma &nbsp;vez &nbsp;que &nbsp;trata &nbsp;de &nbsp;uma
    empresa de pequeno porte - EPP, ficando ISENTA do referido pagamento;</p>

    <p>4. Deverá obedecer ao número de Vagas apresentadas para as &nbsp;atividades &nbsp;pleiteadas &nbsp;acima,
    sendo 05 (vagas) vagas para estacionamento devidamente demarcadas, &nbsp;sem &nbsp;obstrução &nbsp;do
    logradouro público, conforme disposto no &nbsp;Anexo &nbsp;IX &nbsp;- &nbsp;QUADRO &nbsp;DAS &nbsp;VAGAS &nbsp;DE &nbsp;GARAGEM &nbsp;E
    ESTACIONAMENTO, da Lei 2.402 de 16/01/2019;</p>

    <p>5. Caso sejam constatados usos &nbsp;e/ou &nbsp;atividades &nbsp;diferentes &nbsp;destes &nbsp;autorizados &nbsp;e &nbsp;não
    permitidos para o local e/ou ampliações sem prévia aprovação, &nbsp;a &nbsp;presente &nbsp;certidão &nbsp;será
    automaticamente cancelada;</p>

    <p>6. Deverão ser obedecidos os parâmetros das leis complementares n° 002, &nbsp;003, &nbsp;&nbsp;004, &nbsp;&nbsp;005 &nbsp;e
    das leis n° 1.837, 1.838 e 1.839, de 16 de janeiro de &nbsp;2014 &nbsp;do &nbsp;plano &nbsp;diretor &nbsp;urbano &nbsp;e
    ambiental do município de Manaus;</p>

    <p>7. Esta certidão não garante o &nbsp;direito &nbsp;de &nbsp;construir, &nbsp;conforme &nbsp;disposto &nbsp;do &nbsp;parágrafo único,
    do artigo 14 da lei complementar n° 003/2014, não substitui &nbsp;o &nbsp;habite-se, &nbsp;bem &nbsp;como &nbsp;não
    reconhece direitos de propriedade;</p>

    <p>8. Esta certidão não garante o &nbsp;direito &nbsp;de &nbsp;funcionamento, &nbsp;conforme &nbsp;artigo &nbsp;9° &nbsp;da &nbsp;lei
    complementar n°005/2014, o funcionamento de qualquer estabelecimento comercial, &nbsp;industrial
    ou prestador de serviços, sem a necessária licença ou autorização, &nbsp;consiste &nbsp;em &nbsp;infração
    grave a referida lei, cabendo a fiscalização ao &nbsp;órgão &nbsp;licenciador &nbsp;das &nbsp;atividades
    econômicas do município;</p>

    <p>9. Nos cursos d'água localizados na área urbana e de &nbsp;transição, &nbsp;será &nbsp;adotada &nbsp;faixa &nbsp;de
    proteção marginal de acordo com a legislação vigente;</p>

    <p>10. Todo imóvel inserido, ainda que parcialmente, &nbsp;nos &nbsp;limites &nbsp;de &nbsp;área &nbsp;de &nbsp;preservação
    permanente APP, conforme lei federal &nbsp;n° &nbsp;12.651/2012 &nbsp;de &nbsp;25 &nbsp;de &nbsp;maio &nbsp;de &nbsp;2012, &nbsp;deverá
    formalizar processo de avaliação junto ao órgão ambiental municipal &nbsp;ou &nbsp;estadual, &nbsp;para &nbsp;a
    possibilidade de obtenção de autorização específica;</p>

    <p>11. Deverá ser mantido livre e desimpedido o passeio público, conforme disposto do &nbsp;inciso
    i, do artigo 83 da lei complementar n° 003/2014 e do artigo &nbsp;38 &nbsp;da &nbsp;lei &nbsp;complementar &nbsp;n°
    005/2014 e havendo geração de transtornos ao entorno, a presente certidão será cancelada;</p>

    <p>12. Deverá atender ao parágrafo único do art. &nbsp;82 &nbsp;da &nbsp;lei &nbsp;n° &nbsp;1.838/2014, &nbsp;seção &nbsp;ii &nbsp;dos
    critérios e parâmetro para garagens e estacionamentos;</p>

    <p>13. Deverá atender &nbsp;ao &nbsp;art.79 &nbsp;da &nbsp;lei &nbsp;n° &nbsp;003/2014, &nbsp;subseção &nbsp;ii &nbsp;das &nbsp;garagens &nbsp;e
    estacionamentos para guarda de veículos;</p>

    <p>14. Deverá atender ao Anexo IX - QUADRO DAS VAGAS DE &nbsp;GARAGEM &nbsp;E &nbsp;ESTACIONAMENTO, &nbsp;da &nbsp;Lei
    2.402 de 16/01/2019.</p>

    <p>ESTAS INFORMAÇÕES NÃO PERDERÃO A VALIDADE, SALVO NO CASO &nbsp;DE &nbsp;ALTERAÇÃO &nbsp;SUPERVENIENTE &nbsp;DA
    LEGISLAÇÃO APLICÁVEL, CONFORME PARÁGRAFO ÚNICO DO ARTIGO 14 DA LEI COMPLEMENTAR N° 003 &nbsp;DE
    16 DE JANEIRO DE 2014.</p>

    <p class="fim">*---------------------------------- FIM DESCRIÇÃO ----------------------------------*</p>

    <div class="assinatura">
      <div class="sig-line">E PARA CONSTAR EU, <span class="sig-underline">ISLANE RODRIGUES DE SOUZA, Gerente - GIT</span></div>
      DO INSTITUTO MUNICIPAL DE PLANEJAMENTO URBANO &nbsp;- IMPLURB, LAVREI PRESENTE CERTIDÃO, QUE<br>
      <div class="sig-line">VAI POR MIM ASSINADA E PELO(A) FUNCIONÁRIO(A) &nbsp;<span class="sig-underline">RADJA PEREIRA MAR</span></div>
      AOS DIAS DO MÊS DE <span class="sig-underline-short">10 de junho de 2021</span>
    </div>
  </div>

  <div class="footer-bar">
    Instituto Municipal de Planejamento Urbano – IMPLURB<br>
    Av. Brasil, nº 2971 - Compensa (anexo da Prefeitura de Manaus) - CEP 69035-110 - Manaus - Amazonas
  </div>

  <div class="footer-notes">
    Este documento foi assinado digitalmente. Qualquer alteração invalidará o documento.<br>
    Esta(s) assinatura(s) pode(m) ser verificada(s) em: https://fiscal.manaus.am.gov.br/fiscal/servlet/hwpvalidardocassinado (utilize a(s) chave(s) abaixo)<br>
    1 - RADJA PEREIRA MAR. Em: Qui 10/06/2021 13:27:38. Chave para validação: B14M9P.894KDK.W984CG.FGGVK6.FW24A7<br>
    2 - ISLANE RODRIGUES DE SOUZA. Em: Qui 10/06/2021 13:49:55. Chave para validação: EABMJZ.5RWZ5P.4D5JMT.U7XNI7.8JH18Z
  </div>
</div>

</body>
</html>"""

with open('c:/Users/kalid/Downloads/KalidCarvalho-os/dados/certidao-template.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('done -', len(html), 'chars')
