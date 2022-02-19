const users = [
  {id: 1, name: 'john'},
  {id: 2, name: 'susan'},
  {id: 3, name: 'anna'},
];

const articles = [
  {userId: 1, articles: ['one', 'two', 'three']},
  {userId: 2, articles: ['four', 'five']},
  {userId: 3, articles: ['six', 'seven', 'eight', 'nine']},
];

// Here we are declaring two arrays for the example, but practically we will be using the data from HTTP so we have created two separate functions as given below as a convention to common practice where async/await is used
// Here both the functions are executed one after the other i.e. the getUser() function will be executed first and then the getArticles() function will be executed
function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if(user) {
      return resolve(user);
    } else {
      reject(`No such user with name: ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);

    if(userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject(`Wrong ID`);
    }
  });
}

// Here in the getUser() function we return the user and then for that user we call the getArticles() function which will return the article corresponding to that user
// getUser('susan').then((user) => getArticles(user.id)).then((articles) => console.log(articles)).catch(err => console.log(err));

// Here we can see the use of async/await instead of chaining multiple then() to make our code more readable
const getData = async () => {
  try {
    // Here we will wait till we get the user before further execution
    const user = await getUser('john');
    // if(user) {
    //   // Here if we have a user then we will invoke getArticles() with the user id
    //   const articles = await getArticles(user.id);
    // }
    // Here we can skip checking if a user is present as we are already handling the user presence in the getUser function's reject() method. So we can directly invoke getArticles(), since we have already choosen to handle the user's presence through Promise
    const articles = await getArticles(user.id);
  } catch (error) {
    console.log(error);
  }
}

getData();