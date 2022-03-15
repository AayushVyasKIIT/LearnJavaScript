//class
class TreeNode{

    data;
    left;
    right;

    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(5);


//function
function InOrder(root){
    if(root == null){
        return;
    }

    InOrder(root.left);
    console.log(root.data);
    InOrder(root.right);
}
//arrow function
const InOrderArrow = (root) =>{
    if(root == null){
        return;
    }
    InOrder(root.left);
    console.log(root.data);
    InOrder(root.right);
}
InOrderArrow(root);
