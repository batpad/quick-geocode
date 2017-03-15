var MAPZEN_KEY = 'mapzen-vPFsTmz';
var MAPZEN_API_BASE = 'https://search.mapzen.com/v1/search?';

var OPENCAGE_KEY = 'b259e2552bcc6545f684920858777172';
var OPENCAGE_API_BASE = 'https://api.opencagedata.com/geocode/v1/json';

var citiesData = [
{"city":"Abu Dhabi","bbox_wsen":"54.17,24.17,54.85,24.63"}
,
{"city":"Adelaide","bbox_wsen":"138.43,-35.09,138.76,-34.76"}
,
{"city":"Amsterdam","bbox_wsen":"4.72,52.27,5.08,52.44"}
,
{"city":"Ankara","bbox_wsen":"32.69,39.76,33.02,40.09"}
,
{"city":"Athens","bbox_wsen":"23.56,37.82,23.89,38.15"}
,
{"city":"Atlanta","bbox_wsen":"-84.78,33.60,-83.97,33.96"}
,
{"city":"Austin","bbox_wsen":"-98.37,30.05,-97.04,30.66"}
,
{"city":"Baghdad","bbox_wsen":"44.18,33.17,44.6,33.46"}
,
{"city":"Bahamas","bbox_wsen":"-81.36,23.41,-73.43,27.20"}
,
{"city":"Baltimore","bbox_wsen":"-76.78,39.13,-76.45,39.46"}
,
{"city":"Bangalore","bbox_wsen":"77.43,12.81,77.76,13.14"}
,
{"city":"Barcelona","bbox_wsen":"2.05,41.31,2.23,41.47"}
,
{"city":"Beijing","bbox_wsen":"116.23,39.74,116.56,40.07"}
,
{"city":"Berlin","bbox_wsen":"13.22,52.35,13.55,52.68"}
,
{"city":"Bern","bbox_wsen":"7.29,46.91,7.5,47"}
,
{"city":"Boston","bbox_wsen":"-71.2,42.22,-70.8,42.4"}
,
{"city":"Brisbane","bbox_wsen":"152.86,-27.63,153.19,-27.3"}
,
{"city":"Brussels","bbox_wsen":"4.19,50.68,4.52,51.01"}
,
{"city":"Buenos Aires","bbox_wsen":"-58.54,-34.71,-58.33,-34.52"}
,
{"city":"Canberra","bbox_wsen":"148.94,-35.46,149.27,-35.13"}
,
{"city":"Charlotte","bbox_wsen":"-81.17,35.05,-80.42,35.37"}
,
{"city":"Chicago","bbox_wsen":"-89.019,41.38,-86.17,42.50"}
,
{"city":"Columbus","bbox_wsen":"-83.22,39.8,-82.77,40.16"}
,
{"city":"Copenhagen","bbox_wsen":"12.41,55.52,12.74,55.85"}
,
{"city":"DC","bbox_wsen":"-77.48,38.70,-76.55,39.091"}
,
{"city":"Denver","bbox_wsen":"-105.69,39.49,-104.23,40.08"}
,
{"city":"Detroit","bbox_wsen":"-83.64,42.16,-82.54,42.59"}
,
{"city":"Dubai","bbox_wsen":"54.71,24.62,56.21,25.53"}
,
{"city":"Dublin","bbox_wsen":"-6.43,53.18,-6.1,53.51"}
,
{"city":"Edinburgh","bbox_wsen":"-3.45,55.81,-3.07,56.01"}
,
{"city":"El Paso","bbox_wsen":"-106.65,31.6,-106.32,31.93"}
,
{"city":"Fort Worth Dallas","bbox_wsen":"-97.72,32.46,-95.98,33.24"}
,
{"city":"Geneva","bbox_wsen":"6.11,46.17,6.18,46.24"}
,
{"city":"Havana","bbox_wsen":"-82.57867416390158,22.984169365427064,-82.10777966457343,23.212942154776684"}
,
{"city":"Helsinki","bbox_wsen":"24.78,60.08,25.26,60.3"}
,
{"city":"Hong Kong","bbox_wsen":"114,22.11,114.33,22.44"}
,
{"city":"Honolulu","bbox_wsen":"-162.03,18.01,-151.13,23.40"}
,
{"city":"Houston","bbox_wsen":"-96.05,29.46,-94.50,30.17"}
,
{"city":"Indianapolis","bbox_wsen":"-86.32,39.6,-85.99,39.93"}
,
{"city":"Istanbul","bbox_wsen":"28.8,40.84,29.13,41.17"}
,
{"city":"Jacksonville","bbox_wsen":"-82.15,30.08,-81.10,30.55"}
,
{"city":"Jeddah","bbox_wsen":"39,21.42,39.33,21.75"}
,
{"city":"Johannesburg","bbox_wsen":"27.88,-26.37,28.21,-26.04"}
,
{"city":"Kingston","bbox_wsen":"-76.96,17.81,-76.63,18.14"}
,
{"city":"Kuala Lumpur","bbox_wsen":"101.61,3.03,101.76,3.25"}
,
{"city":"Las Vegas","bbox_wsen":"-115.48,36.028,-114.85,36.29"}
,
{"city":"Lisbon","bbox_wsen":"-9.3,38.54,-8.97,38.87"}
,
{"city":"London","bbox_wsen":"-0.96,51.20,0.68,51.74"}
,
{"city":"Los Angeles","bbox_wsen":"-119.03,33.42,-116.93,34.34"}
,
{"city":"Louisville","bbox_wsen":"-85.95,37.99,-85.4,38.39"}
,
{"city":"Macau","bbox_wsen":"113.52,22.07,113.64,22.22"}
,
{"city":"Madrid","bbox_wsen":"-3.89,40.31,-3.51,40.65"}
,
{"city":"Manila","bbox_wsen":"120.94,14.43,121.1,14.69"}
,
{"city":"Mecca","bbox_wsen":"39.66,21.26,39.99,21.59"}
,
{"city":"Melbourne","bbox_wsen":"144.8,-37.98,145.13,-37.65"}
,
{"city":"Memphis","bbox_wsen":"-90.31,34.99,-89.63,35.27"}
,
{"city":"Mexico City","bbox_wsen":"-99.37,19.04,-98.94,19.6"}
,
{"city":"Milan","bbox_wsen":"9.04,45.38,9.28,45.54"}
,
{"city":"Milwaukee","bbox_wsen":"-88.08,42.92,-87.86,43.2"}
,
{"city":"Montreal","bbox_wsen":"-73.98,45.41,-73.47,45.71"}
,
{"city":"Moscow","bbox_wsen":"37.29,55.49,37.97,55.96"}
,
{"city":"Mumbai","bbox_wsen":"72.67,18.77,73,19.1"}
,
{"city":"Munich","bbox_wsen":"11.36,48.06,11.73,48.25"}
,
{"city":"Nashville","bbox_wsen":"-86.94,36,-86.61,36.33"}
,
{"city":"New Delhi","bbox_wsen":"76.83,28.4,77.35,28.89"}
,
{"city":"New York City","bbox_wsen":"-74.3,40.46,-73.3199,40.95"}
,
{"city":"Oklahoma","bbox_wsen":"-98.07,35.17,-96.94,35.66"}
,
{"city":"Oslo","bbox_wsen":"10.57,59.75,10.9,60.08"}
,
{"city":"Paris","bbox_wsen":"1.89,48.62,2.87,48.96"}
,
{"city":"Perth","bbox_wsen":"115.7,-32.12,116.03,-31.79"}
,
{"city":"Philadelphia","bbox_wsen":"-75.66,39.72,-74.57,40.16"}
,
{"city":"Phoenix","bbox_wsen":"-112.68,33.14,-111.26,33.77"}
,
{"city":"Port-au-Prince","bbox_wsen":"-72.5,18.38,-72.17,18.71"}
,
{"city":"Portland","bbox_wsen":"-122.84,45.43,-122.47,45.66"}
,
{"city":"Prague","bbox_wsen":"14.22,49.94,14.71,50.18"}
,
{"city":"Reykjavik","bbox_wsen":"-22.11,63.98,-21.78,64.31"}
,
{"city":"Rio de Janeiro","bbox_wsen":"-43.75,-23.12,-42.72,-22.62"}
,
{"city":"Riyadh","bbox_wsen":"46.07,24.32,47.57,25.04"}
,
{"city":"Rome","bbox_wsen":"12.23,41.65,12.86,42.15"}
,
{"city":"San Diego","bbox_wsen":"-117.52,32.51,-116.68,32.88"}
,
{"city":"San Francisco","bbox_wsen":"-122.92,37.29,-121.65,37.82"}
,
{"city":"San Juan","bbox_wsen":"-66.28,18.3,-65.95,18.63"}
,
{"city":"San Salvador","bbox_wsen":"-89.31,13.64,-89.09,13.75"}
,
{"city":"Santiago de Cuba","bbox_wsen":"-75.91,19.96,-75.66,20.08"}
,
{"city":"Santo Domingo","bbox_wsen":"-70.11,18.32,-69.78,18.65"}
,
{"city":"Sao Paulo","bbox_wsen":"-46.83,-24.01,-46.36,-23.35"}
,
{"city":"Seattle","bbox_wsen":"-122.99,47.37,-121.53,47.89"}
,
{"city":"Seoul","bbox_wsen":"126.76,37.42,127.19,37.71"}
,
{"city":"Shanghai","bbox_wsen":"120.85,30.66,123.34,31.88"}
,
{"city":"Shenzen","bbox_wsen":"113.95,22.47,114.14,22.61"}
,
{"city":"Stockholm","bbox_wsen":"17.91,59.16,18.24,59.49"}
,
{"city":"Sydney","bbox_wsen":"150.57,-34.05,151.52,-33.63"}
,
{"city":"Tokyo","bbox_wsen":"139.59,35.52,139.92,35.85"}
,
{"city":"Toronto","bbox_wsen":"-79.82,43.55,-79.08,43.83"}
,
{"city":"Trinidad and Tobago","bbox_wsen":"-61.945,9.977,-60.862,11.026"}
,
{"city":"Vancouver","bbox_wsen":"-123.46,48.96,-122.43,49.31"}
,
{"city":"Vienna","bbox_wsen":"16.21,48.04,16.54,48.37"}
,
{"city":"Warsaw","bbox_wsen":"20.85,52.09,21.28,52.37"}
,
{"city":"Zagreb","bbox_wsen":"15.82,45.74,16.11,45.94"}
,
{"city":"Zurich","bbox_wsen":"8.44,47.32,8.63,47.44"}
,
{"city":"Winnipeg *","bbox_wsen":"-97.35,49.71,-96.95,50"}
,
{"city":"Toulouse *","bbox_wsen":"1.35,43.53,1.52,43.67"}
,
{"city":"San Antonio *","bbox_wsen":"-98.91,29.21,-98.03,29.62"}
,
{"city":"Calgary *","bbox_wsen":"-114.32,50.84,-113.86,51.22"}
,
{"city":"Chennai *","bbox_wsen":"80.12,12.92,80.45,13.25"}
,
{"city":"Puebla City *","bbox_wsen":"-99.08,17.86,-96.72,20.84"}
,
{"city":"Nice *","bbox_wsen":"7.18,43.64,7.33,43.77"}
,
{"city":"Ottawa *","bbox_wsen":"-75.89,45.30,-75.42,45.47"}
,
{"city":"Dammam *","bbox_wsen":"49.94,26.27,50.27,26.6"}
,
{"city":"Hyderabad *","bbox_wsen":"78.31,17.2,78.64,17.53"}
,
{"city":"Ecatepec de Morelos *","bbox_wsen":"-99.12,19.48,-98.97,19.66"}
,
{"city":"Guadalajara *","bbox_wsen":"-103.51,20.51,-103.18,20.84"}
,
{"city":"Krakow *","bbox_wsen":"19.79,49.96,20.22,50.13"}
,
{"city":"Iztapalapa *","bbox_wsen":"-99.15,19.28,-98.96,19.41"}
,
{"city":"Bali","bbox_wsen":"114.84518601528924,-8.89719763214812,115.64444535372013,-8.479899063545815"}
,
{"city":"London","bbox_wsen":"-0.25650876183456717,51.4600367964847,0.0037593696567057577,51.545605790504794"}
,
{"city":"SF","bbox_wsen":"-122.65274891539464,37.660247863276155,-122.16742136030959,37.86289732264129"}
,
{"city":"NYC","bbox_wsen":"-74.19738237880989,40.66356148822018,-73.83327864666424,40.809277182186406"}
,
{"city":"Singapore","bbox_wsen":"103.49482831501672,1.1583698489821899,104.1805897654558,1.520468229391625"}
,
{"city":"Bangkok","bbox_wsen":"100.3195058371245,13.641471184928761,100.77041574396009,13.872795524198466"}
,
{"city":"Istanbul","bbox_wsen":"28.719661885437034,40.92329392663163,29.20612139812681,41.117143875276525"}
,
{"city":"Kuala Lumpur","bbox_wsen":"101.51342955341835,3.028401283109119,101.93938820021475,3.25304137590048"}
,
{"city":"Chiang Mai","bbox_wsen":"114.84518601528924,-8.89719763214812,115.64444535372013,-8.479899063545815"}
,
{"city":"Kuala Lumpur","bbox_wsen":"101.51342955341835,3.028401283109119,101.93938820021475,3.25304137590048"}
,
{"city":"Jeju","bbox_wsen":"125.96660048475604,33.05677303455364,127.23439744562194,33.616200524960604"}
,
{"city":"Paris","bbox_wsen":"2.165741691567689,48.79253594228365,2.5604789182663126,48.92969724479158"}
,
{"city":"Phuket","bbox_wsen":"98.14395615353868,7.750045967808276,98.6078451405898,7.9927490558036425"}
,
{"city":"Seoul","bbox_wsen":"126.74790212631552,37.43414566173274,127.24005846315572,37.64026825328666"}
,
{"city":"Siem Reap","bbox_wsen":"103.37601094718752,13.063573838940215,104.47478826249284,13.628238901907949"}
,
{"city":"Rome","bbox_wsen":"12.26906265635597,41.8002878533471,12.724924125520175,41.97952529336672"}
,
{"city":"Osaka","bbox_wsen":"135.21563856571123,34.54224979126079,135.89182770025286,34.835910195314185"}
,
{"city":"Tokyo","bbox_wsen":"139.58495653337332,35.59356369874679,139.98594576979298,35.76559884317733"}
,
{"city": "Los Angeles", "bbox_wsen": "-118.9668,33.5734,-117.4754,34.4250"}
,
{"city": "Hanoi", "bbox_wsen": "105.65265919029923,20.890782347485796,106.1325432094186,21.127392892874553"}
,
{"city": "Kyoto", "bbox_wsen": "135.4664005014768,34.843407941908126,136.0470557631026,35.094723401265654"}
];

