import React, { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

const DisplayArea = () => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    const getText = async () => {
      let result = await axios.get(`http://localhost:3001/viewText`);
      setText(result.data.split(`,`));
      setLoading(true);
    };
    getText();
  }, []);

  // console.log("data: ", text);

  const formData = new FormData();
  // ! TODO: logic to determine which row to place a line of text (based on content in that line)
  let name = [],
    account = [],
    phone = [],
    unit = [],
    course = [];
  // return text that passes the regex check
  const classify = (string) => {
    if (/(405)/.test(string)) account.push(string);
    if (/(08|07|09|\+)/g.test(string)) phone.push(string);
    if (/(dept|conas)/gi.test(string)) unit.push(string);
    if (/(course|mass|science|bio)/gi.test(string)) course.push(string);
    if (/\//g.test(string)) {
      // REDE, Victoria. D./ OSD 68268975 0700656343 / Access'
      string.split("/").forEach((splitItem) => {
        // pass it back to the item.forEach() maybe?
        return classify(splitItem);
      });
    } else name.push(string);
  };

  text.forEach((item) => {
    console.log("item:", item);
    classify(item);
  });

  console.log(`${account}: account`);
  console.log(`${phone}: phone`);
  console.log(`${unit}: unit`);
  console.log(`${course}: course`);
  console.log(`${name}: name`);

  const appendWhileLoop = (array) => {
    array.forEach((item) => {
      while (array) {
        formData.append(`${array}`, item);
      }
    });
  };
  appendWhileLoop(account);
  appendWhileLoop(phone);
  appendWhileLoop(unit);
  appendWhileLoop(name);
  // formData.append(`sn`, classify(subItem));
  // formData.append(`facilitators`, classify(subItem));

  const URL = `https://script.google.com/macros/s/AKfycbxEu4UEgGjWZ4y-hqZmJWnhLr0WLBHiAqhjLcyTrBYWulda7jzqKzZ2hfbtzKefrirMvA/exec`;

  const sheetPoster = async () => {
    // ! TODO: Find a a better way to post this data to Google Sheet preferrably without having to use a form
    const response = await axios.post(`${URL}`, formData);
    // console.log(response);
    // ! TDO: fix alert thingy
    if (response.data.result === "success") setPosted(!posted);
    console.log(posted);
  };
  console.log("text: ", text);

  return (
    <>
      {!loading ? (
        <Player
          autoplay
          loop
          mode="normal"
          src="https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"
          speed="1"
          style={{ width: "70%" }}
        ></Player>
      ) : (
        <div className="display-area">
          {/* <table>
            {text.readText.map((item, id) => {
              return (
                <tr>
                  <td key={id}>{item}</td>
                </tr>
              );
            })}
          </table> */}
          <button className="sheet-button" onClick={sheetPoster}>
            Post to Google sheet!
          </button>
          {posted && alert(`Sheet has been posted to Google Sheet`)}
        </div>
      )}
    </>
  );
};

export default DisplayArea;
