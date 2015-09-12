$(document).ready(init);

function init(){
  var heldPiece = '';
  var win = false;
  var turns = 0
  var $turns = $('#turns')
  $('.tower').on('click', function(){
    if(!win){

      var $selectedTower = $(this);
      if (!heldPiece){
        var $selectedPiece = $selectedTower.find('.piece').first();
        heldPiece =$selectedPiece.clone();
        $selectedPiece.remove();
      }else{
        testMovement($selectedTower);
      }
    }

    function testMovement(selectedTower){
      var $currentVal = heldPiece.data('id');
      var $stackVal = selectedTower.find('.piece').first().data('id');
      if ($currentVal > $stackVal || $stackVal === undefined){
        selectedTower.find('.pieceContainer').prepend(heldPiece);
        heldPiece = '';
        turns++;
        $turns.text('Turns used: '+ turns);
      }else {
        $("body").fadeOut(100).fadeIn(100);
      }
        var $winningPieceContainerLength = $('#tower3 .pieceContainer').children().length;
        haveWon($winningPieceContainerLength);
    }
    function haveWon(length){
      console.log(length);
      if (length === 6){
        win = true;
        $('#pieceContainer1').css("background-image", "url(winScenario.gif)")
        $('#winMessage').text('YOU WIN!!');
      }
    }
  })
}
