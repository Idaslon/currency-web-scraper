import type { CrawlerProps } from "../types";
import { convertCurrencyToNumber, loadPageDocument } from "../utils";

export type MelhorCambioProps = CrawlerProps

export function melhorCambioCrawler() {
  const baseUrl = 'https://www.melhorcambio.com/conversor-de-moeda'

  function formatUrl(props: MelhorCambioProps) {
    const fromCurrency = props?.fromCurrency
    const toCurrency = props?.toCurrency

    const url = `${baseUrl}/${fromCurrency}/${toCurrency}`
    return url
  }

  function findValueText(pageDocument: Document) {
    const container = pageDocument.querySelector('#onde')
    const spanText = container!.querySelector('fieldset > div:first-of-type > span:last-of-type')

    const [value] = spanText!.innerHTML.split(' ')
    return value
  }

  async function execute(props: MelhorCambioProps) {
    const url = formatUrl(props)
    const pageDocument = await loadPageDocument(url)

    const value = findValueText(pageDocument)

    return convertCurrencyToNumber(value)
  }

  return {
    execute
  }
}
