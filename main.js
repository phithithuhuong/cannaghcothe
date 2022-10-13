function xuly() {
    let weight = document.getElementById('say').value;// lấy giá trị của người nhập vào
    let height = document.getElementById('mom').value;
    let handsome = document.getElementById('result');// lấy id để hiện ra màn hình
    let bmi = weight / (height ** 2);// công thức tính
    if (bmi < 18.5) {
         handsome.innerHTML='Underweight'; //innerHTML thường dùng để hiển thị ra màn hình
    } else if (bmi < 25) {
        handsome.innerHTML='Nomal';
    } else if (bmi < 30) {
        handsome.innerHTML='Overweight';
    }
    if (30 <= bmi) {
        handsome.innerHTML='Obese';
    }


}