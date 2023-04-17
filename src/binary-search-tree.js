const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
res_root = null

  root() {
    return this.res_root
  }

  new_Node(tree, the_last_node) {
    if (the_last_node.data < tree.data) {
      if (tree.left !== null) {
	  this.new_Node(tree.left, the_last_node)
        
      } else  tree.left = the_last_node

    } else if (the_last_node.data > tree.data) {
      if (tree.right !== null) {
	  this.new_Node(tree.right, the_last_node)
        
      } else tree.right = the_last_node
        
    }
  }
  
  find_data(tree, data) {
    if (tree === null) {
	return null
	}
    else if (tree.data === data) {
	return tree
	}
    else if (tree.data > data) {
	return this.find_data(tree.left, data)
	}
    else return this.find_data(tree.right, data)
  }
  
    hasData(tree, data) {
    if (tree === null) {
	return false
	}
    else if (tree.data === data) 
		{return true}
    else if (tree.data > data) {
	return this.hasData(tree.left, data)
	}
    else {
	return this.hasData(tree.right, data)
	}
  }

  remove_data(branch, tree, data, prevNode) {
	let left_tr = tree.left
    if (tree.data === data) {
    
      if (tree.left === null && tree.right !== null)
        prevNode[branch] = tree.right
      else if (tree.left !== null && tree.right === null){
        prevNode[branch] = tree.left
	  }
	else if (tree.left === null && tree.right === null){
        prevNode[branch] = null
	}
      else {
        
        prevNode[branch] = tree.right
        this.new_Node(this.res_root, left_tr)
      }
    } else {
      if (tree.data > data)
        this.remove_data("left", tree.left, data, tree );
      else this.remove_data("right", tree.right, data, tree);
    }
  }

  minData(tree) {
    
    if (tree.left === null) {
	return tree.data
	}
	else if (tree === null) {
	return null
	    }
	else return this.minData(tree.left)
  }

 maxData(tree) {
    
    if (tree.right === null){ return tree.data
	}
	else if (tree === null){
	 return null
	}
	else return this.maxData(tree.right)
  }

  add(data) {
    let the_last_node = {data: data, left: null, right: null};

    if (this.res_root !== null) {
	this.new_Node(this.res_root, the_last_node);
      
    } else {this.res_root = the_last_node;
      
    }
  }

  has(data) {
  let result = this.hasData(this.res_root, data)
    return result
  }

  find(data) {
  let result = this.find_data(this.res_root, data)
    return result
  }

  remove(data) {
    let result 
	result = this.remove_data("res_root", this.res_root, data, this )

  }

  min() {
    return this.minData(this.res_root)
  }

  max() {
  let result 
  result = this.maxData(this.res_root)
    return result
  }
}

module.exports = {
  BinarySearchTree
};