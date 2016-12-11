/**
 * @author contact: lkcsgaspar@gmail.com
 */

function detectCopypaste() {
  $('html').bind('copy paste drop', function(e) {
    alert("Please do not copy or paste anything on this page.");
    e.preventDefault();
  });
}

$(document).ready(function() {
  detectCopypaste();
});
