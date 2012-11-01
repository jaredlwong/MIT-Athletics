var page = require('webpage').create();
page.open('http://www.mitathletics.com/landing/index', function () {
  var data = page.evaluate(function() {
      var box = document.getElementById('tabs-rcol-content1');
      var upcoming = box.querySelectorAll('div.upcoming div.boxscore');

      text = '';
      for(var i = 0; i < upcoming.length; ++i) {
          var tmp = upcoming[i].innerText.replace(/(\r\n|\n|\r| \r\n| \n| \r|\r\n |\n |\r )/gm,' ') + '\n';

          tmp = tmp.replace(/[aA]\.?[mM]\.?/gm,'am');
          tmp = tmp.replace(/[pP]\.?[mM]\.?/gm,'pm');
          tmp = tmp.replace(/ *\| video *$/igm,'');
          tmp = tmp.replace(/ *live stats *$/igm,'');
          text += tmp;
      }

      return text;
  });
  console.log(data);
  phantom.exit();
});
