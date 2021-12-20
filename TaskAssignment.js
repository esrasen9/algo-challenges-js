function taskAssignment(k, tasks) {
    let temp = [...tasks].sort((a, b) => a - b);
    const output = [];

    for (let i = 0; i < k; i++) {
        let j = temp.length;
        const min = tasks.indexOf(temp[0]);
        tasks[min] = -1;
        const max = tasks.indexOf(temp[j - 1]);
        tasks[max] = -1;
        output.push([min, max]);
        temp = temp.slice(1, j - 1);
    }
    return output;
}