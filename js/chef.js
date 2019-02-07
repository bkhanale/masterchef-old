const electron = require('electron');
const request = require('request');
const fs = require('fs');
const md = require('markdown-it')();
const mk = require('markdown-it-katex');
const {cpp, python, java} = require('compile-run');
const shell = electron.shell;
const BrowserWindow = electron.remote.BrowserWindow;

const client_id = 'a64e6f881ea98d7244e14bf53cc893d5';
const client_secret = '6fb7a9e8d6c9517edf12f28246fb3bd8';
const server_1 = 'http://127.0.0.1';

var contest_but = document.getElementById('conbut');
var problem_but = document.getElementById('probut');
var problem_code_ = document.getElementById('problem_code');
var contest_code = document.getElementById('contest_code');
var dropdown_problems = document.getElementById('dropdown-content');
var problem_name = document.getElementById('problem-name');
var problem_code = document.getElementById('problem-code');
var problem_submissions = document.getElementById('problem-submissions');
var problem_accuracy = document.getElementById('problem-accuracy');
var problem_data_content = document.getElementById('problem-data-content');
var lang_select = document.getElementById('select_lang_option');
var copysrc_but = document.getElementById('copysrcbut');
var run_but = document.getElementById('runbut');
var run_check_but = document.getElementById('runchkbut');
var edit_test_but = document.getElementById('edittestbut');
var output_section = document.getElementById('output-section');
var user_lang = 'C++';

var access_code;
var contestData;
var problemData = [];

md.use(mk);

contest_but.addEventListener("click", handleConbut);
problem_but.addEventListener("click", handleProbut);
copysrc_but.addEventListener("click", handleCopysrcbut);
run_but.addEventListener("click", handlerunbut);
edit_test_but.addEventListener("click", handletestbut);
run_check_but.addEventListener("click", handleruncheckbut);

var editor = CodeMirror(document.getElementById("codemirror-textarea"), {
    mode: "text/x-c++src",
    lineNumbers: true,
    value: '#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    cout << "Hello C++";\n    return 0;\n}',
    theme: "monokai",
    indentUnit: 4,
    styleActiveLine: true,
    matchBrackets: true,
    autoCloseBrackets: true
});

editor.setSize(null, "90%");

function selectLanguage() {
    var pro_code = problem_code.textContent;
    pro_code = pro_code.replace('Problem Code: ', '');
    var template_c = '#include <stdio.h>\nint main() {\n    printf("Hello C!");\n    return 0;\n}';
    var template_cpp = '#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    cout << "Hello C++";\n    return 0;\n}';
    var template_java = 'class ' + pro_code + '{\n    public static void main(String args[]) {\n        System.out.println("Hello Java!");\n    }\n}';
    var template_python = 'print("Hello Python!")';
    editor.setOption("mode", lang_select.options[lang_select.selectedIndex].id);
    var lang = lang_select.options[lang_select.selectedIndex].text;
    if(lang == 'C') editor.setOption("value", template_c);
    else if(lang == 'C++') editor.setOption("value", template_cpp);
    else if(lang == 'Java') editor.setOption("value", template_java);
    else if(lang == 'Python') editor.setOption("value", template_python);
    user_lang = lang_select.options[lang_select.selectedIndex].text;
}

var test_window = null;

function handletestbut() {
    var pro_code = problem_code.textContent;
    pro_code = pro_code.replace('Problem Code: ', '');
    fs.mkdir('temp_codes/' + pro_code);
    if(test_window) {
        test_window.focus();
        return;
    }
    test_window = new BrowserWindow({
        height: 400,
        resizable: false,
        width: 400,
        title: pro_code,
        minimizable: false,
        fullscreenable: false
    });
    test_window.loadURL('file://' + __dirname + '/addTests.html')
    test_window.on('closed', function() {
        test_window = null;
    });
    test_window.webContents.on('did-finish-load', () => {
        test_window.webContents.send('ping', pro_code)
    });
}

