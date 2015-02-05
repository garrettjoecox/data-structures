

var Graph = function(){
  this.nodes = [];
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
  this.nodes.pop(node);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var hasEdge = false;
  if ( _.contains(this.edges[fromNode], toNode) ) {
    hasEdge = true;
  }
  if ( _.contains(this.edges[toNode], fromNode) ) {
    hasEdge = true;
  }
  return hasEdge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.edges[fromNode]) {
    this.edges[fromNode] = [];
  }
  if (!this.edges[toNode]) {
    this.edges[toNode] = [];
  }
    this.edges[toNode].push(fromNode);
    this.edges[fromNode].push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.edges[fromNode].pop(toNode);
  this.edges[toNode].pop(fromNode);
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



