// Graph constructor
var Graph = function(){
    this.nodes = [];
    this.edges = {};
};

// Graph's psuedoclassical functions

// Stores the node
Graph.prototype.addNode = function(node){
    this.nodes.push(node);
};

// Check if storage contains node
Graph.prototype.contains = function(node){
    return _.contains(this.nodes, node);
};

// Removes node from storage (Not fully functional)
Graph.prototype.removeNode = function(node){
    this.nodes.pop();
};

// Returns whether or not the node has an edge to the given node
Graph.prototype.hasEdge = function(fromNode, toNode){
    // Declare flag
    var hasEdge = false;
    // If from.edges contains to, toggle flag
    if (_.contains(this.edges[fromNode], toNode)) hasEdge = true;
    if (_.contains(this.edges[toNode], fromNode)) hasEdge = true;
    return hasEdge;
};

// Add's an edge to the node
Graph.prototype.addEdge = function(fromNode, toNode){
    // If the node edge array doesn't exist add one
    if (!this.edges[fromNode]) this.edges[fromNode] = [];
    if (!this.edges[toNode]) this.edges[toNode] = [];
    // Push to the node's edge array
    this.edges[toNode].push(fromNode);
    this.edges[fromNode].push(toNode);
};

// Removes an edge from the array (Not fully functional)
Graph.prototype.removeEdge = function(fromNode, toNode){
    this.edges[fromNode].pop();
    this.edges[toNode].pop();
};

// Executes callback on each node in the graph
Graph.prototype.forEachNode = function(cb){
    _.each(this.nodes, cb);
};