// Define the extract3 function with more complex logic
function extract3(arcs) {
    // Process each arc in some way
    let processedArcs = arcs.map(arc => arc * 2);  // Example: double each arc
    console.log(processedArcs);
}

// Define the object with arcs property
let o = {
    arcs: [1, 2, 3, 4, 5]
};

// Call extract3 with arcs from o
extract3(o.arcs);  // Output: [2, 4, 6, 8, 10]
