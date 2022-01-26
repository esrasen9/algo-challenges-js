function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine = 0;
    const diffYear = y1 - y2;
    const diffMonth = m1 - m2;
    const diffDay = d1 - d2;
    if (diffYear < 0)
        fine = 0;
    else if (diffYear !== 0)
        fine += 10000;
    else {
        if (diffMonth > 0)
            fine += diffMonth * 500;
        else if (diffDay > 0 && diffMonth >= 0)
            fine += diffDay * 15;
    }
    return fine;
}