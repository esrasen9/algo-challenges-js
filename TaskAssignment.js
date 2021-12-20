function taskAssignment(k, tasks) {
    let temp = [...tasks].sort((a, b) => a - b);
    const output = [];

    for (let i = 0; i < k; i++) {
        let j = temp.length - 1;
        const min = tasks.indexOf(temp[0]);
        tasks[min] = -1;
        const max = tasks.indexOf(temp[j]);
        tasks[max] = -1;
        output.push([min, max]);
        temp = temp.slice(1, j);
    }
    return output;
}