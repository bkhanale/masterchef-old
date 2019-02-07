var userProblemData = [{"status":"OK","result":{"data":{"content":{"problemCode":"TABGAME","problemName":"Table Game","dateAdded":"2018-08-28","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":1,"challengeType":"subtask","author":"melfice","successfulSubmissions":131,"totalSubmissions":192,"partialSubmissions":175,"tags":["easy","game-theory","observations","sept18","string"],"body":"###Read problems statements [Hindi](http://www.codechef.com/download/translated/SEPT18/hindi/TABGAME.pdf) ,[Bengali](http://www.codechef.com/download/translated/SEPT18/bengali/TABGAME.pdf) , [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/TABGAME.pdf) , [Russian](http://www.codechef.com/download/translated/SEPT18/russian/TABGAME.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/TABGAME.pdf) as well.<br /><br /><br />Alice and Bob are playing a game with a $(N+1)\\times (M+1)$ table. Let's denote the cell in the $i$-th row and $j$-th column ($0 \\le i \\le N$, $0 \\le j \\le M$) by $(i, j)$. The rules of the game are:<br />- At the beginning, a stone is placed in some cell of the table.<br />- The players alternate turns, Alice goes first. <br />- In each turn, the current player must move the stone from its current cell (let's denote it by $(x, y)$) to the cell $(x-1, y)$ or to the cell $(x, y-1)$.<br />- As soon as the stone is placed in a cell $(x, y)$ with $x=0$ or $y=0$, the game ends.<br />- The winner of the game is determined by the cell the stone ended up in and the player who moved it there; you are given this information for all possible terminal cells on the input. (Note that the stone never reaches the cell $(0, 0)$.)<br /><br />You should answer $Q$ queries. In each query, you are given the initial position $(x, y)$ of the stone, and you should determine the winner of the game.<br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first line of each test case contains a single string with length $M$. For each $i$ ($1 \\le i \\le M$), the $i$-th digit of this string is '1' if the player that moves the stone to the cell $(0, i)$ loses the game or '0' if this player wins.<br />- The second line contains a single string with length $N$. For each $i$ ($1 \\le i \\le N$), the $i$-th digit of this string is '1' if the player that moves the stone to the cell $(i, 0)$ loses the game or '0' if this player wins.<br />- The third line contains a single integer $Q$ denoting the number of queries.<br />- Each of the following $Q$ lines contains two space-separated integers $x$ and $y$ describing one query.<br /><br />### Output<br />For each test case, print a single line containing a string with length $Q$. For each valid $i$, the $i$-th digit should be '1' if Alice wins the game for query $i$ or '0' if Bob wins that game.<br /><br />### Constraints <br />- $1 \\le N, M, Q \\le 10^5$<br />- $1 \\le x \\le N$<br />- $1 \\le y \\le M$<br />- the sum of $N+M+Q$ over all test cases does not exceed $10^6$<br /><br />### Subtasks<br />**Subtask #1 (30 points):** the sum of $N+M$ over all test cases does not exceed $10^3$<br /><br />**Subtask #2 (70 points):** original constraints<br /><br />### Example Input<br />```<br />1<br />101<br />01<br />6<br />1 1<br />1 2<br />1 3<br />2 1<br />2 2<br />2 3<br />```<br /><br />### Example Output<br />```<br />110011<br />```<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"CHEFADV","problemName":"Chef and Adventures","dateAdded":"2018-08-27","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":0,"challengeType":"subtask","author":"mgch","successfulSubmissions":366,"totalSubmissions":539,"partialSubmissions":35,"tags":["divisbility","hindi","math","modulo","sept18","simple"],"body":"###Read problems statements [Hindi](http://www.codechef.com/download/translated/SEPT18/hindi/CHEFADV.pdf) ,[Bengali](http://www.codechef.com/download/translated/SEPT18/bengali/CHEFADV.pdf) , [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/CHEFADV.pdf) , [Russian](http://www.codechef.com/download/translated/SEPT18/russian/CHEFADV.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/CHEFADV.pdf) as well.<br /><br /><br />Mysterious Chefland... Recently, Chef realised that Discuss, the educational system of Chefland, is out of date. Therefore, he is trying to find ways to update the infrastructure in the country. One possible way is to move all materials from Discuss to Discourse.<br /><br />Chef will have access to Discourse if his *knowledge* and *power* become exactly equal to $N$ and $M$ respectively. Initially, he has power $1$ and knowledge $1$.<br /><br />Chef can perform actions of the following types to improve his skills:<br />- solve a problem — increase his knowledge by $X$<br />- do a push-up — increase his power by $Y$<br />- install ShareChat to keep in touch with friends — increase both knowledge and power by $1$<br /><br />Chef can only install ShareChat at most once. The remaining actions may be performed any number of times and the actions may be performed in any order.<br /><br />Help Chef find out whether it is possible to move from Discuss to Discourse.<br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first and only line of each test case contains four space-separated integers $N$, $M$, $X$ and $Y$.<br /><br />### Output<br />For each test case, print a single line containing the string `\"Chefirnemo\"` if it is possible to reach the required knowledge and power or `\"Pofik\"` if it is impossible.<br /><br />### Constraints <br />- $1 \\le T \\le 1,000$<br />- $1 \\le N, M, X, Y \\le 10^9$<br /><br />### Subtasks<br />**Subtask #1 (30 points):** $1 \\le N, M, X, Y \\le 100$<br /><br />**Subtask #2 (70 points):** original constraints<br /><br />### Example Input<br />```<br />5<br />2 2 1 2<br />11 10 5 9<br />11 11 5 9<br />12 11 5 9<br />1 2 1 100<br />```<br /><br />### Example Output<br />```<br />Chefirnemo<br />Chefirnemo<br />Pofik<br />Chefirnemo<br />Pofik<br />```<br /><br />### Explanation<br />**Example case 2:** We add $Y=9$ once to the power to get power $10$. We add $X=5$ twice to the knowledge to get knowledge $11$.<br /><br />**Example case 3:** We can see that it is impossible to reach power $M=11$ no matter which or how many operations we do. Note that the ShareChat operation will increase both knowledge and power by $1$, and hence it will still be impossible to attain the given values of knowledge and power at the same time.<br /><br />**Example case 4:** We can reach knowledge $11$ and power $10$ like in example case 2, the only difference is that we also use the ShareChat operation to increase both by $1$.<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"XORIER","problemName":"War of XORs","dateAdded":"2018-08-23","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":1,"challengeType":"subtask","author":"priyanshi_","successfulSubmissions":284,"totalSubmissions":384,"partialSubmissions":382,"tags":["easy","observations","sept18","xor"],"body":"###Read problems statements [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/XORIER.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/XORIER.pdf) as well.<br /><br /><br />Chef is stuck at the following problem. Help him solve it!<br /><br />Chef has a sequence of integers $A_1, A_2, \\dots, A_N$. He should find the number of pairs $(i, j)$ such that $1 \\le i \\lt j \\le N$ and the bitwise XOR of $A_i$ and $A_j$ can be written as a sum of two (not necessarily different) prime numbers with the same parity (both odd or both even).<br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first line of each test case contains a single integer $N$. <br />- The second line contains $N$ space-seprated integers $A_1, A_2, \\dots, A_N$.<br /><br />### Output<br />For each test case, print a single line containing one integer — the number of valid pairs.<br /><br />### Constraints<br />- $1 \\le T \\le 10$<br />- $1 \\le N \\le 10^5$<br />- $1 \\le A_i \\le 10^6$ for each valid $i$<br /><br />### Subtasks<br />**Subtask #1 (10 points):** $1 \\le N \\le 10^3$<br /><br />**Subtask #2 (90 points):** original constraints<br /><br />### Example Input<br />```<br />1<br />5<br />2 4 8 1 3<br />```<br /><br />### Example Output<br />```<br />3<br />```<br /><br />### Explanation <br />**Example case 1:** The three valid pairs are $(1, 2)$, $(1, 3)$ and $(2, 3)$. For example, $A_1 \\oplus A_2 = 2 \\oplus 4 = 6 = 3+3$.<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"ANDSQR","problemName":"AND Square Subsegments","dateAdded":"2018-03-30","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":3,"challengeType":"subtask","author":"shavelv","successfulSubmissions":76,"totalSubmissions":108,"partialSubmissions":107,"tags":["and","bit","fenwick-tree","lazy-propagation","observation","pre-processign","seg-tree","sept18"],"body":"###Read problems statements [Hindi](http://www.codechef.com/download/translated/SEPT18/hindi/ANDSQR.pdf) ,[Bengali](http://www.codechef.com/download/translated/SEPT18/bengali/ANDSQR.pdf) , [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/ANDSQR.pdf) , [Russian](http://www.codechef.com/download/translated/SEPT18/russian/ANDSQR.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/ANDSQR.pdf) as well.<br /><br />You are given a sequence of non-negative integers $A_1, A_2, \\dots, A_N$ and $Q$ queries. A sequence is *good* if the bitwise AND of all its elements is a perfect square. In each query:<br />- you are given two parameters $L$ and $R$<br />- consider the subsequence $B = A_L, A_{L+1}, \\dots, A_R$<br />- you should find the number of good **contiguous** subsequences of $B$ <br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first line of each test case contains two space-separated integers $N$ and $Q$.<br />- The second line contains $N$ space-separated integers $A_1, A_2, \\dots, A_N$.<br />- Each of the following $Q$ lines contains two space-separated integers $L$ and $R$ describing one query.<br /><br />### Output<br />For each query, print a single line containing one integer — the number of good contiguous subsequences.<br /><br />### Constraints <br />- $1 \\le T \\le 1,000$<br />- $1 \\le N \\le 10^5$<br />- $0 \\le A_i \\lt 2^{30}$ for each valid $i$<br />- $1 \\le Q \\le 5 \\cdot 10^5$<br />- $1 \\le L \\le R \\le N$<br />- the sum of $N$ over all test cases does not exceed $10^5$<br />- the sum of $Q$ over all test cases does not exceed $5 \\cdot 10^5$<br /><br />### Subtasks<br />**Subtask #1 (30 points):**<br />- the sum of $N$ over all test cases does not exceed $100$<br />- the sum of $Q$ over all test cases does not exceed $100$<br /><br />**Subtask #2 (70 points):** original constraints<br /><br />### Example Input<br />```<br />1<br />3 2<br />1 2 3<br />2 2<br />1 3<br />```<br /><br />### Example Output<br />```<br />0<br />3<br />```<br /><br />### Explanation<br />**Example case 1:** For the first query, there is only one possible subsequence, $[2]$. The AND of its elements is equal to its only element $2$, which is not a perfect square.<br /><br />For the second query, there are six contiguous subsequences:<br />- $[1]$; its AND is 1, a perfect square<br />- $[1, 2]$; its AND is 0, a perfect square<br />- $[1, 2, 3]$; its AND is 0, a perfect square<br />- $[2]$; its AND is 2, not a perfect square<br />- $[2, 3]$; its AND is 2, not a perfect square<br />- $[3]$; its AND is 3, not a perfect square<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"CHEFLST","problemName":"Chef and Lost Story","dateAdded":"2018-08-18","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":2,"challengeType":"subtask","author":"bciobanu","successfulSubmissions":8,"totalSubmissions":9,"partialSubmissions":25,"tags":[],"body":"Once upon a time, in a land far, far away... nevermind, we don't recall the rest of the story.<br /><br />All we know is that Chef has a matrix of integers $M$ with $N$ rows and $N$ columns; he wants to take a single element from each row and a single element from each column ($N$ elements in total) and find their [bitwise XOR](https://en.wikipedia.org/wiki/Bitwise_operation#XOR). Find the set of all values he could obtain.<br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first line of each test case contains a single integer $N$. <br />- $N$ lines follow. For each $i$ ($1 \\le i \\le N$), the $i$-th of the following lines contains $N$ space-separated integers $M_{i, 1}, M_{i, 2}, \\dots, M_{i, N}$.<br /><br />### Output<br />For each test case, print a single line containing one or more space-separated integers in increasing order — the obtainable values.<br /><br />### Constraints <br />- $1 \\le T \\le 7$<br />- $1 \\le N \\le 60$<br />- $0 \\le M_{i, j} \\le 1,023$ for each valid $i, j$<br /><br />### Subtasks<br />**Subtaks #1 (5 points):** $1 \\le N \\le 10$<br /><br />**Subtask #2 (20 points):** $1 \\le N \\le 14$<br /><br />**Subtaks #3 (5 points):** $0 \\le M_{i, j} \\le 1$ for each valid $i, j$<br /><br />**Subtask #4 (70 points):** original constraints<br /><br />### Example Input<br />```<br />1<br />3<br />5 9 15<br />19 7 2<br />1 0 0<br />```<br /><br />### Example Output<br />```<br />2 7 9 10 26 28<br />```<br /><br />### Explanation<br />**Example case 1:** We could choose $M_{1, 1} = 5$ and $M_{2, 2} = 7$; since we are only allowed to choose one element from each row and one from each column, we cannot choose anything else from rows 1, 2 and columns 1, 2, so we have to choose $M_{3, 3} = 0$. Their XOR is $5 \\oplus 7 \\oplus 0 = 2$.<br /><br />Another combination could be $M_{1, 3} = 15$, $M_{2, 1} = 19$ and $M_{3, 2} = 0$. Their XOR is $15 \\oplus 19 \\oplus 0 = 28$.<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"CHEFZERO","problemName":"Chef and Condition Zero (Challenge)","dateAdded":"2018-08-24","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":5,"challengeType":"minimize","author":"mgch","successfulSubmissions":20,"totalSubmissions":24,"partialSubmissions":0,"tags":[],"body":"###Read problems statements [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/CHEFZERO.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/CHEFZERO.pdf) as well.<br /><br /><br />ShareChat is a country where Chef lives. The country may be represented by a $N \\times M$ grid; let's denote the cell in row $i$ and column $j$ ($1 \\le i \\le N$, $1 \\le j \\le M$) by $(i, j)$. Each cell of this grid is a city; let's denote the population (number of residents) of the city in cell $(i, j)$ by $A_{i, j}$. Two cities are *neighbouring* if their cells have a common side.<br /><br />Chef wants to divide this country into $K$ districts. Each district should be connected, that is, within each district, it should be possible to reach any city from any other city by only moving between neighbouring cities within this district.<br /><br />Since there could be many ways to create the districts, Chef wants to minimise the absolute difference between the maximum and minimum of total populations of the resulting districts. Help him solve this difficult problem!<br /><br />### Input<br />- The first line of the input contains three space-separated integers $N$, $M$ and $K$.<br />- $N$ lines follow. For each $i$ ($1 \\le i \\le N$), the $i$-th of these lines contains $M$ space-separated integers $A_{i, 1}, A_{i, 2}, \\dots, A_{i, M}$.<br /><br />### Output<br />Print $N$ lines. For each valid $i$, the $i$-th of these lines should contain $M$ space-separated integers $B_{i, 1}, B_{i, 2}, \\dots, B_{i, M}$, where $B_{i, j}$ denotes the district which the city in cell $(i, j)$ belongs to. Each district must be connected and $1 \\le B_{i, j} \\le K$ must hold for each valid $i, j$.<br /><br />### Constraints <br />- $1 \\le N, M, K \\le 1,000$<br />- $1 \\le A_{i, j} \\le 10^9$ for each valid $i, j$<br /><br />### Example Input<br />```<br />3 3 2<br />1 10 3<br />2 5 3<br />3 1 1<br />```<br /><br />### Example Output<br />```<br />1 2 1<br />1 2 1<br />1 1 1<br />```<br /><br />### Explanation<br />**Example case 1:** There are 2 districts. The population in the first district equals $1+2+3+1+1+3+3 = 14$, the population in the second district equals $10+5 = 15$.<br /><br />### Scoring<br />The score for each test case (and therefore each test file) is $(MaxPopulation - MinPopulation) \\cdot 10^9 / SumOfPopulations$, where $MaxPopulation$ is the maximum population over all districts, $MinPopulation$ is the minimum population over all districts and $SumOfPopulations$ is the sum of populations of all cities. The score of a submission is the sum of its scores for all test files. For the example output, the score would be $1 \\cdot 10^9 / 29 \\doteq 34482758.62069$.<br /><br />If your solution does not satisfy the constraints listed in the section Output, its verdict will be Wrong Answer.<br /><br />### Test Generation Process<br />There are twenty test cases. During the contest, the displayed score will account for exactly four test files, i.e. your score reflects your submission's performance on 20% (4/20) of the test files. However, if your program gets a non-AC verdict on any test file, your submission's verdict will be non-AC. In other words, an AC verdict denotes that your program runs successfully on all the test files. After the end of the contest, your score will be changed to include the sum of your program's scores over the other sixteen test files.<br /><br />The pseudocode used for generating tests is given below. Assume that the function `rand(l, r)` generates a uniformly random number between $l$ and $r$ (both inclusive).<br /><br />```<br />MAXA := 1000000000<br />N := rand(500, 1000)<br />M := rand(500, 1000)<br />K := rand(500, 1000)<br />for i in 1..N:<br />\tfor j in 1..M:<br />\t\tA[i][j] := rand(1, MAXA)<br />```<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"MAGICHF","problemName":"Magician versus Chef","dateAdded":"2018-08-12","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":0,"challengeType":"subtask","author":"shivam_g1470","successfulSubmissions":920,"totalSubmissions":1200,"partialSubmissions":0,"tags":["basic-programming","conditionals","easy","looping","sept18"],"body":"###Read problems statements [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/MAGICHF.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/MAGICHF.pdf) as well.<br /><br /><br />When Chef was visiting a fair in Byteland, he met a magician. The magician had $N$ boxes (numbered $1$ through $N$) and a gold coin. He challenged Chef to play a game with him; if Chef won the game, he could have the coin, but if he lost, the magician would kidnap Chef.<br /><br />At the beginning of the game, the magician places the gold coin into the $X$-th box. Then, he performs $S$ swaps. To win, Chef needs to correctly identify the position of the coin after all swaps.<br /><br />In each swap, the magician chooses two boxes $A$ and $B$, moves the contents of box $A$ (before the swap) to box $B$ and the contents of box $B$ (before the swap) to box $A$.<br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first line of each test case contains three space-separated integers $N$, $X$ and $S$.<br />- $S$ lines follow. Each of these lines contains two space-separated integers $A$ and $B$ denoting a pair of swapped boxes.<br /><br />### Output<br />For each test case, print a single line containing one integer — the number of the box containing the gold coin after all swaps are performed.<br /><br />### Constraints <br />- $1 \\le T \\le 100$<br />- $2 \\le N \\le 10^5$<br />- $1 \\le S \\le 10^4$<br />- $1 \\le X, A, B \\le N$<br />- $A \\neq B$<br />- the sum of $S$ for all test cases does not exceed $2*10^5$<br /><br />### Subtasks<br />**Subtask #1 (100 points):** original constraints<br /><br />### Example Input<br />```<br />1<br />5 2 4<br />4 2<br />3 4<br />3 2<br />1 2<br />```<br /><br />### Example Output<br />```<br />1<br />```<br /><br />### Explanation<br />**Example case 1:**<br />- after the first swap, the coin is in box $4$<br />- after the second swap, the coin is in box $3$<br />- after the third swap, the coin is in box $2$<br />- after the fourth swap, the coin is in box $1$<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"BSHUFFLE","problemName":"Bad Shuffle","dateAdded":"2018-09-03","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":0,"challengeType":"subtask","author":"bciobanu","successfulSubmissions":135,"totalSubmissions":204,"partialSubmissions":13,"tags":["data-structures","hashing","implementation","probability","sept18","simulation"],"body":"###Read problems statements [Hindi](http://www.codechef.com/download/translated/SEPT18/hindi/BSHUFFLE.pdf) ,[Bengali](http://www.codechef.com/download/translated/SEPT18/bengali/BSHUFFLE.pdf) , [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/BSHUFFLE.pdf) , [Russian](http://www.codechef.com/download/translated/SEPT18/russian/BSHUFFLE.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/BSHUFFLE.pdf) as well.<br /><br /><br />Consider the following algorithm, which generates a (not necessarily uniformly) random permutation of numbers $1$ through $N$:<br /><br />```<br />P := [1, 2, ..., N]<br />for i in 1..N do<br />    j := rand(1, N)<br />    swap(P[i], P[j])<br />```<br /><br />Here, `rand(1, N)` returns a uniformly random integer between $1$ and $N$ inclusive. Let's denote the probability that the permutation generated by this algorithm is $P$ by $p(P)$.<br /><br />Find a permutation $P_1$ such that $p(P_1)$ is maximum possible and a permutation $P_2$ such that $p(P_2)$ is minimum possible.<br /><br />### Input<br />The first and only line of the input contains a single integer $N$.<br /><br />### Output<br />Print two lines. The first line should contain $N$ space-separated integers denoting your permutation $P_1$. The second line should contain $N$ space-separated integers denoting your permutation $P_2$.<br /><br />If there are multiple answers, you may print any one.<br /><br />### Constraints <br />- $1 \\le N \\le 17$<br /><br />### Subtasks<br />**Subtask #1 (20 points):** $1 \\le N \\le 7$<br /><br />**Subtask #2 (80 points):** original constraints<br /><br />### Example Input<br />```<br />2<br />```<br /><br />### Example Output<br />```<br />1 2<br />2 1<br />```<br /><br />### Explanation<br />There are two possible permutations, $[1, 2]$ and $[2, 1]$. Both are equally likely to appear as the result of the given algorithm, so any pair of permutations is a valid answer. <br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"PHOTOCOM","problemName":"Sasha and Photos","dateAdded":"2018-08-08","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":2,"challengeType":"subtask","author":"step_by_step","successfulSubmissions":25,"totalSubmissions":36,"partialSubmissions":50,"tags":["2-d-array","2-d-prefixsum","geometry","implementation","sept18"],"body":"###Read problems statements [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/PHOTOCOM.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/PHOTOCOM.pdf) as well.<br /><br /><br />Sasha is a little girl who likes to view and compare photos. In this problem, a photo is a grid of pixels with $h$ rows and $w$ columns; each cell of this grid is either black or white. We will call the ordered pair of integers $(h, w)$ the *shape* of a photo.<br /><br />Let's define the *similarity* of two photos $P$ and $R$ with **the same** shape $(h, w)$ as the number of pairs of indices $i, j$ ($1 \\le i \\le h$, $1 \\le j \\le w$) such that $P_{i, j} = R_{i, j}$.<br /><br />Today, Sasha found two photos with possibly different shapes. She cannot directly compute the similarity of these photos; therefore, she decided to upscale both photos to get two photos with identical shapes. Formally, Sasha can choose two positive integers $a$ and $b$ and transform a photo with shape $(h, w)$ into a photo with shape $(ah, bw)$, where each pixel from the original photo is replaced by a rectangle of pixels with shape $(a, b)$ and the same color as that pixel. Since Sasha does not like huge photos, the upscaled photos should be as small as possible (specifically, if the original photos have the same shapes, they should not be changed at all).<br /><br />Since the resulting photos may be very big, Sasha asks you to help her and compute their similarity.<br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first line of each test case contains two space-separated integers $h_1$ and $w_1$ denoting the shape of the first photo.<br />- The second line contains a single string with length $h_1 \\cdot w_1$ describing the first photo. For each valid $i, j$, the pixel in the $i$-th row and $j$-th column of the photo is white if the $(i-1)w_1+j$-th character of this string is '1' or black if this character is '0'.<br />- The third line contains two space-separated integers $h_2$ and $w_2$ denoting the shape of the second photo.<br />- The fourth line contains a single string describing the second photo in the same format as the first one.<br /><br />### Output<br />For each test case, print a single line containing one integer — the similarity of the upscaled photos.<br /><br />### Constraints<br />- $1 \\le T \\le 10$<br />- $1 \\le h_1 \\cdot w_1 \\le 10^6$<br />- $1 \\le h_2 \\cdot w_2 \\le 10^6$<br />- each string contains only characters '0' and '1'<br /><br />### Subtasks<br />**Subtask #1 (10 points):**<br />- $1 \\le T \\le 20$<br />- $1 \\le h_1, w_1, h_2, w_2 \\le 30$<br /><br />**Subtask #2 (40 points):** $1 \\le h_1, w_1, h_2, w_2 \\le 1,000$<br /><br />**Subtask #3 (50 points):** original constraints<br /><br />### Example Input<br />```<br />2<br />1 2<br />01<br />2 1<br />01<br />2 2<br />0111<br />3 3<br />000000001<br />```<br /><br />### Example Output<br />```<br />2<br />13<br />```<br />\t<br />### Explanation<br />**Example case 1:** The initial photos are<br />```<br />01<br />```<br />and<br />```<br />0<br />1<br />```<br />and the upscaled photos are<br />```<br />01<br />01<br />```<br />and<br />```<br />00<br />11<br />```<br />with similarity 2, since there are two pairs of equal pixels — pixels $(0, 0)$ and pixels $(1, 1)$.<br />\t<br />**Example case 2:** The initial photos are<br />```<br />0 1<br />1 1<br />```<br />and<br />```<br />0 0 0<br />0 0 0<br />0 0 1<br />```<br />and the upscaled photos are<br />```<br />000111<br />000111<br />000111<br />111111<br />111111<br />111111<br />```<br />and<br />```<br />000000<br />000000<br />000000<br />000000<br />000011<br />000011<br />```<br />with similarity 13.<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}},{"status":"OK","result":{"data":{"content":{"problemCode":"FCTR","problemName":"Factorize","dateAdded":"2018-08-25","languagesSupported":["C++ 6.3","PAS gpc","PERL","PYTH","FORT","WSPC","ADA","CAML","ICK","JAVA","C","BF","ASM","CLPS","PRLG","ICON","RUBY","SCM qobi","PIKE","D","HASK","PAS fpc","ST","NICE","LUA","C#","BASH","PHP","NEM","LISP sbcl","LISP clisp","SCM guile","JS","ERL","TCL","SCALA","C++ 4.3.2","C++14","KTLN","PERL6","NODEJS","TEXT","swift","rust","SCM chicken","PYPY","CLOJ","GO","PYTH 3.6","COB","F#"],"sourceSizeLimit":50000,"maxTimeLimit":2,"challengeType":"subtask","author":"rajat1603","successfulSubmissions":6,"totalSubmissions":10,"partialSubmissions":10,"tags":[],"body":"###Read problems statements [Hindi](http://www.codechef.com/download/translated/SEPT18/hindi/FCTR.pdf) ,[Bengali](http://www.codechef.com/download/translated/SEPT18/bengali/FCTR.pdf) , [Mandarin chinese](http://www.codechef.com/download/translated/SEPT18/mandarin/FCTR.pdf) , [Russian](http://www.codechef.com/download/translated/SEPT18/russian/FCTR.pdf) and [Vietnamese](http://www.codechef.com/download/translated/SEPT18/vietnamese/FCTR.pdf) as well.<br /><br /><br />The Euler totient function $\\varphi(N)$ is defined as the number of integers between $1$ and $N$ (inclusive) which are coprime with $N$.<br /><br />You are given $N$ and $\\varphi(N)$. Calculate the prime factorization of $N$.<br /><br />### Input<br />- The first line of the input contains a single integer $T$ denoting the number of test cases. The description of $T$ test cases follows.<br />- The first and only line of each test case contains two space-separated integers $N$ and $\\varphi(N)$.<br /><br />### Output<br />For each test case, print a line containing a single integer $K$ — the number of distinct prime factors of $N$. Then, print $K$ lines. For each valid $i$, the $i$-th of these lines should contain two space-separated integers $p_i$ and $e_i$ denoting a prime divisor of $N$ and its exponent. Specifically, the following conditions should hold:<br />- $N = \\prod_{i=1}^{K} p_i^{e_i}$<br />- $p_i \\lt p_{i+1}$ for each valid $i$<br />- $e_i \\gt 0$ for each valid $i$<br /><br />### Constraints <br />- $1 \\le T \\le 10$<br />- $2 \\le N \\le 10^{500}$<br /><br />### Subtasks<br />**Subtask #1 (5 points):** $2 \\le N \\le 10^{14}$<br /><br />**Subtask #2 (25 points):** $2 \\le N \\le 10^{50}$<br /><br />**Subtask #3 (70 points):** $2 \\le N \\le 10^{500}$<br /><br />### Example Input<br />```<br />2<br />6 2<br />8 4<br />```<br /><br />### Example Output<br />```<br />2<br />2 1<br />3 1<br />1<br />2 3<br />```<br />","user":"bhushan_"},"code":9001,"message":"Contest Problem Successfully fetched"}}}];var userContestData = {"status":"OK","result":{"data":{"content":{"code":"SEPT18A","name":"September Challenge 2018 Division 1","startDate":"2018-09-07 15:00:00","endDate":"2018-09-17 15:00:00","isParent":false,"children":[],"bannerFile":"https://www.codechef.com/download/small-banner/SEPT18A/1536650160.jpg","freezingTime":0,"announcements":"&lt;p&gt;14:30, 15th October 2017: The exam is extended by 10 minutes.&lt;br /&gt;&lt;b&gt;&lt;br /&gt;The problem weightages are given below in rules section.&lt;/b&gt;&lt;/p&gt;\r\n&lt;p&gt;The content of Recent Activity block from exam page has been made inaccessible. In case if you try to access it, you will get an error stating&nbsp;&lt;b&gt;&quot;You are not allowed to check this contest. Please reload&quot;&lt;/b&gt;. Please ignore the error and continue with your exam.&lt;/p&gt;\r\n&lt;p&gt;14:44, 15th October 2017: Problem accuracy will not be displayed. It has been restricted for this exam.&lt;/p&gt;\r\n&lt;p&gt;Also, the score shown on the exam page is not final. It is subject to change after final verification.&lt;/p&gt;\r\n&lt;p&gt;Additionally, you cannot leave the exam hall before 3:30 pm.&lt;/p&gt;","problemsList":[{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"BSHUFFLE","contestCode":"SEPT18A","successfulSubmissions":508,"accuracy":18.714887640449},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"TABGAME","contestCode":"SEPT18A","successfulSubmissions":387,"accuracy":11.796322489392},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"CHEFZERO","contestCode":"SEPT18A","successfulSubmissions":164,"accuracy":62.214983713355},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"ANDSQR","contestCode":"SEPT18A","successfulSubmissions":142,"accuracy":7.6348547717842},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"PHOTOCOM","contestCode":"SEPT18A","successfulSubmissions":121,"accuracy":6.610800744879},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"MAGICHF","contestCode":"SEPT18A","successfulSubmissions":87,"accuracy":85.576923076923},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"CHEFADV","contestCode":"SEPT18A","successfulSubmissions":79,"accuracy":49.397590361446},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"XORIER","contestCode":"SEPT18A","successfulSubmissions":78,"accuracy":29.166666666667},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"FCTR","contestCode":"SEPT18A","successfulSubmissions":36,"accuracy":4.5680238331678},{"viewStart":"2018-09-07 15:00:00","submitStart":"2018-09-07 15:00:00","visibleStart":"2018-09-17 15:00:00","end":"2018-09-17 15:00:00","problemCode":"CHEFLST","contestCode":"SEPT18A","successfulSubmissions":22,"accuracy":3.1317494600432}],"currentTime":1538290935},"code":9001,"message":"Contest Successfully fetched"}}};