// Script used to get the URL:
// ---------------------------------------
// function scrap() {
//     let resultUrl = '';
//     document
//         .querySelector('body')
//         .querySelectorAll('code[data-class^="23"]')
//         // .map method is not supoorted by NodeList
//         .forEach((codeTag) => {
//          const divTag = codeTag.querySelector('div[data-tag$="93"]');
//          const spanTag = divTag.querySelector('span[data-id*="21"]');
//          const iTag = spanTag.querySelector('i[class*="char"]');
//          const charValue = iTag.attributes.value.nodeValue;
//          resultUrl += charValue;
//         });

//     return resultUrl;
// }
// scrap();

const FLAG_URL =
  'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/766963';

const getFlag = async () => {
  try {
    const response = await fetch(FLAG_URL);
    if (response.status === 200) {
      return await response.text();
    }

    console.log(`Error fetching the flag, status code: ${response.status}.`);
  } catch (error) {
    console.log(error);
  }
};

export default getFlag;
