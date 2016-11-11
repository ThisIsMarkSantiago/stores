'use strict';

import mongoose from 'mongoose';

var StoreSchema = new mongoose.Schema({
  name: String,
  address: String,
  location: {
      type: { type: String },
      coordinates: [],
  },
  active: Boolean
});

StoreSchema.index({ location: "2dsphere" });

export default mongoose.model('Store', StoreSchema);
