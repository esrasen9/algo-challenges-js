function angryProfessor(k, a) {
    let count = 0;
    a.forEach(arrivalTime => {
        if (arrivalTime <= 0) count++;
    });

    return (count >= k) ? "NO" : "YES";
}