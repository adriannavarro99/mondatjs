let BracesValid = function(str) {
    let stack = [];
    let symbol = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < str.length; i += 1) {
        
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        }
        
        else {
            let last = stack.pop();
            
            if (str[i] !== symbol[last]) {
                return false
            };
        }
    }
    
    if (stack.length !== 0) {
        return false
    };
    return true;
}