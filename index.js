import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'assets' directory
app.use(express.static('assets'));

// For view on engine on Vercel
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  const data = {
    title: "ExpressJS & EJS Assignment Workbook 2",
    seconds: new Date().getSeconds(),
    items: ["Express", "EJS", "Bootstrap"],
    htmlContent: "<em>Implement Bootstrap code for added self practice</em>",
    /* Below are URL links to be passed as data to my index.ejs page */
    expressjs: "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
    ejs: "https://haniwaman.com/cms/wp-content/uploads/2019/03/ejs0.png",
    bootstrap: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
  }
  /* As much as possible, i want to make the application as dynamic as possible, thus this code */
  const footerData = {
    currentDate: new Date().getFullYear()
  };
  /* Spread syntax so that my code is shorter. Combining both const variable into one object */
  res.render("index.ejs", {
    ...data,
    footerData
  });
})

/* render About Me /about page */
app.get("/about", (req, res) => {
  const data = {
    title: "About Me",
    profilePhoto: "/image/profile-photo.png",
    description: "Hello! I'm Nasmer Fontanilla, a hardcore sports fisherman who thrives on the excitement of the open water. My adventurous spirit extends beyond fishing to a passion for travel, exploring new horizons whenever possible. When I'm not casting lines or jet-setting, you'll find me enthusiastically cruising on my motorcycle, embracing the thrill of the open road. In the tech realm, I'm equally passionate about full-stack development, channeling my creativity into crafting innovative solutions. Life's an adventure, and I'm here for the ride! 🎣🌍🏍💻</p>",
    footerData: {
      currentDate: new Date().getFullYear()
    }
  }
  res.render("about.ejs", data);
})

/* render Contact Me /contact page */
app.get("/contact", (req, res) => {
  const data = {
    title: "Contact Me",
    name: "Name:",
    emailAddress: "Email address:",
    message: "Message:",
    footerData: {
      currentDate: new Date().getFullYear()
    }
  }
  res.render("contact.ejs", data);
})



app.listen(port, () => {
  console.log(`Server is running sucessfully on port number ${port}.`);
})
