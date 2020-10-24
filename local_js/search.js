function getRootPath() {
  return $('meta[name="root_path"]').attr('content');
}

function getPageName() {
  return $('meta[name="page_name"]').attr('content')
}

function pagePath(page) {
  return getRootPath() + page;
}

$(document).ready(function(){

  /* for home page search filter */
  var searchInput = $('#select_type');
  if (searchInput.length) {
    filter_selected(searchInput.val(), true);
  }
  
  $('select[name=type]').change(function(e){      
      //for changing price min and max values in dropdown
      $('.js-search-rent-price').toggleClass('hide', $(this).chosen().val() != 'Rent');
      $('.js-search-sale-price').toggleClass('hide', $(this).chosen().val() == 'Rent');
      //reload the select option when selected type changed
      $('select[name=price_from]').val('').trigger('chosen:updated');
      $('select[name=price_to]').val('').trigger('chosen:updated');  
    
      filter_selected($(this).chosen().val(), true);
  });

  
});

//this function is for first modal popup when on mobile view as well as for home page search
function filter_selected(filter_value, first) {
  var page = getPageName();

  
  switch(filter_value) {
    case 'Agent':
      var placeholder = 'Search agents by name, state, region or suburb',
          name = 'name',
          datasets = [{
            header: 'Agents',
            endpoint: pagePath('suggest/consultants'),
            uriFor: function(suggestion) {
              return pagePath('agent-detail?consultant_id=' + suggestion.id)
            }
          }, {
            endpoint: pagePath('suggest/location'),
            expectedGroups: ['Countries', 'States' ,'Regions', 'Suburbs'],
            uriFor: function(suggestion) {
              var param = getLocationGroupParam(suggestion.group);
              return pagePath('agents?' + param + '=' + suggestion.name);
            },
            queryData: function(query) {
              return {unique: 1, type: 'agents'};
            }
          }];
      break;

    case 'Office':
      var placeholder = 'Search offices by name, state, region or suburb',
          name = 'name',
          datasets = [{
            header: 'Offices',
            endpoint: pagePath('suggest/offices'),
            uriFor: function(suggestion) {
              if(page == 'our-network-map') {
                return pagePath('our-network-map?name=' + suggestion.name)
              } else {
                return pagePath('office?office_id=' + suggestion.id)
              }
            }
          }, {
            endpoint: pagePath('suggest/location'),
            expectedGroups: ['Countries', 'States' ,'Regions', 'Suburbs'],
            uriFor: function(suggestion) {
              if(page == 'our-network-map') {
                var pageName = 'our-network-map';
              } else {
                var pageName = 'offices';
              }

              var param = getLocationGroupParam(suggestion.group);
              return pagePath(pageName + '?' + param + '=' + suggestion.name);
            },
            queryData: function(query) {
              return {unique: 1, type: 'offices'};
            }
          }];
      break;

    default:
      var placeholder = 'Search Address, Suburb',
          name = 'address',
          datasets = [
            {
            endpoint: pagePath('suggest/location'),
            expectedGroups: ['Countries', 'States' ,'Regions', 'Suburbs'],
            uriFor: function(suggestion) {
              if(page == 'inspections') {
                var pageName = 'inspections';
              }else if(page == 'auction') {
                var pageName = 'auction';
              } else {                
                var pageName = 'listings';
              }

              var param = getLocationGroupParam(suggestion.group);
              return pagePath(pageName + '?type=' + filter_value + '&' + param + '=' + suggestion.name);
            },
            queryData: function(query) {
              return {unique: 1, type: 'listings', category: filter_value};
            }
          },
          {
            header: 'Listings',
            endpoint: pagePath('suggest/listings'),
            uriFor: function(suggestion) {
              return pagePath('listing-detail?listing_id=' + suggestion.id)
            },
            queryData: function(query) {
              return {
                category: filter_value,
                type: $('#property_type').val(),
                price_min: $('#price_from').val(),
                price_to: $('#price_to').val(),
                beds: $('#beds').val(),
                baths: $('#baths').val(),
                cars: $('#cars').val()
              };
            }
          }];
      break;
  }
  
  //initialize autocomplete for home page
  $('#search_what').prop({ placeholder: placeholder, name: name });

  if($('#search_what').typeahead('isEnabled')) {
    typeahead_destroy($('#search_what'));
  }

  typeahead_init($('#search_what'), datasets, 5);
  
  //initialize autocomplete for inner pages
  $('#search_what_inner').prop({ placeholder: placeholder, name: name });

  if($('#search_what_inner').typeahead('isEnabled')) {
    typeahead_destroy($('#search_what_inner'));
  }

  typeahead_init($('#search_what_inner'), datasets, 5);
 
 //initialize autocomplete for footer popup
  $('#search_what_footer').prop({ placeholder: placeholder, name: name });

  if($('#search_what_footer').typeahead('isEnabled')) {
    typeahead_destroy($('#search_what_footer'));
  }

  typeahead_init($('#search_what_footer'), datasets, 5);
  
 
}

