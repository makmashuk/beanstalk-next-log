import httpAxios from "./httpAxios";

const uploadFileService = (formData) => {
    return httpAxios.post("logs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
}
const exportData = (data) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "log-report.json";
    link.click();
  };

export {uploadFileService, exportData };