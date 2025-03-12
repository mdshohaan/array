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
const inspectArticle = (course) => {
  const path = "contents.article.count";
  return path.split(".").reduce((acc, field) => {
    if (acc) {
      return acc[field];
    }
    return 0;
  }, course);
};

const courses = [js, react, java];
courses.forEach((course) => {
  console.log(`${course.name} has Article ${inspectArticle(course)}`);
});