function typeahead_destroy($input) {
  $input
    .typeahead('destroy')
    .off('typeahead:asyncrequest')
    .off('typeahead:asyncreceive')
    .off('typeahead:render')
    .off('typeahead:select')
    .val('');
}

function typeahead_init($input, options, limit) {
  // prepare datasets options for Typeahead
  datasets = $.map(options, function(options) {
    return {
      async: true,
      display: 'name',
      limit: (options.expectedGroups ? options.expectedGroups.length : 1) * limit,
      templates: {
        header: (options.header ? '<div class="tt-dataset-header">' + options.header + '</div>' : null),
        suggestion: function(suggestion) {
          var group = (suggestion.group ? ' class="tt-group-' + suggestion.group + '"' : '');
          return '<div' + group + '>' + suggestion.name + '</div>';
        }
      },
      source: new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
          url: options.endpoint,
          prepare: function(query, settings) {
            settings.data = {q: query, limit: limit};
            if (options.queryData) {
              $.extend(settings.data, options.queryData(query));
            }
            return settings;
          },
          transform: function(response) {
            if($.isPlainObject(response) && options.hasOwnProperty('expectedGroups')) {
              var groupResponse = [];
              options.expectedGroups.forEach(function(group) {
                var group = group.toLowerCase();
                if(response.hasOwnProperty(group)) {
                  response[group].some(function(suggestion, index) {
                    suggestion.group = group;
                    groupResponse.push(suggestion);
                    return index === limit - 1;
                  });
                }
              });
              response = groupResponse;
            }
            return $.map(response, function(suggestion) {
              if (options.uriFor) {
                suggestion.uri = options.uriFor(suggestion);
              }
              return suggestion;
            });
          }
        }
      })
    }
  });

  $input
    .typeahead({highlight: true}, datasets)
    .on('typeahead:asyncrequest', function() { $(this).addClass('loading') })
    .on('typeahead:asyncreceive typeahead:asynccancel', function() { $(this).removeClass('loading') })
    .on('typeahead:render', function() {
      options.forEach(function(options) {
        if(options.hasOwnProperty('expectedGroups')) {
          options.expectedGroups.forEach(function(group) {
            var group = group.toLowerCase();
            var $firstInGroup = $('.tt-group-' + group).first();
            if($firstInGroup && (!$firstInGroup.prev() || !$firstInGroup.prev().hasClass('tt-dataset-header'))) {
              var $header = $('<div>', {
                class: 'tt-dataset-header',
                text: group
              });
              $firstInGroup.before($header);
            }
          });
        }
      });
    })
    .on('typeahead:select', function(e, suggestion) {
      if (! suggestion.uri) return;

      $(this).prop('disabled', true).addClass('loading');
      if ($.isFunction(suggestion.uri)) {
        suggestion.uri();
      } else {
        location.href = suggestion.uri;
      }
    });
}

function getLocationGroupParam(group) {
  switch(group) {
    case 'countries':
      return 'country';
      break;
    case 'states':
      return 'state';
      break;
    case 'regions':
      return 'region';
      break;
    case 'suburbs':
      return 'suburb';
      break;
    default:
      return '';
      break;
  }
}

function replaceURLParam(url, paramKey, paramValue) {
  var re = new RegExp('(?:\\?|&)' + paramKey + '=(.+?)(?:&|$)');
  var match = url.match(re);
  var hasParams = url.indexOf('?') > -1;

  if(!match) {
    return url + (hasParams ? '&' : '?') + paramKey + '=' + paramValue;
  }

  var newParamString = match[0].replace(match[1], paramValue);
  return url.replace(match[0], newParamString);
}
