# Revisiting Promises

### Promise Terminology

Promises come with some quite specific terminology that it's worth getting clear about.

First, a promise can be in one of three states:

- **pending** - the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to **fetch()**, and the request is still being made
- **fulfilled** - the asynchronous function has succeeded. When a promise is fulfilled, it's **then()** handler is called
- **rejected** - the asynchronous function has failed. When a promise is rejected, it's **catch()** handler is called

Note that what **"succeeded"** or **"failed"** means here is up to the API in question: for example, **fetch()** considers a request successful if the server returned an error like **404 Not Found**, but not if a network error prevented the request being sent

Sometimes we use the term **settled** to cover both **fulfilled** and **rejected**

A promise is **resolved** if it is settled, or if it has been "locked in\*\* to follow the state of another promise

To know more about this, please refer to the classification given below:

So to round up, some verbs:

- **fulfill** - to settle with a fulfillment value
- **reject** - to settle with a rejection reason saying why the promise can't be fulfilled
- **settle** - to fulfill or reject (I'm aware this is circular and I'm fine with that)
- **resolve** - to either
  - make a promise follow another promise
  - fulfill it with a value

**Some adjectives for a promise's primary state:**

- **pending** - neither fulfilled nor rejected
- **fulfilled** - fulfilled with a fulfillment value
- **rejected** - rejected with a rejection reason saying why the promise can't be fulfilled

**And some further adjectives:**

- **settled** - convenience term for "fulfilled or rejected"
- **resolved** - either settled or following another promise that will determine what happens to this promise
- **unresolved** - not resolved (and thus can be resolved)

## Combining multiple promises

### Promise.all()

Sometimes we need all the promises to be fulfilled, but they don't depend on each other. In a case like that it's much more efficient to start them all off together, then be notified when they have all fulfilled. The Promise.all() ethod is what is required here

The promise returned by Promise.all() is:

- fulfilled when and if all the promises in the array are fulfilled. In this case the **then()** handler is called with an array of all the responses, in the same order that the promises were passed into **all()**
- rejected when and if any of the promises in the array are rejected. In this case the **catch()** handler is called with the error thrown by the promise that rejected

### Promise.any()

Sometimes we might need any one of a set of promises to be fulfilled, and don't care which one. In that case we want **Promise.any()**. This is like **Promise.all()**, except that it is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected

## async and await

The **async** keyword gives you a simpler way to work with asynchronous promise-based code. Adding **async** at the start of a function makes it an async function:

```
async function myFunction() {
    // This is an async function
}
```

**Inside an async function you can use the await keyword before a call to a function that returns a Promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown. This enables us to write code that uses asynchronous functions but looks like synchronous code.**

- **async** functions are used a lot where we might use promise chains, and they make working with promises much more intuitive
- Keep in mind that just like a promise chain, **await** forces asynchronous operations to be completed in series. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case something like **Promise.all()** will be more performant

# Amazon DynamoDB - NodeJS

**Here we are using the aws-sdk and dotenv packages**

## DynamoDB - INSERT query with NodeJS

```
async function insertDataIntoDatabase() {
    var params = {
        TableName: empTable,
        Item: {
            id: "ANPLINSERT31111",
            client: "client_"+Math.random(),
            Dept: "Manager",
            Status: true,
            json: {address: {company: "Mynation", city: "Pune", street: "JS road", pin: "598045"}}
        }
    };

    let putItem = new Promise((res, rej) => {
        dynamoDB.put(params, function(err, data) {
            if(err) {
                console.log("Error", err);
                rej(err);
            } else {
                console.log("Success!");
                res("Inserted data into DynamoDB!");
            }
        });
    });
    const result = await putItem;
    console.log(result);
};
```

## DynamoDB - Getting all data with NodeJS

```
async function fetchDatafromDatabase() {
    var params = {
        TableName: empTable
    };

    let queryExecute = new Promise((res, rej) => {
        dynamoDB.scan(params, function(err, data) {
            if(err) {
                console.log("Error", err);
                rej(err);
            } else {
                console.log("Success! Scan method fetch data from dynamodb");
                res(JSON.stringify(data, null, 2));
            }
        });
    });

    const result = await queryExecute;
    console.log(result);
}
```

## DynamoDB - Getting data with get method

```
async function fetchDataFromDatabaseGetMethod() {
    var id = "PL2332231213";
    var params = {
        TableName: empTable,
        Key: {
            "id": id
        }
    };

    let queryExecute = new Promise((res, rej) => {
        dynamoDB.get(params, function(err, data) {
            if(err) {
                console.log("Error", err);
                rej(err);
            } else {
                console.log("Success! get method fetch data from dynamodb");
                res(JSON.stringify(data, null, 2));
            }
        });
    });

    const result = await queryExecute;
    console.log(result);
}
```

## DynamoDB - Fetching data with the Query method

```
async function fetchDataFromDatabaseQueryMethod() {
    var id = "PL 23332231213";
    var Dept = "HR";
    var params = {
        TableName: empTable,
        KeyConditionExpression: "#id = :id", // This is only the primary key
        ExpressionAttributeNames: {
            "#id": "id",
            "#dept": "Dept"
        },
        ExpressionAttributeValues: {
            ":id": id,
            ":deptValue": Dept
        },
        FilterExpression: "#dept = :deptValue", // AttributeName with AttributeValue
        Limit: 1,
        ScanIndexForward: false, // Set ScanIndexForward to false to display most recent entries first
    };

    let queryExecute = new Promise((res, rej) => {
        dynamoDB.query(params, function(err, data) {
            if(err) {
                console.log("Error", err);
                rej(err);
            } else {
                console.log("Success! query method fetch data from dynamoDB");
                res(JSON.stringify(data, null, 2));
            }
        });
    });
    const result = await queryExecute;
    console.log(result);
}
```

## DynamoDB - Update Data

```
async function updateDataFromDatabase() { // update method fetch data from dynamodb
    var id = "PL2332231213";
    var Dept = "IT Department";
    var params = {
        TableName: empTable,
        Key: {
            id: id
        },
        UpdateExpression: "set Dept = :r",
        ExpressionAttributeValues: {
            ":r": Dept
        },
        ReturnValues: "UPDATED_NEW"
    };

    let queryExecute = new Promise((res, rej) => {
        dynamoDB.update(params, function(err, data) {
            if(err) {
                console.log("Error", err);
                rej(err);
            } else {
                console.log("Updated Successfully done for: " + id);
                res(JSON.stringify(data, null, 2));
            }
        });
    });
}
```

## DynamoDB - Delete Record

```
async function deleteDataFromDatabase() {
    var id = "PL2332231213";
    var params = {
        TableName: empTable,
        Key: {
            id: id
        },
    };
    let queryExecute = new Promise((res, rej) => {
        dynamoDB.delete(params, function(err, data) {
            if(err) {
                console.log("Error", err);
                rej(err);
            } else {
                console.log("Deleted Successfully user: " + id);
                res(JSON.stringify(data, null, 2));
            }
        });
    });
}
```
