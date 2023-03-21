import React, { useState } from "react";
import { tableAttribute, tableContent } from "../controller/tableAttribute";

const AllDocument = () => {
  const [entries, setEntries] = useState(4);
  const [searchWord, setSearchWord] = useState("");
  const [searchContent, setSearchContent] = useState([])

  // search method
  function resultContent() {
    const result = tableContent.filter((content) =>
      content.title.toLowerCase().match(searchWord.trim().toLocaleLowerCase()));
    setSearchContent(result);
  }


  return (
    <div>
      <div className="flex_box justify-between">
        <p>
          show{" "}
          <span>
            {" "}
            <input type="number"
              value={entries}
              className="tableColumn"
              onChange={(e) => setEntries(e.target.value)} />
          </span>{" "}
          entires
        </p>mnmmn
        <p>

          <span>
            {" "}
            <input type="text"
              placeholder="search..."
              className="tableColumn"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}

            />
            <button
              className="tableColumn p-2"
              onClick={() => setSearchWord("")}>*</button>
            <button className="tableColumn" onClick={resultContent}>search...</button>
          </span>
        </p>
      </div>
      <table className="border-2 border-gray-600 w-full">
        <thead>
          <tr>
            {tableAttribute.map((attribute, key) => (
              <td className="tableColumn" key={key}>{attribute}</td>
            ))}

          </tr>
        </thead>
        <tbody>
          {
            searchContent.length > 0 ? searchContent.slice(0, entries).map((content, key) =>
              <tr key={key}>
                <td className="tableColumn">{content.Doc_No}</td>
                <td className="tableColumn">{content.Ref_no}</td>
                <td className="tableColumn">{content.doc_type}</td>
                <td className="tableColumn">{content.title}</td>
                <td className="tableColumn">{content.department}</td>
                <td className="tableColumn">{content.search_keyword}</td>
                <td className="tableColumn">{content.view}</td>
              </tr>) : tableContent.slice(0, entries).map((content, key) =>
                <tr key={key}>
                  <td className="tableColumn">{content.Doc_No}</td>
                  <td className="tableColumn">{content.Ref_no}</td>
                  <td className="tableColumn">{content.doc_type}</td>
                  <td className="tableColumn">{content.title}</td>
                  <td className="tableColumn">{content.department}</td>
                  <td className="tableColumn">{content.search_keyword}</td>
                  <td className="tableColumn">{content.view}</td>
                </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllDocument;
