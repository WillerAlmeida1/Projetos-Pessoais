import $ from 'jquery';

$.fn.extend({
  novaFuncao() {
    console.log('Chamou Nova Funcao');
  }
});

$('body').novaFuncao();