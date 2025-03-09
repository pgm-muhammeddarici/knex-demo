/**
 * PageController
 * Simple pages will be handled by this controller.
 * A simple page is a page that does not contain many business logic.
 */

import userData from "../data/user.js";
import User from "../models/User.js";
import NavigationItem from "../models/NavigationItem.js";
import Page from "../models/Page.js";

export const home = async (req, res) => {
  const users = await User.query().findById(3);
  const menuItems = await NavigationItem.query();
  const pages = await Page.query().where("slug", "/contact");
  // console.log(pages);
  // return res.send(navItems);

  const pageData = {
    title: "Home",
    content: `
      <p>Welcome to our website. We are a small company that does great things!</p>
      <p>Feel free to browse our site and learn more about us.</p>
      Users:  
      <ul>
        <li>First Name: ${users.first_name}</li>
        <li>Last Name: ${users.last_name}</li>
        <li>Bio: ${users.bio}</li>
        <strong><h4> ${pages[0].content} </h4></strong>
        
    `,
    pages: ` ${pages[0].content}
    `
  };

  res.render("pages/home", {
    ...pageData,
    userData: users,
    menuItems,
    pages,
  });
};

export const about = async (req, res) => {
  const menuItems = await NavigationItem.query();

  const pageData = {
    title: "About Us",
    content: `
      <p>We are a small company that does great things!</p>
      <p>If you would like to drink the best coffee in the world, you are in the right place.</p>
      <p>Our coffee is made from the best beans in the world and is prepared by the best baristas.</p>
    `,
  };
  res.render("pages/default", {
    ...pageData,
    menuItems,
  });
};

export const contact = async (req, res) => {
  const menuItems = await NavigationItem.query();

  const pageData = {
    title: "Contact",
    content: `
      <p>Feel free to contact us at:</p>
      <p>Phone: 123-456-7890</p>
      <p>Email:
        <a href="mailto:example@example.com">john@doe.be</a>
      </p>
      <p>And some advice: "Don't drink and code!"</p>
    `,
  };
  res.render("pages/default", {
    ...pageData,
    menuItems,
  });
};