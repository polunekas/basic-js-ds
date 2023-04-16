const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
root=null
  root() {
    let result
	result = this.root 
	return result
    // remove line with error and write your code here
  }

new_node(tree, add_node) {
 if (add_node.data < tree.data) {
      if (tree.left !== null) {this.new_node(tree.left, add_node) } 
	  else  tree.left = add_node;
    } else if (add_node.data > tree.data) {
      if (tree.right !== null) {
       this.new_node(tree.right, add_node);
      } else tree.right = add_node
    }
}

  add(data) {
let add_node = {data:data, left: null, right: null}

if (this.root === null) {
      this.root = add_node;
    } else {
      this.new_node(this.root, add_node);
    }

}
    // remove line with error and write your code here
  

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {

    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};