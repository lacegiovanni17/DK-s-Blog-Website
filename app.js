//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent =
  "Join millions of others, Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on DK Daily Journal. Sign up to discover why millions of people have published their passions here. My name is Chidike Henry, and I am going to show you how to start blogging today. I have been building blogs and websites since 2002. In that time I have launched several of my own blogs, and helped hundreds of others do the same. I know that starting a blog can seem overwhelming and intimidating. This free guide is all about blogging for beginners, and will teach you how to become a blogger with just the most basic computer skills. So whether you’re 8 or 88, you can create your own blog in 20 minutes. I am not ashamed to admit that when I was first learning how to build a blog I made a ton of mistakes. You can benefit from more than a decade of my experience so that you don’t repeat these same mistakes when you make your own blog. I created this free blog webapp so that a complete beginner can learn how to blog quickly and easily.";
const aboutContent =
  "There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.";
const contactContent =
  "If you are just getting started, please make sure to read the easy guide to starting your first blog and/or my guide to creating a website. If you have any questions at all about starting a blog or website after reading the guide, please do not hesitate to contact me below. If you have a technical question, please make sure to include as many details as possible so that I can provide the best assistance to you. If you would like me to install WordPress for you, please use the form here. I respond to ALL emails personally.";
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = []; 

app.get("/", (req, res) => {
  res.render("home", { homeStartingContent: homeStartingContent });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  res.redirect("/");
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
