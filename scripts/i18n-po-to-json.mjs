import path from "path";
import fs from "fs";
import gettext from "gettext-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// let i18nBaseDir = path.join(__dirname, '../../../..', 'src/assets/i18n');
let i18nBaseDir = path.join("./public/i18n");

console.log(`Scan po files into "${i18nBaseDir}"`);

let poFiles = fs.readdirSync(i18nBaseDir).filter(function (elm) {
  return elm.match(/.*\.po$/);
});

poFiles.forEach((poFileName) => {
  convertPoToJson(i18nBaseDir, poFileName);
});

function convertPoToJson(i18nBaseDir, poFileName) {
  var poFilePath = path.join(i18nBaseDir, poFileName);
  console.log(`Process po file "${poFilePath}"`);

  var poData = fs.readFileSync(poFilePath, "utf8");

  const translations = {};

  const po = gettext.po.parse(poData, "utf-8");

  if (!po.translations.hasOwnProperty("")) {
    return translations;
  }

  Object.keys(po.translations[""]).forEach((key) => {
    const translation = po.translations[""][key].msgstr.pop();
    if (key.length > 0 && translation.length > 0) {
      translations[key] = translation;
    } else {
      translations[key] = `[?]${key}`;
    }
  });

  let jsonFilePath = path.join(
    i18nBaseDir,
    poFileName.replace(/\.[^/.]+$/, "") + ".json",
  );

  console.log(`Generate json file "${jsonFilePath}"`);
  fs.writeFileSync(jsonFilePath, JSON.stringify(translations, null, "\t"));
}