function handlerunbut() {
    console.log(user_lang);
    if(user_lang == 'C++' || user_lang == 'C') {
        var pro_code = problem_code.textContent;
        pro_code = pro_code.replace('Problem Code: ', '');
        fs.mkdir('temp_codes/' + pro_code);
        var user_code = editor.getValue();
        let file_name = 'temp_codes/' + pro_code + '/' + pro_code + '.cpp';
        fs.writeFile(file_name, user_code, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("file was saved");
        });
        let resultPromise = cpp.runFile(file_name, {
            compileTimeout: 20000
        });
        resultPromise
            .then(result => {
                console.log(result);
                output_section.innerHTML = '';
                var out = document.createElement('pre');
                out.innerText = result.stderr + result.stdout;
                output_section.appendChild(out);
            })
            .catch(err => {
                var out = document.createElement('pre');
                out.innerText = err;
                output_section.appendChild(out);
            });
    }
    else if(user_lang == 'Python') {
        var pro_code = problem_code.textContent;
        pro_code = pro_code.replace('Problem Code: ', '');
        fs.mkdir('temp_codes/' + pro_code);
        var user_code = editor.getValue();
        let file_name = 'temp_codes/' + pro_code + '/' + pro_code + '.py';
        fs.writeFile(file_name, user_code, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("file was saved");
        });
        let resultPromise = python.runFile(file_name, {
            compileTimeout: 20000
        });
        resultPromise
            .then(result => {
                console.log(result);
                output_section.innerHTML = '';
                var out = document.createElement('pre');
                out.innerText = result.stderr + result.stdout;
                output_section.appendChild(out);
            })
            .catch(err => {
                var out = document.createElement('pre');
                out.innerText = err;
                output_section.appendChild(out);
            });
    }
    else if(user_lang == 'Java') {
        var pro_code = problem_code.textContent;
        pro_code = pro_code.replace('Problem Code: ', '');
        fs.mkdir('temp_codes/' + pro_code);
        var user_code = editor.getValue();
        let file_name = 'temp_codes/' + pro_code + '/' + pro_code + '.java';
        fs.writeFile(file_name, user_code, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("file was saved");
        });
        let resultPromise = java.runFile(file_name, {
            compileTimeout: 20000
        });
        resultPromise
            .then(result => {
                console.log(result);
                output_section.innerHTML = '';
                var out = document.createElement('pre');
                out.innerText = result.stderr + result.stdout;
                output_section.appendChild(out);
            })
            .catch(err => {
                var out = document.createElement('pre');
                out.innerText = err;
                output_section.appendChild(out);
            });
    }
}

