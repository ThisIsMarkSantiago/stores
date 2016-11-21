'use strict';

import mongoose from 'mongoose';

var StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
      type: { type: String },
      coordinates: [],
  },
  active: {
    type: Boolean,
    default: true
  }
},{
  timestamps: true
});

StoreSchema.index({ location: "2dsphere" });

export default mongoose.model('Store', StoreSchema);
