function BracketMatcher(str) {
    const stack = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === "{") {
            stack.push("(");
        } else if(str[i] === ")") {
            if(stack.length === 0) {
                return 0;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
}
