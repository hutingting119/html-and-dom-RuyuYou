function test() {
    var studentID = document.getElementById("studentID").value;
    var name = document.getElementById("name").value;

    if (studentID === "") {
        alert('请填写学号');
    }
    else if (name === "") {
        alert('请填写姓名');
    }
    else {
        var out = 0;
        var out1 = select(out);
        var out2 = radio(out1);
        var out3 = choice(out2);
        var out4 = judgment(out3);
        var out5 = answer(out4);
        document.getElementById("Score").value = out5;
    }
}

function select(out) {
    var score11 = document.getElementById("1.1").value;
    if (score11 === "统一建模语言") {
        out += 5;
    }

    var score211 = document.getElementById("2.11").value;
    if (score211 === "封装性") {
        out += 5;
    }

    var score212 = document.getElementById("2.12").value;
    if (score212 === "继承性") {
        out += 5;
    }

    var score213 = document.getElementById("2.13").value;
    if (score213 === "多态性") {
        out += 5;
    }
    return out;
}

function radio(out1) {
    var score21 = document.getElementById("2.1b");
    if (score21.checked === true) {
        out1 + 10;
    }

    var score22 = document.getElementById("2.2b");
    if (score22.checked === true) {
        out1 += 10;
    }

    return out1;
}

function choice(out2) {
    var score311 = document.getElementById("3.1a");
    var score312 = document.getElementById("3.1b");
    var score313 = document.getElementById("3.1c");
    var score314 = document.getElementById("3.1d");

    if (score313.checked === true || score311.checked === false && score312.checked === false && score314.checked === false) {
        out2 += 0;
    }
    else if (score311.checked === true && score312.checked === true && score314.checked === true) {
        out2 += 10;
    }
    else {
        out2 += 5;
    }

    var score321 = document.getElementById("3.2a");
    var score322 = document.getElementById("3.2b");
    var score323 = document.getElementById("3.2c");
    var score324 = document.getElementById("3.2d");

    if (score324.checked === true || score321.checked === false && score322.checked === false && score323.checked === false) {
        out2 += 0;
    }
    else if (score321.checked === true && score322.checked === true && score323.checked === true) {
        out2 += 10;
    }
    else {
        out2 += 5;
    }

    return out2;
}

function judgment(out3) {

    var score412 = document.getElementById("412");
    if (score412.checked === true) {
        out3 += 10;
    }

    var score421 = document.getElementById("421");
    if (score421.checked === true) {
        out3 += 10;
    }

    return out3;
}

function answer(out4) {
    var score51 = document.getElementById("5.1").value;

    if (score51 === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。" +
        "可以是物理实体;可以是某种图形;或者是一种数学表达式。") {
        out4 += 20;
    }
    return out4;
}
