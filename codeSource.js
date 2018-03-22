
function points(lettre){
    switch(lettre){
        case 'q':return 10;
        case 'z':return 10;
        case 'j':return 8;
        case 'x':return 8;
        case 'k':return 5;
        case 'f':return 4;
        case 'h':return 4;
        case 'v':return 4;
        case 'w':return 4;
        case 'y':return 4;
        case 'b':return 3;
        case 'c':return 3;
        case 'm':return 3;
        case 'p':return 3;
        case 'd':return 2;
        case 'g':return 2;
        default :return 1;
    }
}

function pointsW(W){
    var s=0;
    for(var i=0;i < W.length;i++)
        s=s+points(W[i]);
    return s;
}

function notIn(l,t){
    for(var i =0;i<t.length;i++)
        if(l==t[i]) return 0;
    return 1;
}

function scoreMax(T){
    ret=T[0];//Mot a retourner
    for(var i=0;i<T.length;i++)
        if(pointsW(T[i])>pointsW(ret)) ret=T[i];
    return ret;
}

function match(W,letters){
    if(W.length > letters.length) return 0;
    var selected=[];
    for (var i=0;i<W.length;i++){
        if(notIn(W[i],letters)) return 0;
        for(var j = 0;j<letters.length;j++){
            if(W[i]==letters[j] && notIn(j,selected)){ selected.push(j);break;}
        }
        
    }
    return (selected.length==W.length);
}

var N = parseInt(readline());
var Words=[];
for (var i = 0; i < N; i++) {
    Words.push(readline());
}
var LETTERS = readline();
var moves=[];
for(var i=0;i<Words.length;i++){
    if(match(Words[i],LETTERS)) moves.push(Words[i]);
} 

var W=scoreMax(moves);
    
print(W);
