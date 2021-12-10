function findClosestValueInBst(tree, target) {
    return iteratorFunc(tree,target,tree.value);
}

function iteratorFunc(tree,target,closest) {
    let temp1,temp2;
    let root = tree.nodes.filter((node)=> node.value == target)[0];
    let tempRoot = root;
    if(tempRoot.right !== null){
        tempRoot = tree.nodes.filter(node => node.id == root.right)[0];
        while(tempRoot.left !== null){
            tempRoot = tree.nodes.filter(node => node.id == tempRoot.left)[0];
            temp1 = tempRoot;
        }
        temp1 = temp1.value;
    }
    if(root.left !== null){
        root = tree.nodes.filter(node => node.id == root.left)[0];
        while(root.right !== null){
            root = tree.nodes.filter(node => node.id == root.right)[0];
            temp2 = root;
        }
        temp2 = temp2.value;
    }


    const a = parseInt(temp1)-target;
    const b = target - parseInt(temp2);
    return (a < b) ? temp1 : temp2;
}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
console.log(findClosestValueInBst({
    "nodes": [
        {"id": "10", "left": "5", "right": "15", "value": 10},
        {"id": "15", "left": "13", "right": "22", "value": 15},
        {"id": "22", "left": null, "right": null, "value": 22},
        {"id": "13", "left": null, "right": "14", "value": 13},
        {"id": "14", "left": null, "right": null, "value": 14},
        {"id": "5", "left": "2", "right": "5-2", "value": 5},
        {"id": "5-2", "left": null, "right": null, "value": 5},
        {"id": "2", "left": "1", "right": null, "value": 2},
        {"id": "1", "left": null, "right": null, "value": 1},
        {"id": "19", "left": "5", "right": "15", "value": 10},


    ],
    "root": "10"
},10));