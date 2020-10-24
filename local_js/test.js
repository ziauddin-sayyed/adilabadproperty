var variables =["val","#stampValue","input[name=purchaseType]:checked","$","text","#returnStamp","test","",".","split","length","$1",",","$2","replace","submit","bind","#stampCalc"];

function stampDCalculator() {
  if (checkNumericStamp($(variables[1])[variables[0]]()) === true) {
    var _0xb00dx2 = $(variables[1])[variables[0]]();
    var _0xb00dx3 = $(variables[2])[variables[0]]();
  } else {
    var _0xb00dx2 = 250000;
    $(variables[1])[variables[0]](250000);
  };
  if (_0xb00dx3 == 0) {
    if (_0xb00dx2 < 5000) {
      var _0xb00dx4 = 0;
    } else {
      if ((_0xb00dx2 >= 5000) && (_0xb00dx2 < 75000)) {
        var _0xb00dx4 = eval(((_0xb00dx2 - 5000) / 100) * 1.50);
      } else {
        if ((_0xb00dx2 >= 75000) && (_0xb00dx2 < 540000)) {
          var _0xb00dx4 = eval((((_0xb00dx2 - 75000) / 100) * 3.50) + 1050);
        } else {
          if ((_0xb00dx2 >= 540000) && (_0xb00dx2 < 1000000)) {
            var _0xb00dx4 = eval((((_0xb00dx2 - 540000) / 100) * 4.50) + 17325);
          } else {
            var _0xb00dx4 = eval((((_0xb00dx2 - 1000000) / 100) * 5.75) + 38025);
          };
        };
      };
    };
  } else {
    if (_0xb00dx2 < 350000) {
      var _0xb00dx4 = eval((_0xb00dx2 / 100) * 1);
    } else {
      if ((_0xb00dx2 >= 350000) && (_0xb00dx2 < 540000)) {
        var _0xb00dx4 = eval((((_0xb00dx2 - 350000) / 100) * 3.50) + 3500);
      } else {
        if ((_0xb00dx2 >= 540000) && (_0xb00dx2 < 1000000)) {
          var _0xb00dx4 = eval((((_0xb00dx2 - 540000) / 100) * 4.50) + 10150);
        } else {
          var _0xb00dx4 = eval((((_0xb00dx2 - 1000000) / 100) * 5.75) + 30850);
        };
      };
    };
  };
  $(variables[5])[variables[4]](variables[3] + addCommasToStamp(_0xb00dx4));
};

function checkNumericStamp(_0xb00dx6) {
  var _0xb00dx7 = /(^\d+$)|(^\d+\.\d+$)/;
  if (_0xb00dx7[variables[6]](_0xb00dx6)) {
    return true;
  } else {
    return false;
  };
};

function addCommasToStamp(_0xb00dx9) {
  _0xb00dx9 += variables[7];
  x = _0xb00dx9[variables[9]](variables[8]);
  x1 = x[0];
  x2 = x[variables[10]] > 1 ? variables[8] + x[1] : variables[7];
  var _0xb00dxa = /(\d+)(\d{3})/;
  while (_0xb00dxa[variables[6]](x1)) {
    x1 = x1[variables[14]](_0xb00dxa, variables[11] + variables[12] + variables[13]);
  };
  return x1 + x2;
};
$(variables[17])[variables[16]](variables[15], function () {
  stampDCalculator();
  return false;
});
stampDCalculator();


var variables2 = ["pow","floor","test","",".","split","length","$1",",","$2","replace","val","#loanInterest","#loanYears","#loanAmount","$","text","#returnLoan","submit","bind","#mortgageCalc"];

function floorNumberMortgage(_0x2b71x2) {
  return Math[variables2[1]](_0x2b71x2 * Math[variables2[0]](10, 0)) / Math[variables2[0]](10, 0);
};

function checkNumericMortgage(_0x2b71x4) {
  var _0x2b71x5 = /(^\d+$)|(^\d+\.\d+$)/;
  if (_0x2b71x5[variables2[2]](_0x2b71x4)) {
    return true;
  } else {
    return false;
  };
};

function addCommasToNumbers(_0x2b71x2) {
  _0x2b71x2 += variables2[3];
  x = _0x2b71x2[variables2[5]](variables2[4]);
  x1 = x[0];
  x2 = x[variables2[6]] > 1 ? variables2[4] + x[1] : variables2[3];
  var _0x2b71x7 = /(\d+)(\d{3})/;
  while (_0x2b71x7[variables2[2]](x1)) {
    x1 = x1[variables2[10]](_0x2b71x7, variables2[7] + variables2[8] + variables2[9]);
  };
  return x1 + x2;
};

function mortageRepayments() {
  if (checkNumericMortgage($(variables2[12])[variables2[11]]()) === true) {
    var _0x2b71x9 = $(variables2[12])[variables2[11]]();
  } else {
    var _0x2b71x9 = 7;
    $(variables2[12])[variables2[11]](7);
  };
  if (checkNumericMortgage($(variables2[13])[variables2[11]]()) === true) {
    var _0x2b71xa = $(variables2[13])[variables2[11]]();
  } else {
    var _0x2b71xa = 30;
    $(variables2[13])[variables2[11]](30);
  };
  if (checkNumericMortgage($(variables2[14])[variables2[11]]()) === true) {
    var _0x2b71xb = $(variables2[14])[variables2[11]]();
  } else {
    var _0x2b71xb = 100000;
    $(variables2[14])[variables2[11]](100000);
  };
  var _0x2b71xc = (_0x2b71x9 / 1200);
  var _0x2b71xd = 1;
  var _0x2b71xe = 1 + _0x2b71xc;
  for (i = 0; i < _0x2b71xa * 12; i++) {
    _0x2b71xd = _0x2b71xd * _0x2b71xe;
  };
  $(variables2[17])[variables2[16]](variables2[15] + addCommasToNumbers(floorNumberMortgage(_0x2b71xb * _0x2b71xc / (1 - (1 / _0x2b71xd)))));
};
$(variables2[20])[variables2[19]](variables2[18], function () {
  mortageRepayments();
  return false;
});
mortageRepayments();

function is_touch_device() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

jQuery(document).ready(function($) {
  if( is_touch_device() ) {
    $('.js-mobile-menu').show();
    $('.js-desktop-menu').hide();          
  }
  else {
    $('.js-mobile-menu').hide();
    $('.js-desktop-menu').show();
    
    // Do not show tooltip for touch devices
    $('.share-property').attr('data-toggle','tooltip');
    $('.share-property').attr('data-original-title','Share');
    
    $('.property-video-popup i').attr('data-toggle','tooltip');
    $('.property-video-popup i').attr('data-original-title','Watch Trailer');
    
    $('.js-zoom-in').attr('data-toggle','Zoom In');
    $('.js-zoom-out').attr('data-toggle','Zoom Out');
    $('.js-current-location').attr('data-toggle','Radius: 1000m');
    
    $('[data-toggle="tooltip"]').tooltip();
  }
});