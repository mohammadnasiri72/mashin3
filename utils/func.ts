export const extractTextFromHtml = (html: string) => {
  if (!html) return "";

  try {
    // اگر HTML نیست، همان را برگردان
    if (!html.includes("<") && !html.includes(">")) {
      return html;
    }

    // استفاده از DOMParser برای استخراج متن
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    let text = doc.body.textContent || "";

    // پاکسازی فضاهای خالی اضافی
    return text
      .replace(/\s+/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&zwnj;/g, "")
      .trim();
      
  } catch (error) {
    // روش fallback در صورت خطا
    return html
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&zwnj;/g, "")
      .trim();
  }
};