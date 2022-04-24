const replaceHtml = require("./modules/replaceHtml.js");

const fs = require("fs");
const http = require("http");
const { type } = require("os");
const url = require("url");

const readProductsApi = fs.readFileSync("./dev-data/data.json", "utf-8");
const changingToArrey = JSON.parse(readProductsApi);

const readFullPage = fs.readFileSync("./templates/overview.html", "utf-8");
const readCard = fs.readFileSync("./templates/card.html", "utf-8");
const readProduct = fs.readFileSync("./templates/product.html", "utf-8");

const arr = changingToArrey.map((val) => {
  return replaceHtml(readCard, val);
});
const string = arr.join(" ");

const server = http.createServer((req, res) => {
  const urlcha = req.url;
  const fullInfo = url.parse(urlcha, true).query.id;
  console.log(fullInfo);
  if (urlcha == "/home") {
    const tayyor = readFullPage.replace("{card}", string);
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(tayyor);
  } else if (urlcha == `/product?id=${fullInfo}`) {
    let arr = [];
    const html = replaceHtml(readProduct, changingToArrey[fullInfo]);
    const findingCategory = changingToArrey[fullInfo].category;
    let oxshashAbyekt = changingToArrey.forEach((element) => {
      if (element.category == findingCategory) {
        arr.push(element);
      }
    });
    const topish = arr.findIndex((val) => {
      return fullInfo == val.id;
    });
    arr.splice(topish, 1);
    const tugadi = arr
      .map((val) => {
        return replaceHtml(readCard, val);
      })
      .join("");
    const string = arr.join("");
    const oxiri = html.replace("{card-oxshash}", tugadi);
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(oxiri);
    // console.log(html);/
  }
});
server.listen("8000", "127.0.0.1");
