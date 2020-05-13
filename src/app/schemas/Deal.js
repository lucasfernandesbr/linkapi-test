import mongoose from 'mongoose';

const DealSchema = new mongoose.Schema({
  org_name: {
    type: String,
    required: true,
  },
  org_address: {
    type: String,
    required: false,
  },
  customer_name: {
    type: String,
    required: true,
  },
  deal_title: {
    type: String,
    required: true,
  },
  deal_value: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  add_time: {
    type: Date,
    required: true,
  },
  update_time: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('deals', DealSchema);
