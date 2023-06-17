export const baseURL = "http://127.0.0.1:5001/mywedding-3c67a/us-central1/app";

String.prototype.toTypeSingular = (type) => {
  switch (type) {
    case "djs":
      return "dj";
    case "dresses":
      return "dress";
    case "halls":
      return "hall";
    case "dj":
      return "dj";
    case "dress":
      return "dress";
    case "hall":
      return "hall";
    default:
      throw Error("Type not found");
  }
};

String.prototype.toTypePlural = (type) => {
  switch (type) {
    case "djs":
      return "dj";
    case "dresses":
      return "dresses";
    case "halls":
      return "halls";
    case "dj":
      return "dj";
    case "dress":
      return "dresses";
    case "hall":
      return "halls";
    default:
      throw Error("Type not found");
  }
};