function runandsave() {
    return new Promise(function(Mresolve, Mreject) {
        if(user_lang == 'C++' || user_lang == 'C') {
            var pro_code = problem_code.textContent;
            pro_code = pro_code.replace('Problem Code: ', '');
            fs.mkdir('temp_codes/' + pro_code);
            var user_code = editor.getValue();
            let file_name = 'temp_codes/' + pro_code + '/' + pro_code + '.cpp';
            fs.writeFile(file_name, user_code, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("file was saved");
            });
            output_section.innerHTML = ''; var check_cnt;
            for(let iter = 1; iter <= 10; iter++) {
                var std_input, flag = true;
                async function fr() {
                    var obj = await new Promise(function(resolve) {
                        fs.readFile('temp_codes/' + pro_code + '/inp' + iter, function (err, data) {
                            if (err) {
                                flag = false;
                                return console.error(err);
                            }
                            console.log(data.toString());
                            std_input = data.toString();
                            resolve(std_input);
                            check_cnt = iter;
                        });
                    });
                }
                fr().then(result_read => {
                    console.log("stdinput: " + std_input);
                    let resultPromise = cpp.runFile(file_name, {
                        stdin: std_input,
                        compileTimeout: 20000
                    });
                    resultPromise
                        .then(result => {
                            console.log(result);
                            var out = document.createElement('pre');
                            var def_o = 'Running for test ' + iter + ':\n';
                            out.innerText = def_o + result.stderr + result.stdout;
                            output_section.appendChild(out);
                            fs.writeFile('temp_codes/' + pro_code + '/stdout' + iter, result.stdout, function(err) {
                                if(err) {
                                    return console.log(err);
                                }
                                if(iter == check_cnt) Mresolve();
                                console.log("output was saved");
                            });
                        })
                        .catch(err => {
                            var out = document.createElement('pre');
                            out.innerText = err;
                            output_section.appendChild(out);
                        });
                });
            }
        }
        else if(user_lang == 'Python') {
            var pro_code = problem_code.textContent;
            pro_code = pro_code.replace('Problem Code: ', '');
            fs.mkdir('temp_codes/' + pro_code);
            var user_code = editor.getValue();
            let file_name = 'temp_codes/' + pro_code + '/' + pro_code + '.py';
            fs.writeFile(file_name, user_code, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("file was saved");
            });
            output_section.innerHTML = ''; var check_cnt;
            for(let iter = 1; iter <= 10; iter++) {
                var std_input, flag = true;
                async function fr() {
                    var obj = await new Promise(function(resolve) {
                        fs.readFile('temp_codes/' + pro_code + '/inp' + iter, function (err, data) {
                            if (err) {
                                flag = false;
                                return console.error(err);
                            }
                            console.log(data.toString());
                            std_input = data.toString();
                            resolve(std_input);
                            check_cnt = iter;
                        });
                    });
                }
                fr().then(result_read => {
                    console.log("stdinput: " + std_input);
                    let resultPromise = python.runFile(file_name, {
                        stdin: std_input,
                        compileTimeout: 20000
                    });
                    resultPromise
                        .then(result => {
                            console.log(result);
                            var out = document.createElement('pre');
                            var def_o = 'Running for test ' + iter + ':\n';
                            out.innerText = def_o + result.stderr + result.stdout;
                            output_section.appendChild(out);
                            fs.writeFile('temp_codes/' + pro_code + '/stdout' + iter, result.stdout, function(err) {
                                if(iter == 10) {
                                    resolve();
                                }
                                if(err) {
                                    return console.log(err);
                                }
                                if(iter == check_cnt) Mresolve();
                                console.log("output was saved");
                            });
                        })
                        .catch(err => {
                            var out = document.createElement('pre');
                            out.innerText = err;
                            output_section.appendChild(out);
                        });
                });
                
            }
        }
        else if(user_lang == 'Java') {
            var pro_code = problem_code.textContent;
            pro_code = pro_code.replace('Problem Code: ', '');
            fs.mkdir('temp_codes/' + pro_code);
            var user_code = editor.getValue();
            let file_name = 'temp_codes/' + pro_code + '/' + pro_code + '.java';
            fs.writeFile(file_name, user_code, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("file was saved");
            });
            output_section.innerHTML = ''; var check_cnt;
            for(let iter = 1; iter <= 10; iter++) {
                var std_input, flag = true;
                async function fr() {
                    var obj = await new Promise(function(resolve) {
                        fs.readFile('temp_codes/' + pro_code + '/inp' + iter, function (err, data) {
                            if (err) {
                                flag = false;
                                return console.error(err);
                            }
                            console.log(data.toString());
                            std_input = data.toString();
                            resolve(std_input);
                            check_cnt = iter;
                        });
                    });
                }
                fr().then(result_read => {
                    console.log("stdinput: " + std_input);
                    let resultPromise = java.runFile(file_name, {
                        stdin: std_input,
                        compileTimeout: 20000
                    });
                    resultPromise
                        .then(result => {
                            console.log(result);
                            var out = document.createElement('pre');
                            var def_o = 'Running for test ' + iter + ':\n';
                            out.innerText = def_o + result.stderr + result.stdout;
                            output_section.appendChild(out);
                            fs.writeFile('temp_codes/' + pro_code + '/stdout' + iter, result.stdout, function(err) {
                                if(iter == 10) {
                                    resolve();
                                }
                                if(err) {
                                    return console.log(err);
                                }
                                if(iter == check_cnt) Mresolve();
                                console.log("output was saved");
                            });
                        })
                        .catch(err => {
                            var out = document.createElement('pre');
                            out.innerText = err;
                            output_section.appendChild(out);
                        });
                });
            }
        }
    });
}

function handleruncheckbut() {
    var pro_code = problem_code.textContent;
    pro_code = pro_code.replace('Problem Code: ', '');
    var RunSave = runandsave();
    RunSave.then(function() {
        var outputPromise = cpp.runFile('run_check.cpp', {
            stdin: pro_code,
            compileTimeout: 20000
        });
        outputPromise
            .then(result => {
                console.log(result);
                var out = document.createElement('pre');
                out.innerText = result.stdout;
                output_section.appendChild(out);
            })
            .catch(err => {
                var out = document.createElement('pre');
                out.innerText = err;
                output_section.appendChild(out);
            })
    }, function() {
        console.log("Something is fishy!");
    });
}

function handleCopysrcbut() {
    const temp = document.createElement('textarea');
    temp.value = editor.getValue();
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
}

function getAccessCode() {
    var data = {
        "grant_type": "client_credentials",
        "scope": "public",
        "client_id": client_id,
        "client_secret": client_secret,
        "redirect_uri": server_1
    };
    var header = {'content-Type': 'application/json'};
    var options = {
        url: 'https://api.codechef.com/oauth/token',
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
    };
    function callback(error, response, body) {
        body = JSON.parse(body);
        if(!error && response.statusCode == 200) {
            access_code = body.result.data.access_token;
            console.log("Access code generated!\n" + access_code);
        } else {
            console.log(error);
        }
    }
    request(options, callback);
}

