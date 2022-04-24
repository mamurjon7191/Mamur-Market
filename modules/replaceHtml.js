module.exports = function (html, obj) {
  let out = html.replace(/{card-image}/g, obj.image);
  out = out.replace("{card-price}", obj.price);
  out = out.replace("{card-buyed}", obj.buyed);
  out = out.replace("{card-category}", obj.category);
  out = out.replace("{card-name}", obj.productName);
  out = out.replace(/{card-id}/g, obj.id);
  out = out.replace(/{card-reyting}/g, obj.reyting);
  out = out.replace(/{card-des}/g, obj.description);
  // out = out.replace("", obj.q);
  // out = out.replace("", obj.q);
  return out;
};
