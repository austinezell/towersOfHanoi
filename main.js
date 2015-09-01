$(document).ready(init);

function init(){
  var heldPiece = '';
  var win = false;
  var turns = 0
  var $turns = $('#turns')
  var $winningPieceContainerLength = $('#tower3 .pieceContainer').children().length;
  $('.tower').on('click', function(){
    if(!win){
      var $selectedTower = $(this)
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
        turns++
        $turns.text('Turns used: '+ turns)
        haveWon($winningPieceContainerLength);
      }else {
        $("body").fadeOut(100).fadeIn(100);
      }
    }
    function haveWon(length){
      if (length === 5){
        win = true;
        $('#winMessage').text('YOU WIN!!');
      }
    }
  })
}
