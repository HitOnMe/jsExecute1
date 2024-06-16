/****************************************************** input function ******************************************************/
function getID(id) {
    return document.getElementById(id);
}

/* navigate window element using ID */
function styleID(element) {
    return window.getComputedStyle(element);
}

/* navigate css element using selector */
function selectAll(domTarget) {
    return document.querySelectorAll(domTarget);
}

function select(domTarget, index) {
    return selectAll(domTarget)[index];
}

/* collect value from input */
function getValue(id, index) {
    var mygetValue = select(id, index).value;
    return mygetValue;
}
/* total function */
function total(a, b){
    return a+b
}
function subtract(a, b){
    return a-b
}
function multiply(a, b){
    return a*b
}
function divide(a, b){
    return a/b
}
/* Chỉ cho phép người dùng nhập vào tối đa <number> số thực ngăn cách bởi dấu phẩy*/
function preventNumber(id, number){
    getID(id).addEventListener('input', function(event){
        let numberTarget=event.target.value,
            numberArray=numberTarget.split(',')
            if (numberArray.length>number){
                event.target.value=numberArray.slice(0, number).join(',')
            }
    })
}
/* Chỉ cho phép người dùng nhập vào tối đa <number> ký tự số */
function preventNumber2(id, number){
    getID(id).addEventListener('input', function(event){
        let numberTarget=event.target.value,
            numberArray=numberTarget.split('')
            if (numberArray.length>number){
                event.target.value=numberArray.slice(0, number).join('')
            }
    })
}

/* lọc number với 1 dấu chấm duy nhất */
function numberOnly(className) {
    var elements = document.querySelectorAll(className);
    elements.forEach(function(element) {
        element.addEventListener('input', function(event) {
            const input = event.target.value;
            let numbers = input.replace(/[^\d.,]/g, ''); // Loại bỏ các ký tự không phải số và chỉ có 1 dấu chấm
            event.target.value = numbers;
        });
    });
}
/* lọc number từ dữ liệu người dùng nhập vào */
function numberOnly2(className) {
    var elements = document.querySelectorAll(className);
    elements.forEach(function(element) {
        element.addEventListener('input', function(event) {
            const input = event.target.value;
            let numbers = input.replace(/[^\d.]/g, ''); // Loại bỏ tất cả các ký tự không phải số thực và dấu phẩy
            let parts = numbers.split('.');//tách chuỗi thành các mảng ngăn cách bởi dấu phẩy
            if (parts.length > 2) {//nếu mảng có nhiều hơn 2 phần tử ==> có nhiều hơn 1 dấu chấm
                numbers = parts.shift() + '.' + parts.join('');//cộng phần nguyên và phần thập phân đã nối thành chuỗi
            }
            event.target.value = numbers;
        });
    });
}
/****************************************************** output function ******************************************************/
//Xuất ra màn hình giá trị content tại selector id vị trí index
function html(id, index, content) {
    select(id, index).innerHTML = content;
}
//Hàm chặn reload lại trang khi user nhấn vào nút button
function notDefault() {
    selectAll('button').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
}


/****************************************************** method function ******************************************************/
function collectValue() {
    var array = [];
    for (var i = 0; i < arguments.length; i++) {
        var arrayElement = getValue(arguments[i]);
        array.push(arrayElement);
    }
    return array;
}


// Hàm tính giá trị trung bình của các số nhập vào từ bàn phím phân cách bởi dấu phẩy
function averageNumber(input) {
    // Xử lý chuỗi nhập vào để loại bỏ các khoảng trắng và tách chuỗi thành mảng các chuỗi số
    let numberArray = input.split(',').map(num => parseFloat(num.trim()));

    // Tính tổng các số
    let sum = numberArray.reduce((acc, num) => acc + num, 0);

    // Tính giá trị trung bình
    let average = sum / numberArray.length;

    // Trả về giá trị trung bình
    return average;
}
//Hàm tính giá trị tổng các ký tự số nhập vào từ bàn phím
function totalNumber(input){
    var array=[];
    for(var count=input.length; count>0; count--){
        var number=Number(input)%10;
            input = Math.floor(input/10)
            array.push(number)
    }    return array.reduce((number1, number2) => number1+number2, 0);
}
