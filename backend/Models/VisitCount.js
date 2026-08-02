import mongoose from 'mongoose';

const visitCountSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('VisitCount', visitCountSchema);
/*

import mongoose from 'mongoose';
schema = mongoose.Schema;

visitCountSchema = new schema({count})


*/