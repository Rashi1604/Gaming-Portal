import axios from "axios";
import XMLParser from "react-xml-parser";

export const getHeader = async () => {
  try {
    console.log(process.env.REACT_APP_HEADER_API);
    const resp = await axios.get(process.env.REACT_APP_HEADER_API, {
      timeout: 3000,
    });
    const data = await resp.data;
    const [e, msisdn] = parseXml(data);
    if (e) {
      return "";
    }
    return msisdn;
  } catch (e) {
    return "";
  }
};

export const parseXml = (xmlString) => {
  let parser = new XMLParser().parseFromString(xmlString);
  // console.log(parser);
  let current = parser.children[0];
  let drill = true;
  while (drill) {
    current = current.children[0];
    if (current?.children && current.children.length > 1) {
      current = current.children;
      drill = false;
      break;
    }
  }

  if (current[1]?.value !== "999") {
    return ["", current[1].children[0].children[0].value];
  } else {
    return ["Failed to Detect Number"];
  }
};

export const getRequest = async (query) => {
  try {
    const resp = await axios.get(
      query
    );
    const data = await resp.data;
    return [null, data]
  } catch (e) {
    return [e]
  }
}

export const postRequest = async (query, body) => {
  try {
    const resp = await axios.post(
      query,
      body
    );
    const data = await resp.data;
    return [null, data]
  } catch (e) {
    return [e]
  }
}