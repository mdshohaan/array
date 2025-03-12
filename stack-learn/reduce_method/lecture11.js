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
