
/* Khởi động */
notDefault()//chặn load lại trang khi người dùng nhấn vào button

numberOnly('#numbersInput')//Ngăn chặn người dùng nhập các ký tự không phải số, dấu chấm và dấu phẩy từ bàn phím

numberOnly2('.form__control')//chỉ cho phép người dùng nhập vào ký tự số và 1 dấu chấm duy nhất (bài tập 2)

preventNumber('numbersInput', 5)//Chỉ cho phép người dùng nhập vào tối đa 5 số (bài tập 2)

preventNumber2('numberChar', 2)
/* bài tập 1 */
select('button', 0).onclick=function(){
    //input: số ngày làm: number; 
    var number = Number(getValue('input', 1)),//lấy giá trị input từ selectorAll .form__control vị trí đầu tiên
   
    //output: tiền lương/ tháng: number
        salary = number*100000; //số ngày làm*tiền công/ngày
    
    html('.form__footer', 0,  'Lương của bạn: '+ salary + '(VND)')//xuất ra màn hình
    
}

/* bài tập 2 */

select('button', 1).onclick=function(){
    //input: 5 số thực: number
    var number=getValue('input', 3),//vị trí thứ 2 của selectorAll .form__control
    
    //output: Giá trị trung bình của 5 số thực
        average=averageNumber(number);
    html('.form__footer', 1, 'GTTB là:'+average)
}

/* bài tập 3 */

select('button', 2).onclick=function(){
    //input: Nhập vào số tiền (USD): number
    var numberUSD=Number(getValue('input', 4)),

    //output: Quy đổi sang VND: number
        numberVND=numberUSD*23500;
    
    html('.form__footer', 2, 'Số tiền của bạn là: '+numberVND + '(VND)')
}

/* bài tập 4 */

select('button', 3).onclick=function(){
    //input: chiều dài: number; chiều rộng: number
    var width=Number(getValue('input', 5)),
        height=Number(getValue('input', 6))

    //output: diện tích: number; chu vi:number
    var square=width*height,
        peripheral=(width+height)*2;
    
    html('.form__footer', 3, 'Diện tích hình chữ nhật: '+square+ '(m2)' )
    html('.form__footer', 4, 'Chu vi hình chữ nhật: '+peripheral+ '(m2)' )
}

/* bài tập 5 */

select('button', 4).onclick=function(){
    //input: dãy ký tự số: number
    var number = getValue('input', 7);

    //output: tổng các ký tự số: number
    var sum = totalNumber(number)

    html('.form__footer', 5, 'Tổng các ký tự số của bạn là: ' + sum)
}