const fs = require('fs');
const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

var testDiv = document.getElementById('testDiv');
var select_tests = document.getElementById('select-test');
var problem_code;
var count = 0;
var input_data = [];
var output_data = [];
var final_data = [];

function collect_tests(callback) {
    for(var i = 1; i <= 10; i++) {
        try {throw i}
        catch(ii) {
            var fn = 'temp_codes/' + problem_code + '/inp' + ii;
            fs.readFile(fn, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                input_data[ii - 1] = data.toString();
                console.log(data.toString());
                var fn1 = 'temp_codes/' + problem_code + '/out' + ii;
                fs.readFile(fn1, function (err, data) {
                    if (err) {
                        return console.error(err);
                    }
                    output_data[ii - 1] = data.toString();
                    console.log(data.toString());
                    count += 1;
                    callback(ii);
                });
            });
        }
    }
}

require('electron').ipcRenderer.on('ping', (event, message) => {
    problem_code = message;
    collect_tests(function(ii) {
        console.log("para" + ii);
        var test_html = '<div id="testcase' + ii + '"><div class="test-head"><h5>Test ' + ii + ':</h5></div><div><textarea id="input' + ii + '">' + input_data[ii - 1] + '</textarea><textarea id="output' + ii + '">' + output_data[ii - 1] + '</textarea></div></div>';
        final_data[ii - 1] = test_html;
    });
});

function setTest() {
    testDiv.innerHTML = '';
    var ch = select_tests.options[select_tests.selectedIndex].text;
    count = ch;
    for(var i = 1; i <= ch; i++) {
        try {throw i}
        catch(ii) {
            if(input_data[ii - 1] != null) {
                var test_html = '<div id="testcase' + ii + '"><div class="test-head"><h5>Test ' + ii + ':</h5></div><div><textarea id="input' + ii + '">' + input_data[ii - 1] + '</textarea><textarea id="output' + ii + '">' + output_data[ii - 1] + '</textarea></div></div>';
                testDiv.innerHTML += test_html;
            }
            else {
                var test_html = '<div id="testcase' + ii + '"><div class="test-head"><h5>Test ' + ii + ':</h5></div><div><textarea placeholder="Enter input here:" id="input' + ii + '"></textarea><textarea placeholder="Enter output here:" id="output' + ii + '"></textarea></div></div>';
                testDiv.innerHTML += test_html;
            }
        }
    }
}

function deleteTest(element_id) {
    var f1 = "temp_codes/" + problem_code + '/inp' + element_id;
    var f2 = "temp_codes/" + problem_code + '/out' + element_id;
    if (fs.existsSync(f1)) {
        fs.unlink(f1, (err) => {
            if (err) {
                alert("An error ocurred updating the file" + err.message);
                console.log(err);
                return;
            }
            console.log("File succesfully deleted");
        });
    } else {
        console.log("This file doesn't exist, cannot delete");
    }
    if (fs.existsSync(f2)) {
        fs.unlink(f2, (err) => {
            if (err) {
                alert("An error ocurred updating the file" + err.message);
                console.log(err);
                return;
            }
            console.log("File succesfully deleted");
        });
    } else {
        console.log("This file doesn't exist, cannot delete");
    }
}

function testDone() {
    function testDone_1() {
        return new Promise(resolve => {
            fs.mkdir('temp_codes/' + problem_code);
            for(let ii = 1; ii <= count; ii++) {
                var inp = document.getElementById('input' + ii);
                var out = document.getElementById('output' + ii);
                if(inp != null && out != null) {
                    var fn = 'temp_codes/' + problem_code + '/inp' + ii;
                    var fn_data = inp.value;
                    fs.writeFile(fn, fn_data, function(err) {
                        if(err) {
                            return console.log(err);
                        }
                        console.log("file: " + fn + " was saved");
                    });
                    var fn1 = 'temp_codes/' + problem_code + '/out' + ii;
                    var fn1_data = out.value;
                    fs.writeFile(fn1, fn1_data, function(err) {
                        if(ii == count) resolve();
                        if(err) {
                            return console.log(err);
                        }
                        console.log("file: " + fn1 + " was saved");
                    });
                }
            }
        });
    }
    async function testDone_2() {
        var x = await testDone_1();
        let j = Number(count) + 1;
        console.log("delete start " + j);
        for(; j <= 10; j++) {
            console.log("delete " + j);
            deleteTest(j);
            if(j == 10) window.close();
        }
    }
    testDone_2();
}

setTimeout(function() {
    for(var i = 1; i <= 10; i++) {
        try{throw i}
        catch(ii) {
            if(final_data[ii - 1] != null) {
                testDiv.innerHTML += final_data[ii - 1];
            }
        }
    }
}, 100);