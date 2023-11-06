import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';

@Controller()
export class AzureFunctionController {
  @Get('searchProducts')
  async searchProducts(@Query('query') query: string, context: any) {
    try {
      const response = await axios.get(
        `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
      );

      context.res = {
        body: response.data.results,
      };
    } catch (error) {
      console.error(error);
      context.res = {
        status: 500,
        body: { message: 'Erro ao buscar produtos no Mercado Livre.' },
      };
    }
  }
}
