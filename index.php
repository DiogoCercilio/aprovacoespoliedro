<?php require('includes/dados.php');?>
<!DOCTYPE html>
<html lang="pt-br" ng-app>
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Poliedro Aprovações - Histórico dos aprovados do Sistema Poliedro</title>
    <link rel="stylesheet" href="library/css/main.css">
    <script src="http://www.sistemapoliedro.com.br/cdn/modernizr/modernizr.js"></script> 
    <script src="http://www.sistemapoliedro.com.br/cdn/jquery/jquery.min.js"></script>    
</head>
<body>
    <nav class="wrapper-nav-top"> 
        <ul class="nav-top">
          <li><a href="#" class="active" data-goto="home">Home</a></li>
          <li><a href="#" data-goto="historico">Histórico</a></li>
          <li><a href="#" data-goto="ita">Aprovados</a></li>
          <li><a href="#" data-goto="depoimentos">Depoimentos</a></li>
          <li><a href="#" data-goto="depoimentos">Cursos</a></li>
          <li><a href="#" data-goto="depoimentos">Resoluções</a></li>
          <li><a href="#" data-goto="depoimentos">Contato</a></li>
          <!-- <li><a href="#" data-goto="medicina">Medicina</a></li> -->
          <!-- <li><a href="#" data-goto="engenharia">Engenharia</a></li> -->
          <!-- <li><a href="#" data-goto="humanas">Humanas</a></li> -->
          <!-- <li><a href="#" data-goto="biologicas">Biológicas</a></li> -->
        </ul>

        <select class="nav-mobile" onchange="navMobile(this.options[this.selectedIndex].value)">
          <option value="home">Home</option>
          <option value="depoimentos">Depoimentos</option>
          <option value="ita">Ita</option>
          <option value="medicina">Medicina</option>
          <option value="engenharia">Engenharia</option>
          <option value="humanas">Humanas</option>
          <option value="biologicas">Biológicas</option>
        </select>
    </nav>

    <section id="home" class="bgParallax" data-speed="5">
        <article>
            <img class="logo" src="library/img/logo.png" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aliquid recusandae iure rem consectetur earum asperiores blanditiis.</p>

            <ul class="home-buttons">
                <li><div><strong id="teacher">35</strong> Professores</div></li>
                <li><div><strong id="class-room">10</strong> Salas de Aula</div></li>
                <li><div><strong id="hours">450</strong> Horas</div></li>
                <li><div><strong id="cicles">5</strong> Ciclos de Simulados</div></li>
                <li><div><strong id="approved">3065</strong> Aprovados</div></li>
            </ul>
        </article>
    </section>

  <section id="depoimentos" class="bgParallax" data-speed="15" style="min-height:400px!important;"> 
