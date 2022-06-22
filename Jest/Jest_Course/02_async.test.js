const fetchData = require("./02_async");

it("should return correct todo", async () => {
    // const todo = fetchData(1).then((todo) => {
    //     expect(todo.id).toBe(1);
    // });

    // We can also use async/await alternatively

    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
});