function getAccessCodeOnce() {
    var data = {
        "grant_type": "client_credentials",
        "scope": "public",
        "client_id": client_id,
        "client_secret": client_secret,
        "redirect_uri": server_1
    };
    var header = {'content-Type': 'application/json'};
    var options = {
        url: 'https://api.codechef.com/oauth/token',
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
    };
    return new Promise(function(resolve, reject) {
        function callback(error, response, body) {
            body = JSON.parse(body);
            if(!error && response.statusCode == 200) {
                access_code = body.result.data.access_token;
                resolve(body.result.data.access_token);
            } else {
                reject(error);
            }
        }
        request(options, callback);    
    });
}

function getPastContest() {
    var header = {'Accept': 'application/json', 'Authorization':'Bearer ' + access_code};
    var options = {
        url: 'https://api.codechef.com/contests?status=past&limit=1',
        method: 'GET',
        headers: header
    };
    return new Promise(function(resolve, reject) {
        function callback(error, response, body) {
            body = JSON.parse(body);
            if(!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        }
        request(options, callback);
    });
}

function getContestData(contestCode) {
    var header = {'Accept': 'application/json', 'Authorization':'Bearer ' + access_code};
    var options = {
        url: 'https://api.codechef.com/contests/' + contestCode + '?sortBy=successfulSubmissions&sortOrder=desc',
        method: 'GET',
        headers: header
    };
    return new Promise(function(resolve, reject) {
        function callback(error, response, body) {
            body = JSON.parse(body);
            if(!error && response.statusCode == 200) {
                contestData = body;
                resolve(body);
            } else {
                reject(error);
            }
        }
        request(options, callback);
    });
}

function getProblemData(contestCode, problemCode) {
    var header = {'Accept': 'application/json', 'Authorization':'Bearer ' + access_code};
    var options = {
        url: 'https://api.codechef.com/contests/' + contestCode + '/problems/' + problemCode,
        method: 'GET',
        headers: header
    };
    return new Promise(function(resolve, reject) {
        function callback(error, response, body) {
            body = JSON.parse(body);
            if(!error && response.statusCode == 200) {
                problemData.push(body);
                resolve();
            } else {
                console.log(body);
                if(body.result.errors[0].code == 'unauthorized') {
                    getAccessCode();
                    getProblemData(contestCode, problemCode);
                }
                reject();
            }
        }
        request(options, callback);    
    });
}

function collectProblemData(result, contestCode) {
    return new Promise(function(resolve, reject) {
        for(let j = 0; j < result.result.data.content.problemsList.length; j++) {
            var ProblemData = getProblemData(contestCode, result.result.data.content.problemsList[j].problemCode);
            ProblemData.then(function() {
                if(problemData.length == result.result.data.content.problemsList.length) {
                    resolve();
                }
            }, function() {
                console.log("Everything did not go well!");
                reject();
            });
            console.log(problemData.length + result.result.data.content.problemsList.length);
        }
    });
        
}

function loadProblem(problemCode) {
    for(let j = 0; j < contestData.result.data.content.problemsList.length; j++) {
        var problemCode_1 = contestData.result.data.content.problemsList[j].problemCode;
        if(problemCode == problemCode_1) {
            for(let l= 0; l < problemData.length; l++) {
                if(problemData[l].result.data.content.problemCode == problemCode) {
                    console.log(problemData[l]);
                    problem_name.textContent = "Problem Name: " + problemData[l].result.data.content.problemName;
                    problem_data_content.innerHTML = problemData[l].result.data.content.body;
                    problem_data_content.innerHTML = md.render(problem_data_content.innerText);
                }
            }
            problem_code.textContent = "Problem Code: " + contestData.result.data.content.problemsList[j].problemCode;
            problem_submissions.textContent = "Submissions: " + contestData.result.data.content.problemsList[j].successfulSubmissions;
            problem_accuracy.textContent = "Accuracy: " + contestData.result.data.content.problemsList[j].accuracy;
        }
    }
}

function loadSingleProblem() {
    console.log(problemData);
    problem_name.textContent = "Problem Name: " + problemData[0].result.data.content.problemName;
    problem_data_content.innerHTML = problemData[0].result.data.content.body;
    problem_data_content.innerHTML = md.render(problem_data_content.innerText);
    problem_code.textContent = "Problem Code: " + problemData[0].result.data.content.problemCode;
    problem_submissions.textContent = "Submissions: " + problemData[0].result.data.content.successfulSubmissions;
    problem_accuracy.textContent = "Accuracy: " + (problemData[0].result.data.content.successfulSubmissions / problemData[0].result.data.content.totalSubmissions * 100) + '%';
}

function handleProbut() {
    if(problem_code_.value != '') {
        if(contest_code.value == '') contest_code.value = 'PRACTICE';
        problemData = []; contestData = null;
        var ProblemData = getProblemData(contest_code.value, problem_code_.value);
        ProblemData.then(function() {
            dropdown_problems.innerHTML = '';
            loadSingleProblem(problem_code_.value);
            addProblemButtons();
            var user_save = 'var userProblemData = ' + JSON.stringify(problemData) + ';';
            user_save += 'var userContestData = null;';
            fs.writeFile('js/user.js', user_save, function(error) {
                if(error) {
                    return console.log(error);
                }
                console.log("user data was saved!");
            });
        }, function() {
            console.log("No problem found!");
        });
    }
}

function addProblemButtons() {
    for(let j = 0; j < problemData.length; j++) {
        var proListElement = document.createElement('button');
        proListElement.setAttribute('id', problemData[j].result.data.content.problemCode);
        proListElement.onclick = function () {
            loadProblem(problemData[j].result.data.content.problemCode);
        }
        proListElement.textContent = problemData[j].result.data.content.problemCode;
        dropdown_problems.appendChild(proListElement);
    }
}

function handleConbut() {
    if(contest_code.value != '') {
        var ContestData = getContestData(contest_code.value);
        ContestData.then(function(result) {
            problemData = []; dropdown_problems.innerHTML = '';
            var CollectProblemData = collectProblemData(result, contest_code.value);
            CollectProblemData.then(function() {
                addProblemButtons();
                loadProblem(problemData[0].result.data.content.problemCode);
                var user_save = 'var userProblemData = ' + JSON.stringify(problemData) + ';';
                user_save += 'var userContestData = ' + JSON.stringify(contestData) + ';';
                fs.writeFile('js/user.js', user_save, function(error) {
                    if(error) {
                        return console.log(error);
                    }
                    console.log("user data was saved!");
                });
            }, function() {
                console.log("Couldn't get all problem data!");
            });
        }, function(error) {
            console.log("No contest found!");
        });
    }
}

function loadUserData() {
    if(userContestData != null) {
        problemData = userProblemData;
        contestData = userContestData;
        loadProblem(problemData[0].result.data.content.problemCode);
        addProblemButtons();
    }
    else if(userProblemData != null) {
        problemData = userProblemData;
        loadSingleProblem(problemData[0].result.data.content.problemCode);
    } else {
        console.log("No user data found!");
    }
}

function createTempCodes() {
    fs.mkdir('temp_codes');
    if(!fs.existsSync('run_check.cpp')) {
        var run_check_code =
`#include <bits/stdc++.h>
using namespace std;

int main() {
    string problem;
    cin >> problem;
    for(int i = 1; i <= 10; i++) {
        char ch = i + '0';
        string out_file_1 = "temp_codes/" + problem + "/" + "out" + ch;
        string out_file_2 = "temp_codes/" + problem + "/" + "stdout" + ch;
        ifstream file1, file2;
        try {
            ifstream file1, file2;
            file1.open(out_file_1.c_str(), ios::in);
            file2.open(out_file_2.c_str(), ios::in);
            if(!file1.good() || !file2.good()) continue;
            vector<string> c1, c2;
            string line;
            while(getline(file1, line)) {
                c1.push_back(line);
            }
            file1.close();
            while(getline(file2, line)) {
                c2.push_back(line);
            }
            file2.close();
            cout << "Checking " << i << ":\\n";
            if(c1.size() != c2.size()) {
                cout << "TEST " << i << ": WA\\n\\n";
                continue;
            }
            bool flag = true;
            for(int i = 0; i < c1.size(); i++) {
                cout << "Expected:\\n" << c1[i] << "\\n";
                cout << "Returned:\\n" << c2[i] << "\\n";
                if(c1[i] != c2[i]) {
                    flag = false;
                    break;
                }
            }
            if(!flag) cout << "TEST " << i << ": WA\\n\\n";
            else cout << "TEST " << i << ": AC\\n\\n";
        } catch(...) {
            continue;
        }
    }
    return 0;
}`;
        fs.writeFile('run_check.cpp', run_check_code, function(error) {
            if(error) {
                return console.log(error);
            }
            console.log("run_check was saved!");
        });
    }
}

document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
        event.preventDefault();
        shell.openExternal(event.target.href);
    }
});

onload = function() {
    createTempCodes();
    loadUserData();
    getAccessCode();
    setInterval(getAccessCode, 59 * 60 * 1000);
}
