import {  melhorCambioCrawler } from "./crawler";

async function main() {
  const crawler = melhorCambioCrawler()

  try {
    const data = await crawler.execute({
      fromCurrency: 'dolar',
      toCurrency: 'real'
    })

    console.log(data);
  } catch(error) {
    console.log(error);
  }
}

main()
