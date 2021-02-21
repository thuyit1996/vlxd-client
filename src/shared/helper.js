export function padLeft(str, length, paddingCharacter) {
  str = "" + str;

  while (str.length < length) {
    str = paddingCharacter + str;
  }

  return str;
}

export function removeSpecialCharacter(str) {
  if (!str) {
    return str;
  }
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|à|ã/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ẹ|ẽ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ|ĩ|ì/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ộ|ớ|ợ|ở|ỡ|ọ|ò|õ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ụ|ù/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/̉/g, "");
  str = str.replace(/́/g, "");
  // str = str.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g, "-");
  str = str.replace(/-+-/g, "-");
  // str = str.replace(/^\-+|\-+$/g, "");
  str = str.replace(/-/g, " ");
  return str;
};