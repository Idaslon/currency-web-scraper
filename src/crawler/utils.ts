import axios from "axios";
import { JSDOM } from "jsdom";

export async function loadPage(url: string) {
  const response = await axios.get(url);
  return response.data
}

export function getPageDocument(page: any) {
  const dom = new JSDOM(page);
  return dom.window.document
}

export async function loadPageDocument(url: string) {
  const pageHtml = await loadPage(url)
  const document = getPageDocument(pageHtml)

  return document
}

export function convertCurrencyToNumber(value: string) {
  const valueCleaned = value.trim().replace(',', '.')
  return Number(valueCleaned)
}