var cities = citiesData.reduce(function(memo, val) {
  memo[val.city] = val.bbox_wsen;
  return memo;
}, {});

$(function() {
  var query = getQueryObj();
  if (!query.name || !query.city) {
    alert('needs name and city');
    return;
  }
  if (!cities.hasOwnProperty(query.city)) {
    alert('bbox for ' + query.city + ' not found');
    return;
  };

  $('#searchName').text(query.name);
  $('#searchCity').text(query.city);
  $('#searchGoogle').prop('href', getGoogleLink());
  $('#searchWikidata').prop('href', getWikiLink());
  var bbox = cities[query.city];

  //FIXME: build params object, not this ugly url string concat
  var mzUrl = MAPZEN_API_BASE + 'text=' + query.name + '&' + getBboxQuery(bbox);
  var $mzBody = $('#mzResults tbody');
  $.getJSON(mzUrl, {}, function(data) {
    $('#mzLoading').hide();
    var features = data.features;
    features.forEach(function(feature) {
      var m = new MapzenResult(feature);
      var $row = m.getRow();
      $mzBody.append($row);
    });
  }).fail(function(err) {
    alert('Mapzen geocode request failed. Please slap batpad.');
  });

  var ocParams = {
    bounds: bbox,
    key: OPENCAGE_KEY,
    q: query.name
  };
  var $ocBody = $('#ocResults tbody');
  $.getJSON(OPENCAGE_API_BASE, ocParams, function(data) {
    $('#ocLoading').hide();
    var results = data.results;
    console.log(results);
    results.forEach(function(result) {
      var o = new OpencageResult(result);
      var $row = o.getRow();
      $ocBody.append($row);
    })
  }).fail(function(err) {
    alert('Opencage geocode request failed.');
  });

});

function getBboxQuery(bbox) {
  var arr = bbox.split(',');
  var s = 'boundary.rect.min_lat=' + arr[1];
  s += '&boundary.rect.min_lon=' + arr[0];
  s += '&boundary.rect.max_lat=' + arr[3];
  s += '&boundary.rect.max_lon=' + arr[2];
  return s;
}

function getQueryObj() {
  var result = {}, queryString = location.search.slice(1),
      re = /([^&=]+)=([^&]*)/g, m;

  while (m = re.exec(queryString)) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  console.log('query obj', result);
  return result;
}

//FIXME: This is super ugly. I know.
function getGoogleLink() {
  var query = getQueryObj();
  return 'http://google.com/#q=' + query.name + ', ' + query.city;
}

function getWikiLink() {
  var query = getQueryObj();
  return 'https://www.wikidata.org/w/index.php?title=Special:Search&profile=default&fulltext=Search&search=' + query.name + '&searchToken=3bto1uwdawuhrioq5mztmoknr';
}
