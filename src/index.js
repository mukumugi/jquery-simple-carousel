import "./carousel.js";
import $ from "jquery";
import fakeimg1 from "./fakeimg1.png";
import fakeimg2 from "./fakeimg2.png";
import fakeimg3 from "./fakeimg3.png";
import fakeimg4 from "./fakeimg4.png";
import fakeimg5 from "./fakeimg5.png";
import fakeimg6 from "./fakeimg6.png";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const data = [
  fakeimg1,
  fakeimg2,
  fakeimg3,
  fakeimg4,
  fakeimg5,
  fakeimg6,
];
$("#app").carousel(data);
