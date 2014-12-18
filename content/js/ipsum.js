$(document).ready(function(){

  $("#ipsum-form").submit(function() { 
    var chosen_button = $("#ipsum-form input[name='choice']:checked").val();
    var words = ["que ladaia", "tu ta ladaiando", "ladaiera", "é uma ladaia tá ligado", "to ladaiado"];

    if (chosen_button == "phrase") 
    {
      //choose phrase
      var phrase = '';
      var x = Math.floor((Math.random() * words.length) + 0);
      
      phrase += '<p>' + words[x] + '</p>';
      $("#print-paragraphs").empty().html(phrase).fadeIn();;

      console.log(phrase);

      return false;
    }
    else
    {
      //choose paragraphs
      var paragraphs = '';
      var paragraph_number = $("#paragraph_count").val();
      var sentence_number = Math.floor( (Math.random()+2) * 2 );

      for ( var z = 0; z < paragraph_number; z++ ) 
      {
        var sentence_group = '';

        for ( var y = 0; y < sentence_number; y++ ) 
        {
          for ( var x = 0; x < words.length; x++ ) 
          {
            var words_random = fisherYates(words);
            var sentence = words_random.toString().replace(/,/g, ' ') + '. ';
            var sentence_capped = capitalizeFirstLetter(sentence);
          }

          sentence_group += sentence_capped;
        }

        paragraphs+='<p>' + sentence_group + '</p>';
      }

      $("#print-paragraphs").empty().html(paragraphs).fadeIn();

      return false;
      }
  });

  function fisherYates(words) {
    var i = words.length, j, tempi, tempj;

    if ( i == 0 ) 
      return false;
    
    while ( --i ) 
    {
      j = Math.floor( Math.random() * ( i + 1 ) );
      tempi = words[i];
      tempj = words[j];
      words[i] = tempj;
      words[j] = tempi;
    }

    return words;
  }

  function capitalizeFirstLetter(string) 
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

});