// 1줄 주석(comments)입니다.
/* 
이런 방식은 2줄 이상의 주석을 사용하는
방식입니다.
*/
/* 
오늘 워크샵의 모든 내용은 아래의 사이트에 정리되어 있습니다.
https://sites.google.com/site/illustratorscripting/

포토샵에서의 자바스크립트 사용을 초반 내용을 모두 모아서 진행하는
소스 코드 파일 정리입니다.
*/

// 화면에 정보를 출력하는 자바스크립트 함수
alert("Hello");

// 변수(variables)

var no1; // 변수의 정의
var no2 = 1; // 변수를 정의하면서, 값을 설정할 수 있다(변수의 초기화).

// 변수 이름(또는 함수 이름 등)을 정하는 일정한 규칙이 있다.
// var 3no;

no1 = 1;
no1++; // 변수값을 1증가
n02 = no2 + 10; // 변수값을 10증가

// 조건에 따라서 어떤 일을 구분해서 하려면...
if (no1 < no2){
    alert("The first one is less than the second.");
} else if (no1 == no2){ 
    alert("Two numbers are same");
} else {
    alert("The second is greater that the first");
}

// 반복문을 사용하고 싶으면
no1 = 1;
while(no1 < 5){
    alert(no1);
}

// "숫자형" 자료형 뿐만 아니라 "문자열" 자료형도 많이 사용된다.
var myString1 = "Hello Photoshop Scripting";
alert(myString1);

var myString2 = "will be easy...."
var newString = myString1 + "    " + myString2;
alert(newString);

// 여기서 부터는 포토샵에서의 자바스크립트 관련 내용입니다
// 새로운 document 생성
var doc = documents.add(300, 200, 150, "A New Doc", NewDocumentMode.RGB);
alert("New Document Added");
alert("Width:"+doc.width+"Height:"+doc.height);
doc.close();

/*
 레이러를 하나 만들고,
 이 레이어를 반복문을 통해서 변형한후
 자동으로 다양한 확장자의 이미지 파일로 저장하는 내용입니다.
 1. 위의 내용을 모두 주석으로 막고
 2. document를 하나 open해서, 특정 그림을 그려봅시다. 웹브라우저 등에서 아무 이미지나 복붙해도 됩니다.
 3. 그리고 이 코드를 실행하면 됩니다.
*/

/*
// 이 if 문은 위와 같이 document 를 생성한 상황에서는 필요는 없지만, 혹시나 ... 안정성을 위해서 사용했습니다.
if (documents.length > 0){
    var layer = activeDocument.activeLayer;
    var i = 1;
    while( i < 8){
        var dup_layer = layer.duplicate();
        dup_layer.rotate(45 * i, AnchorPosition.BOTTOMCENTER); 
        i++;  // i = i + 1;
    }
} else {
    alert("No document open.");
}

filePath = "/c/Keechul/Adobe/working1/";
fileName = filePath+"test.png";
SavePNG(fileName, activeDocument);
//activeDocument.close();

// 현재 activeDocument를 파일로 저장함.
// 파일 이름과 저장할 document를 파라미터로 지정함.
function SavePNG(fileName, doc){
    var pngOpts = new ExportOptionsSaveForWeb; 
    pngOpts.format = SaveDocumentType.PNG
    pngOpts.PNG8 = false; 
    pngOpts.transparency = true; 
    pngOpts.interlaced = false; 
    pngOpts.quality = 100;
    doc.exportDocument(new File(fileName), ExportType.SAVEFORWEB, pngOpts); 
}
*/