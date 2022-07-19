const axios = require("axios");

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

    // console.log(results.data);
    return results.data;
}

const forEach = (items, callback) => {
    for(let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

it("mock callback", () => {
    const mockCalledback = jest.fn(x => 42 + x);

    forEach([0,1], mockCalledback);

    expect(mockCalledback.mock.calls.length).toBe(2);

    // Here calls method on the mock returns an array of all the calls
    expect(mockCalledback.mock.calls[0][0]).toBe(0);

    expect(mockCalledback.mock.calls[1][0]).toBe(1);

    expect(mockCalledback.mock.results[0].value).toBe(42);

    expect(mockCalledback.mock.results[1].value).toBe(43);
});

// We can also mock the return value
it("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("hello");

    const results = mock();
    const results1 = mock();
    const results2 = mock();
    
    expect(results).toBe(true);
    expect(results1).toBe(false);
    expect(results2).toBe("hello");
});

if("mock axios", async () => {
    // Here in the spyOn() the first parameter will always be an object and the second parameter is the method on the object
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Get from axios"
        }
    });
    const results = await fetchData(1);

    expect(results.todo).toBe("Get from axios");
});