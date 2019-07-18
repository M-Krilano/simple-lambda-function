import moment from "moment";

const handler = async (event, context) => {
  const body = await new Promise(resolve => {
    setTimeout(() => {
      resolve(
        `Hello, simple lambda function yezzrrrrr. Today is ${moment().format(
          "dddd"
        )}!`
      );
    }, 2000);
  });
  return {
    statusCode: 200,
    body
  };
};

export default handler;
