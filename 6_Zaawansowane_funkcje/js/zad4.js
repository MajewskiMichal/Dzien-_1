function compare(a, b) {
    return b - a;
}

function max() {
    var args = [];
    for (var i=0; i<arguments.length; i++) {
        args.push(arguments[i]);
    }
    args.sort(compare);
    //console.log(args[0])
    return args[0];
}



max(5, 29, 6, 4, 34, 56, 2, 3);




