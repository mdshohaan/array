//  @Title -Inspect Nested Object

const js = {
  name: "All you need to know javascript",
  author: {
    name: "Irfan",
    email: "abc@gmail.com",
  },
  contents: {
    video: {
      count: 222,
    },
  },
};
const react = {
  name: "All you need to know javascript",
  author: {
    name: "Irfan",
    email: "abc@gmail.com",
  },
  contents: {
    video: {
      count: 222,
    },
    article: {
      count: 25,
    },
    quiz: {
      count: 10,
    },
  },
};
const java = {
  name: "All you need to know javascript",
  author: {
    name: "Irfan",
    email: "abc@gmail.com",
  },
  contents: {
    video: {
      count: 222,
    },
    article: {
      count: 25,
    },
    quiz: {
      count: 10,
    },
  },
};
const inspectObj = (obj, path, returnValue = 0) => {
  return path.split(".").reduce((acc, field) => {
    if (acc) {
      return acc[field];
    }
    return returnValue;
  }, obj);
};

const courses = [js, react, java];
courses.forEach((course) => {
  const countVideo = inspectObj(course, "contents.video.count");
  const countArtcile = inspectObj(course, "contents.article.count");
  const countQuiz = inspectObj(course, "contents.quiz.count");
  console.log(countVideo, countArtcile, countQuiz);
});
// forEach:✅ When you need to perform an action on each element (e.g., logging, modifying an existing array).
let numbers = [1, 2, 3];

numbers.forEach((num, index, arr) => {
  arr[index] = num * 2; // Modify the original array
});

console.log(numbers); // Output: [2, 4, 6] ✅
// •	arr is the original array (numbers).
// •	index is the position of the current element in the loop.
// •	arr[index] gets the element at that index.