<!--         <div id="da-slider" class="da-slider">
              <div class="da-slide">
                    <h2>Slider One</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quis autem, facilis facere ex modi reiciendis rem iure nulla earum animi illum ea officiis, veritatis corporis itaque. Nesciunt necessitatibus, amet autem sit blanditiis praesentium! Ducimus culpa debitis, pariatur error voluptates.</p>
                    <a href="http://www.youtube.com/watch?v=0NKUpo_xKyQ" rel="modal" class="da-link">Assista o Vídeo</a>
                    <div class="da-img"><img src="library/img/aluno-1.png" alt="image01" /></div>
              </div>

              <div class="da-slide">
                    <h2>Slider Two</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi debitis, sed maxime culpa expedita alias facere? Impedit quod dolores debitis quis, nostrum at, hic corporis vero, vel, quibusdam sint totam sed est voluptatum adipisci possimus quae. Mollitia, quis tempore nobis.</p>
                    <a href="http://www.youtube.com/watch?v=0NKUpo_xKyQ" rel="modal" class="da-link">Assista o Vídeo</a>
                    <div class="da-img"><img src="library/img/aluno-2.png" alt="image01" /></div>
              </div>

              <nav class="da-arrows">
                  <span class="da-arrows-prev"></span>
                  <span class="da-arrows-next"></span>
              </nav>
        </div>  -->    

      <div class="clear"></div>

        <section class="pe-container">
            <ul id="pe-thumbs" class="pe-thumbs" ng-controller="MainCtrl">
                <li ng-repeat="aprovado in aprovados">
                    <a href="#"><img src="library/img/thumbs/{{aprovado.image}}"><div class="pe-description"><h3>{{aprovado.title}}</h3><p>{{aprovado.description}}</p></div></a>
                </li>
            </ul>

            <div class="depoimentos-content">
                <h1>Os Primeiros Colocados</h1><hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos labore, porro nihil. Mollitia odit, consequatur at nihil esse tempore modi! Ullam, obcaecati, debitis. Quidem debitis tempore nisi tenetur animi quisquam.</p>
            </div>
        </section>
  </section>

  <section id="ita" class="bgParallax" data-speed="45">
       <article>
            <div class='carousel_container' id="first-carrousel">
                <h1>ITA 2014</h1><hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi reiciendis voluptates corrupti, soluta harum fugiat! Deserunt soluta assumenda molestiae accusamus sapiente cumque similique sunt recusandae commodi nulla sequi minima animi maiores quod id tempora pariatur, eos rem iste praesentium amet, harum nam impedit, est cupiditate. Omnis quasi reprehenderit reiciendis doloribus officiis incidunt itaque culpa quisquam numquam sapiente blanditiis laudantium, aut! Pariatur consequatur alias hic modi deserunt ea numquam sequi doloremque dignissimos blanditiis recusandae delectus cumque, error repellendus quaerat laudantium obcaecati, mollitia eaque possimus eum sed. Vel magnam excepturi harum nobis accusamus nam at quos, accusantium nesciunt eos voluptatibus, consequuntur.</p>     

                <div class='carousel_inner'>
                    <ul class='carousel_ul' ng-controller="CarrouselControllerIta">
                      <li  ng-repeat="aprovacao in ita">
                          <h3>{{ aprovacao.qtdeAprovado }}</h3>
                          <span>{{aprovacao.nomeFaculdade}}</span><br/>
                          <h6>{{aprovacao.nomeCurso}}</h6>
                      </li>
                    </ul>
                    <div class="clear"></div>
                </div>
                <div class='right_scroll'>></div>
                <div class='left_scroll'><</div>

            </div>

            <div class="clear"></div>                               
       </article>
  </section>

  <section id="medicina" class="bgParallax" style="background:#f4f4f4;">
       <article>
          <div class='carousel_container' id="second-carrousel">
            <h1>MEDICINA 2014</h1><hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi reiciendis voluptates corrupti, soluta harum fugiat! Deserunt soluta assumenda molestiae accusamus sapiente cumque similique sunt recusandae commodi nulla sequi minima animi maiores quod id tempora pariatur, eos rem iste praesentium amet, harum nam impedit, est cupiditate. Omnis quasi reprehenderit reiciendis doloribus officiis incidunt itaque culpa quisquam numquam sapiente blanditiis laudantium, aut! Pariatur consequatur alias hic modi deserunt ea numquam sequi doloremque dignissimos blanditiis recusandae delectus cumque, error repellendus quaerat laudantium obcaecati, mollitia eaque possimus eum sed. Vel magnam excepturi harum nobis accusamus nam at quos, accusantium nesciunt eos voluptatibus, consequuntur.</p>            
              <div class='carousel_inner'>
                    <ul class='carousel_ul' ng-controller="CarrouselControllerMedicina">
                      <li  ng-repeat="aprovacao in medicina">
                          <h3>{{ aprovacao.qtdeAprovado }}</h3>
                          <span>{{aprovacao.nomeFaculdade}}</span><br/>
                          <h6>{{aprovacao.nomeCurso}}</h6>
                      </li>
                    </ul>                
                  <div class="clear"></div>
              </div>
              <div class='right_scroll'>></div>
              <div class='left_scroll'><</div>

          </div>

          <div class="clear"></div>
       </article>
  </section>

  <section id="engenharia" class="bgParallax">
       <article>
            <div class='carousel_container' id="third-carrousel">
              <h1>ENGENHARIA 2014</h1><hr/>
              <p>Pariatur consequatur alias hic modi deserunt ea numquam sequi doloremque dignissimos blanditiis recusandae delectus cumque, error repellendus quaerat laudantium obcaecati, mollitia eaque possimus eum sed. Vel magnam excepturi harum nobis accusamus nam at quos, accusantium nesciunt eos voluptatibus, consequuntur.</p>          
                <div class='carousel_inner'>
                      <ul class='carousel_ul' ng-controller="CarrouselControllerEngenharia">
                        <li  ng-repeat="aprovacao in engenharia">
                            <h3>{{ aprovacao.qtdeAprovado }}</h3>
                            <span>{{aprovacao.nomeFaculdade}}</span><br/>
                            <h6>{{aprovacao.nomeCurso}}</h6>
                        </li>
                      </ul> 
                    <div class="clear"></div>
                </div>
                <div class='right_scroll'>></div>
                <div class='left_scroll'><</div>
            </div>
       </article>
  </section>  
  <section id="humanas" class="bgParallax" style="background:#f4f4f4">
       <article>
            <div class='carousel_container' id="fourth-carrousel">
                <h1>HUMANAS 2014</h1><hr/>
                <p>Omnis quasi reprehenderit reiciendis doloribus officiis incidunt itaque culpa quisquam numquam sapiente blanditiis laudantium, aut! Pariatur consequatur alias hic modi deserunt ea numquam sequi doloremque dignissimos blanditiis recusandae delectus</p><p>cumque, error repellendus quaerat laudantium obcaecati, mollitia eaque possimus eum sed. Vel magnam excepturi harum nobis accusamus nam at quos, accusantium nesciunt eos voluptatibus, consequuntur.</p>
                  <div class='carousel_inner'>
                        <ul class='carousel_ul' ng-controller="CarrouselControllerHumanas">
                          <li  ng-repeat="aprovacao in humanas">
                              <h3>{{ aprovacao.qtdeAprovado }}</h3>
                              <span>{{aprovacao.nomeFaculdade}}</span><br/>
                              <h6>{{aprovacao.nomeCurso}}</h6>
                          </li>
                        </ul> 
                      <div class="clear"></div>
                  </div>
                  <div class='right_scroll'>></div>
                  <div class='left_scroll'><</div>
            </div>
       </article>
  </section>  
  <section id="biologicas" class="bgParallax">
       <article>
          <div class='carousel_container' id="fifth-carrousel">
                <h1>BIOLÓGICAS 2014</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi reiciendis voluptates corrupti, soluta harum fugiat!.</p>          <hr/>
                  <div class='carousel_inner'>
                      <ul class='carousel_ul' ng-controller="CarrouselControllerBiologicas">
                        <li  ng-repeat="aprovacao in biologicas">
                            <h3>{{ aprovacao.qtdeAprovado }}</h3>
                            <span>{{aprovacao.nomeFaculdade}}</span><br/>
                            <h6>{{aprovacao.nomeCurso}}</h6>                            
                        </li>
                      </ul> 
                    <div class="clear"></div>
                  </div>
                <div class='right_scroll'>></div>
                <div class='left_scroll'><</div>
          </div> 
       </article>
  </section>
  
  <div class="box-carrousel" id="box-one">
      <div class="close-box">fechar</div>
      <h1>Aprovados ITA</h1>
      <div ng-init="estudantesIta = <?php echo $aprovados_ita; ?>"></div>

      <label>Pesquisar</label>
      <input ng-model="searchIta.$" placeholder="Digite o nome do aluno ou nome da Unidade">
      
      <table>
          <thead>
            <tr><td>Nome do Aprovado</td><td>Unidade</td></tr>
          </thead>
          <tbody>
            <tr ng-repeat="estudanteIta in estudantesIta | filter:searchIta">
              <td>{{estudanteIta.nome}}</td><td>{{estudanteIta.unidade}}</td>
            </tr>
          </tbody>
      </table>
  </div>

  <div class="box-carrousel" id="box-two">
      <div class="close-box">fechar</div>
      <h1>Aprovados MEDICINA</h1>
      <div ng-init="estudantesMedicina = <?php echo $aprovados_medicina; ?>"></div>

      <label>Pesquisar</label>
      <input ng-model="searchMedicina.$" placeholder="Digite o nome do aluno ou nome da Unidade">
      
      <table>
          <thead>
            <tr><td>Nome do Aprovado</td><td>Unidade</td></tr>
          </thead>
          <tbody>
            <tr ng-repeat="estudanteMedicina in estudantesMedicina | filter:searchMedicina">
              <td>{{estudanteMedicina.nome}}</td><td>{{estudanteMedicina.unidade}}</td>
            </tr>
          </tbody>
      </table>
  </div>

  <div class="box-carrousel" id="box-three">
      <div class="close-box">fechar</div>
      <h1>Aprovados ENGENHARIA</h1>
      <div ng-init="estudantesEngenharia = <?php echo $aprovados_engenharia; ?>"></div>

      <label>Pesquisar</label>
      <input ng-model="searchEngenharia.$" placeholder="Digite o nome do aluno ou nome da Unidade">
      
      <table>
          <thead>
            <tr><td>Nome do Aprovado</td><td>Unidade</td></tr>
          </thead>
          <tbody>
            <tr ng-repeat="estudanteEngenharia in estudantesEngenharia | filter:searchEngenharia">
              <td>{{estudanteEngenharia.nome}}</td><td>{{estudanteEngenharia.unidade}}</td>
            </tr>
          </tbody>
      </table>
  </div>

  <div class="box-carrousel" id="box-four">
      <div class="close-box">fechar</div>
      <h1>Aprovados HUMANAS</h1>
      <div ng-init="estudantesHumanas = <?php echo $aprovados_humanas; ?>"></div>

      <label>Pesquisar</label>
      <input ng-model="searchHumanas.$" placeholder="Digite o nome do aluno ou nome da Unidade">
      
      <table>
          <thead>
            <tr>
              <td>Nome do Aprovado</td><td>Unidade</td>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="estudanteHumanas in estudantesHumanas | filter:searchHumanas">
              <td>{{estudanteHumanas.nome}}</td><td>{{estudanteHumanas.unidade}}</td>
            </tr>
          </tbody>
      </table>
  </div>      

    <div class="box-carrousel" id="box-five">
      <div class="close-box">fechar</div>
      <h1>Aprovados BIOLÓGICAS</h1>
      <div ng-init="estudantesBiologicas = <?php echo $aprovados_biologicas; ?>"></div>

      <label>Pesquisar</label>
      <input ng-model="searchBiologicas.$" placeholder="Digite o nome do aluno ou nome da Unidade">
      
      <table>
          <thead>
            <tr><td>Nome do Aprovado</td><td>Unidade</td></tr>
          </thead>
          <tbody>
            <tr ng-repeat="estudanteBiologica in estudantesBiologicas | filter:searchBiologicas">
              <td>{{estudanteBiologica.nome}}</td><td>{{estudanteBiologica.unidade}}</td>
            </tr>
          </tbody>
      </table>
  </div>
  
  <footer>
    <div class="inside"></div>
  </footer>
  	  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js"></script>
      <script src="library/js/jquery.cslider.js"></script>  
      <script src="library/js/jquery.proximity.js"></script>
      <script src="library/js/app.js"></script>    
      <script src="library/js/main.js"></script>  
</body>
</html>