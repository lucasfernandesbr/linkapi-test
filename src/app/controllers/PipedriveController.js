import DealSchema from '../schemas/Deal';

import pipedriveApi from '../../services/api';

import BlingController from './BlingController';

class PipedriveController {
  async index(request, response) {
    try {
      const apiResponse = await pipedriveApi.get('/deals', {
        params: {
          limit: 250,
          api_token: process.env.PIPEDRIVE_API_TOKEN,
          status: 'won',
        },
      });

      const deals = apiResponse.data.data;

      await Promise.all(
        deals.map(async (deal) => {
          DealSchema.create({
            org_name: deal.org_id.name,
            org_address: deal.org_id.address,
            customer_name: deal.person_id.name,
            deal_title: deal.title,
            deal_value: deal.value,
            currency: deal.currency,
            add_time: deal.add_time,
            update_time: deal.update_time,
          });
        })
      );

      BlingController.store(deals);

      return response.json(deals);
    } catch (err) {
      return response.json({
        error: "No data with 'WON' status returned.",
      });
    }
  }
}

export default new PipedriveController();
