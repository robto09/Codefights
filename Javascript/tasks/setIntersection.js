function setIntersection(A, B) {

    var compareNumbers = function(a, b) {
        return a - b;
    }

    A.sort(compareNumbers);
    B.sort(compareNumbers);
    var C = [];

    var pos_b = 0;
    for (var pos_a = 0; pos_a < A.length; pos_a++) {
        if (pos_b < B.length && B[pos_b] < A[pos_a]) {
            pos_b = pos_a;
        }
        if (A[pos_a] === B[pos_b]) {
            C.push(A[pos_a]);
            pos_b++;
        }
    }

    return C;
}
