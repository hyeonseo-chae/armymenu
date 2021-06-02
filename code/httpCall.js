//20191021 httpCall.js 변경
module.exports.function = function httpCall (){




  var http = require('http')
  var console = require('console')

  //results는 결과값을 담을 리스트

  var result = []
  result = http.getUrl("https://openapi.mnd.go.kr/3331313332343635353437343432313337/json/DS_TB_MNDT_DATEBYMLSVC_7652/1/5/",{format : 'json'})
  // 서비스키 : 3331313332343635353437343432313337
  // http url 설명 1) https://openapi.mnd.go.kr/서비스키/xml(데이터형식)/DS_TB_MNDT_DATEBYMLSVC_7652(부대)/1(1페이지)/5(5페이지)/
  
  // *1* API 호출 시도해 본 방법 1 : 이대로 불러오면 데이터는 불러와지는데, type이 string으로 나와서 데이터에 세부적으로 접근 불가?
  // => 또하나의 가족의 경우에는 api 호출시 데이터 형식 찍어보면 xml이라고 나옴, 그런데 국방식단표 데이터 형식 찍어보니 string형식
 
 
    console.log(typeof(result)) 
    return result
  // 이거 stirng 나옴


  // *2* 그래서 아래에 코드를 사용해서 string => xml 변환해보려고 함 (구글링해서 찾아봤어)
 // 2021.5.24

//   function getXmlFromString(xmlStr) {
//     var parseXml; 

//     if (window.DOMParser) {
//         var dp = new window.DOMParser();
//         return dp.parseFromString(xmlStr, "text/xml");
//     } else if (typeof window.ActiveXObject != "undefined" 
//         && new window.ActiveXObject("Microsoft.XMLDOM")) {
//         var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
//         xmlDoc.async = "false";
//         xmlDoc.loadXML(xmlStr);
        
//         return xmlDoc;
//     }

//     return null;
// }


// *3* *2*의 방법도 안 돼서 또하나의 가족 때 사용한 options 코드를 넣어보려고함 => 근데 내가 못하는 건지 잘 안됨.


  // var results = http.getUrl("https://openapi.mnd.go.kr/", options)
  // 부대 종류 : 7689,3389,2171, ATC(육군훈련소)
  // API 호출 시도해 본 방법 2 : 그래서 동물 보호소 api 호출하는것 처럼 해보려고함. 여기서 막힘 

  //  var options = { 
  //   query: {
  //     Key : 3331313332343635353437343432313337,
  //     TYPE : xml,
  //     START_INDEX : 1,
  //     END_INDEX : 5,
  //     SERVICE : DS_TB_MNDT_DATEBYMLSVC_7652 }
      //요청인자, 엑셀 파일 참고 
    
   


// 달력 만들어서 해볼까 고민해봤음, 근데 데이터 불러오는 것 부터가 문제... 

// var options= {
//     format: 'xmljs',
//     returnHeader : true,
//     query: {
//     bgnde : inputDate.bgnde_Convert,
//     endde : inputDate.endde_Convert,
//     pageNo : 1,
//     upr_cd : location,
//     org_cd : subLocation,
//     upkind: kinds,
//     state: '',
//     kind: kindN, //동물의 종류 
//     numOfRows: 50}//
//   }
//     var results = http.getUrl("http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?serviceKey=" + ServiceKey, options)

// => 이거는 그냥 동물 보호소 api 호출한 코드를 참고하려고 써놓은거임 

  
  
}

//results.result.response.body.items.item